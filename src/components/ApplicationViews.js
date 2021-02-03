import React from "react";
import { Route } from "react-router-dom";
import { EventDetail } from "./events/EventDetail";

import { EventList } from "./events/EventList";
import { EventProvider } from "./events/EventsProvider";

export const ApplicationViews = () => {
  return (
    <>
      <EventProvider>
        <Route exact path="/events">
            <EventList />
        </Route>
      </EventProvider>
    </>
  );
};
