import React, { useContext, useEffect } from "react";
import { EventContext } from "./EventsProvider";
import { EventCard } from "./EventCard";
import "./event.css"

export const EventList = () => {
  const { events, getEvents } = useContext(EventContext);

  useEffect(() => {
    console.log("EventList: useEffect - getEvents");
    getEvents();
  }, []);

  return (
    <>
      <h2>Events</h2>
      <div className="events">
        {console.log("EventList: Render", events.events)}
        {events.events?.map((event) => {
          return <EventCard key={event.id} event={event} />;
        })}
      </div>
    </>
  );
};
