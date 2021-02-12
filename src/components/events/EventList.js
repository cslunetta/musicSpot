import React, { useContext, useEffect } from "react";
import { TicketMasterContext } from "./TicketMasterProvider";
import { EventCard } from "./EventCard";
import "./event.css";

export const EventList = () => {
  const { tmEvents, getTMEvents } = useContext(TicketMasterContext);

  useEffect(() => {
    getTMEvents();
  }, []);

  return (
    <>
      <div className="events">
        {tmEvents._embedded?.events?.map((event) => {
          return <EventCard key={event.id} event={event} />;
        })}
      </div>
    </>
  );
};
