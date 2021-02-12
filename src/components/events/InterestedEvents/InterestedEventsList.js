import React, { useContext, useEffect } from "react";
import { UserEventContext } from "./Users_EventsProvider";
import { TicketMasterContext } from "../TicketMasterProvider";
import { EventCard } from "../EventCard";
import "../event.css";
import { EventContext } from "../EventsProvider";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

export const InterestedEvents = () => {
  const { usersEvents, getUsersEventsByUserId, deleteUsersEvent } = useContext(
    UserEventContext
  );
  const { tmEvents, getTMEventById } = useContext(TicketMasterContext);
  const { getEvents } = useContext(EventContext);

  const history = useHistory();

  const handleData = () => {
    getUsersEventsByUserId().then((usersEvents) => {
      if (usersEvents.length) {
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
        );
      }
    });
  };

  const handleDeleteUserEvent = (event) => {
    getUsersEventsByUserId()
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

        deleteUsersEvent(foundUserEvent.id).then(handleData);
      });
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <>
      {usersEvents.length ? (
        <>
          <div className="events">
            {tmEvents._embedded?.events?.map((event) => {
              return (
                <EventCard
                  key={event.id}
                  event={event}
                  handleDeleteUserEvent={handleDeleteUserEvent}
                />
              );
            })}
          </div>
        </>
      ) : (
        <Card style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Title>
              You seem like you are going to be bored for the unforseeable
              future...
            </Card.Title>
            <Card.Text>
              Looks like you forgot to add some events you would be interested
              in going too. Go back to start having some fun!
            </Card.Text>
            <Button variant="outline-primary" onClick={() => history.push("/")}>
              Go Back
            </Button>
          </Card.Body>
        </Card>
      )}
    </>
  );
};
