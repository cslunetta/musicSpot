import React from "react";
import { Route } from "react-router-dom";
import { EventList } from "./events/EventList";
import { TicketMasterProvider } from "./events/TicketMasterProvider";
import { EventsProvider } from "./events/EventsProvider";
import { UserEventsProvider } from "./events/InterestedEvents/Users_EventsProvider";
import { InterestedEvents } from "./events/InterestedEvents/InterestedEventsList";

export const ApplicationViews = () => {
  return (
    <>
      <TicketMasterProvider>
        <EventsProvider>
          <UserEventsProvider>
            <Route exact path="/">
              <EventList />
            </Route>
          </UserEventsProvider>
        </EventsProvider>
      </TicketMasterProvider>

      <UserEventsProvider>
        <TicketMasterProvider>
          <EventsProvider>
            <Route path="/:interested_events">
              <InterestedEvents />
            </Route>
          </EventsProvider>
        </TicketMasterProvider>
      </UserEventsProvider>

      <EventsProvider>
        <TicketMasterProvider>
          <Route path="/interested_events/details/:eventId(\d+)"></Route>
        </TicketMasterProvider>
      </EventsProvider>
    </>
  );
};
