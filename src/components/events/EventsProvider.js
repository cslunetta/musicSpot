import React, { createContext, useState } from "react";

export const EventContext = createContext();

export const EventProvider = (props) => {
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    return fetch("http://localhost:8088/_embedded?=events")
      .then((res) => res.json())
      .then(setEvents);
  };

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
