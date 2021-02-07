import React, { useContext, useEffect, useState } from "react";
import { UserEventContext } from "./Users_EventsProvider";
import { TicketMasterContext } from "../TicketMasterProvider";
import { EventCard } from "../EventCard";
import "../event.css";

export const InterestedEvents = () => {
  const { getUsersEvents } = useContext(UserEventContext);
  const { tmEvents, getTMEventById } = useContext(TicketMasterContext);

  useEffect(() => {
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
  }, []);

  return (
    <>
      <div className="events">
        {console.log("EventList: Render", tmEvents)}
        {tmEvents._embedded?.events?.map((event) => {
          return <EventCard key={event.id} event={event} />;
        })}
      </div>
    </>
  );
};
