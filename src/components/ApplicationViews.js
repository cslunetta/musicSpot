import React from "react";
import { Route } from "react-router-dom";
import { EventList } from "./events/EventList";
import { TicketMasterProvider } from "./events/TicketMasterProvider";

export const ApplicationViews = () => {
  return (
    <>
      <TicketMasterProvider>
        <Route exact path="/events">
            <EventList />
        </Route>
      </TicketMasterProvider>
    </>
  );
};
