import React, { createContext, useState } from "react";
import { apikey } from "../../settings";

//
// start and end date function for api call
let startDateTime = (new Date()).toJSON();
startDateTime = startDateTime.substring(0, startDateTime.length-5) + "Z"

console.log(startDateTime);

let endDate = new Date();
endDate.setDate(endDate.getDate() + 30);

let endDateTime = (endDate).toJSON();
endDateTime = endDateTime.substring(0, endDateTime.length-5) + "Z"
console.log(endDateTime);

export const TicketMasterContext = createContext();

export const TicketMasterProvider = (props) => {
  const [tmEvents, setTMEvents] = useState([]);

  const getTMEvents = () => {
    return fetch(
      `https://app.ticketmaster.com/discovery/v2/events?apikey=${apikey}&locale=*&startDateTime=${startDateTime}&endDateTime=${endDateTime}&sort=date,name,asc&city=Nashville&stateCode=tn&segmentId=KZFzniwnSyZfZ7v7nJ&size=30`
    )
      .then((res) => res.json())
      .then(setTMEvents);
  };

  const getTMEventById = (eventId) => {
    return fetch(
      `https://app.ticketmaster.com/discovery/v2/events?apikey=${apikey}&id=${eventId}&locale=*`
    ).then((res) => res.json())
    .then(setTMEvents)
  };

  return (
    <TicketMasterContext.Provider
      value={{
        tmEvents,
        getTMEvents,
        getTMEventById,
      }}
    >
      {props.children}
    </TicketMasterContext.Provider>
  );
};
