import React, { useContext, useEffect } from "react";
import { TicketMasterContext } from "./TicketMasterProvider";
import { EventCard } from "./EventCard";
import "./event.css";

export const EventList = () => {
  const { tmEvents, getTMEvents } = useContext(
    TicketMasterContext
  );

  useEffect(() => {
    console.log("EventList: useEffect - getEvents");
    getTMEvents();
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
