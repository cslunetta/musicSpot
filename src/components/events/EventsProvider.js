import { createContext, useState } from "react";

export const EventContext = createContext();

export const EventsProvider = (props) => {
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    return fetch("http://localhost:8088/events")
      .then((res) => res.json())
      .then(setEvents);
  };

  const addEvent = (event) => {
    return fetch("http://localhost:8088/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    }).then((res) => res.json());
  };

  return (
    <EventContext.Provider
      value={{
        events,
        getEvents,
        addEvent,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};
