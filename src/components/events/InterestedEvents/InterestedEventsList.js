import React, { useContext, useEffect, useState } from "react";
import { UserEventContext } from "./Users_EventsProvider";
import { TicketMasterContext } from "../TicketMasterProvider";
import { EventCard } from "../EventCard";
import "../event.css";
import userEvent from "@testing-library/user-event";
import { EventContext } from "../EventsProvider";

export const InterestedEvents = () => {
  const { usersEvents, getUsersEvents, deleteUsersEvent } = useContext(
    UserEventContext
  );
  const { tmEvents, getTMEventById } = useContext(TicketMasterContext);
  const { getEvents } = useContext(EventContext);

  const render = () => {
    console.log("EventList: useEffect - getEvents");
    getUsersEvents()
      .then((usersEvents) => {
        return getTMEventById(
          usersEvents
            .filter(
              (userEvent) =>
                userEvent.userId ===
                parseInt(localStorage.getItem("current_user"))
            )
            .map((event) => {
              return event.event.ticketmasterId;
            })
            .join("&id=")
        );
      })
      .then((response) => {
        console.log(response);
      });
  };

  const handleDeleteUserEvent = (event) => {
    getUsersEvents()
      .then(getEvents)
      // Get the eventId based on the ticketmaster id
      .then((e) => e.find((e) => e.ticketmasterId === event.id).id)
      // gives the eventId as a response ex eventId: 5
      .then((response) => {
        const foundUserEvent = usersEvents.find(
          (userEvent) =>
            userEvent.userId ===
              parseInt(localStorage.getItem("current_user")) &&
            response === userEvent.eventId
        );

        deleteUsersEvent(foundUserEvent.id).then(render);
      });
  };

  useEffect(() => {
    render();
  });

  return (
    <>
      <div className="events">
        {console.log("EventList: Render", tmEvents)}
        {tmEvents._embedded?.events?.map((event) => {
          return (
            <EventCard
              key={event.id}
              event={event}
              userEvent={userEvent.id}
              handleDeleteUserEvent={handleDeleteUserEvent}
            />
          );
        })}
      </div>
    </>
  );
};
