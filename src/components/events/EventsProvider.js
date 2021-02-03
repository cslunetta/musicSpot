import React, { createContext, useState } from "react";
import { apikey } from "../../settings";

export const EventContext = createContext();

export const EventProvider = (props) => {
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    return fetch("http://localhost:8088/events")
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

