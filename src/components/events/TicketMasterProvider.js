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

// https://app.ticketmaster.com/discovery/v2/events?apikey=2a9g8I6bVUOC955gbTDL8AmIG4vKB2do&locale=*&startDateTime=2021-02-03T17:54:54:935Z&
//                                                                                                                 2020-08-01T14:00:00Z
// endDateTime=2021-03-05T17:54:54:935Z&sort=date,name,asc&city=Nashville&stateCode=tn&segmentId=KZFzniwnSyZfZ7v7nJ

export const TicketMasterContext = createContext();

export const TicketMasterProvider = (props) => {
  const [tmEvents, setTMEvents] = useState([]);

  const getTMEvents = () => {
    return fetch(
      `https://app.ticketmaster.com/discovery/v2/events?apikey=${apikey}&locale=*&startDateTime=${startDateTime}&endDateTime=${endDateTime}&sort=date,name,asc&city=Nashville&stateCode=tn&segmentId=KZFzniwnSyZfZ7v7nJ`
    )
      .then((res) => res.json())
      .then(setTMEvents);
  };

  const getTMEventById = (id) => {
    return fetch(
      `https://app.ticketmaster.com/discovery/v2/events/${id}?apikey=${apikey}`
    ).then((res) => res.json());
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
