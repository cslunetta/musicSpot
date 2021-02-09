import React from "react";
import { Route } from "react-router-dom";
import { EventList } from "./events/EventList";
import { TicketMasterProvider } from "./events/TicketMasterProvider";
import { EventsProvider } from "./events/EventsProvider";
import { UserEventsProvider } from "./events/InterestedEvents/Users_EventsProvider";
import { InterestedEvents } from "./events/InterestedEvents/InterestedEventsList";
import { EventDetail } from "./events/InterestedEvents/EventDetail";

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
            <Route exact path="/:interested_events">
              <InterestedEvents />
            </Route>
          </EventsProvider>
        </TicketMasterProvider>
      </UserEventsProvider>

      <TicketMasterProvider>
        <Route exact path="/interested_events/details/:ticketmasterId">
          <EventDetail />
        </Route>
      </TicketMasterProvider>
    </>
  );
};
