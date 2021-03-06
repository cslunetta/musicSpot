import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import "./event.css";
import { SaveEventButton } from "./SaveEventBtn";
import { useHistory, useParams } from "react-router-dom";
import { DeleteUserEventButton } from "./DeleteEventBtn";

export const EventCard = ({ event, handleDeleteUserEvent }) => {
  const { interested_events } = useParams();
  const history = useHistory();
  // Modal show and hide logic
  const [show, setShow] = useState(false);

  const handleHide = () => setShow(false);
  const handleShow = () => setShow(true);

  // function that gives a string for the price of tickets
  const PriceRange = () => {
    // Is the min and max price the same?
    if (
      event.priceRanges !== undefined &&
      event.priceRanges[0].min === event.priceRanges[0].max
    ) {
      return `Cost: $${event.priceRanges[0].min}`;
    }
    // if the min and max are not the same show price range.
    else if (event.priceRanges !== undefined) {
      return `Cost: $${event.priceRanges[0].min}-$${event.priceRanges[0].max}`;
    }
    // if no price exists in data tell user to see details of the event.
    else {
      return `Cost: See details for more info`;
    }
  };

  return (
    <>
      <Card style={{ width: "20rem" }} className="event">
        <Card.Header>
          <Card.Img
            variant="top"
            src={
              event.images.find(
                ({ ratio, width }) => ratio === "16_9" && width > 1000
              ).url
            }
          />
        </Card.Header>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            {event.dates.start?.localDate}
          </Card.Subtitle>

          <Card.Title>{event.name}</Card.Title>
        </Card.Body>
        <Card.Footer>
          {interested_events ? (
            <>
              <Button
                // TODO hidden until details page completed
                hidden
                variant="outline-primary"
                onClick={() =>
                  history.push(`/interested_events/details/${event.id}`)
                }
              >
                Details
              </Button>
              <DeleteUserEventButton
              key={event.id}
              event={event} 
              handleDeleteUserEvent={handleDeleteUserEvent} />
            </>
          ) : (
            <Button variant="outline-primary" onClick={handleShow}>
              Interested
            </Button>
          )}
        </Card.Footer>
      </Card>

      <Modal scrollable centered show={show} onHide={handleHide}>
        <Modal.Header>
          <Image
            fluid
            src={`${
              event.images.find(
                ({ ratio, width }) => ratio === "16_9" && width > 1000
              ).url
            }`}
          />
        </Modal.Header>
        <Modal.Body>
          <h6 className="mb-2 text-muted">{event.dates.start.localDate}</h6>
          <h6 className="mb-2 text-muted">
            <PriceRange />
          </h6>
          <h6>{event._embedded.venues[0].name}</h6>

          <Modal.Title>{event.name}</Modal.Title>
          <p>
            <a href={event.url}>More info and purchasing options</a>
          </p>
          <p>
            Genre:{" "}
            {
              event.classifications.find(({ primary }) => primary === true)
                .genre.name
            }
          </p>
          <p>{event.info}</p>
        </Modal.Body>
        <Modal.Footer>
          <SaveEventButton
            key={event.id}
            event={event}
            handleHide={handleHide}
          />
          <Button variant="danger" onClick={handleHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
