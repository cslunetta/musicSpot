import React, { createContext, useState } from "react";
import { apikey } from "../../settings";

export const EventContext = createContext();

export const EventProvider = (props) => {
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    return fetch("http://localhost:8088/_embedded?=events")
      .then((res) => res.json())
      .then(setEvents);
  };

  // const getEvents = () => {
  //   return fetch(
  //     `https://app.ticketmaster.com/discovery/v2/events?apikey=${apikey}&locale=*&startDateTime=2021-01-26T14:17:00Z&endDateTime=2021-02-26T14:17:00Z&sort=date,name,asc&city=Nashville&stateCode=tn&segmentId=KZFzniwnSyZfZ7v7nJ`
  //   )
  //     .then((res) => res.json())
  //     .then(setEvents);
  // };

  return (
    <EventContext.Provider
      value={{
        events,
        getEvents,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};
