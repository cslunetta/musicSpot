import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useHistory, useParams } from "react-router-dom";
import { TicketMasterContext } from "../TicketMasterProvider";
import { UserEventContext } from "./Users_EventsProvider";

export const EventDetail = () => {
  const { getTMEventById } = useContext(TicketMasterContext);
  // const { deleteUsersEvent } = useContext(UserEventContext)

  const [tmEvents, setTMEvents] = useState([]);

  const { ticketmasterId } = useParams();

  useEffect(() => {
    console.log("useEffect", ticketmasterId);
    getTMEventById(ticketmasterId).then((response) => {
      setTMEvents(response);
    });
  }, []);

  const history = useHistory();

  return (
    <>
      <Card style={{ width: "80%", marginLeft: "10%" }} className="event">
        {console.log(tmEvents)}
        <Card.Header>
          <Card.Title>{ticketmasterId}</Card.Title>
          <Card.Img
            variant="top"
            // src={
            //   event.images.find(
            //     ({ ratio, width }) => ratio === "16_9" && width > 1000
            //   ).url
            // }
          />
        </Card.Header>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            {/* {event.dates.start?.localDate} */}
          </Card.Subtitle>

          {/* <Card.Title>{event.name}</Card.Title> */}
        </Card.Body>
        <Card.Footer>
          {/* {interested_events ? (
            <>
              <Button
                variant="outline-primary"
                onClick={() =>
                  history.push(`/interested_events/details/${event.id}`)
                }
              >
                Details
              </Button>
              <DeleteUserEventButton key={event.id} event={event} />
            </>
          ) : (
            <Button variant="outline-primary" onClick={handleShow}>
              Interested
            </Button>
          )} */}
        </Card.Footer>
      </Card>
    </>
  );
};
