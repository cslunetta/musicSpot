import React, { useContext, useEffect, useState } from "react";
import { UserEventContext } from "../Users_EventsProvider";
import { TicketMasterContext } from "../TicketMasterProvider";
import { EventCard } from "../EventCard";
import "../event.css";

export const InterestedEvents = () => {
  const { usersEvents, getUsersEvents } = useContext(UserEventContext);
  const { getTMEventById } = useContext(TicketMasterContext);

  const [tmEvents, setTMEvents] = useState([]);

  useEffect(() => {
    console.log("EventList: useEffect - getEvents");
    getTMEventById(
      usersEvents
        .filter(
          (userEvent) =>
            userEvent.userId === parseInt(localStorage.getItem("current_user"))
        )
        .map((event) => {
          return event.event.ticketmasterId;
        })
        .join("&id=")
    ).then((response) => setTMEvents(response));
  }, []);

  return (
    <>
      <h2>Events</h2>
      <div className="events">
        {console.log("EventList: Render", tmEvents)}
        {tmEvents._embedded?.events?.map((event) => {
          return <EventCard key={event.id} event={event} />;
        })}
      </div>
    </>
  );
};
