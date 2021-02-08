import { get } from "jquery";
import { createContext, useState } from "react";

export const UserEventContext = createContext();

export const UserEventsProvider = (props) => {
  const [usersEvents, setUsersEvents] = useState([]);

  const getUsersEvents = () => {
    return fetch("http://localhost:8088/users_events?_expand=event")
      .then((res) => res.json())
      .then((usersEvents) => {
        setUsersEvents(usersEvents);
        return usersEvents;
      });
  };

  const addUsersEvent = (event) => {
    return fetch("http://localhost:8088/users_events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    }).then(getUsersEvents);
  };

  const deleteUsersEvent = (eventId) => {
    return fetch(`http://localhost:8088/users_events/${eventId}`, {
      method: "DELETE",
    }).then(getUsersEvents);
  };

  return (
    <UserEventContext.Provider
      value={{
        usersEvents,
        getUsersEvents,
        addUsersEvent,
        deleteUsersEvent,
      }}
    >
      {props.children}
    </UserEventContext.Provider>
  );
};
