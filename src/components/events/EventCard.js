import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./event.css";
import { Image } from "react-bootstrap";

export const EventCard = ({ event }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const PriceRange = () => {
    if (
      event.priceRanges !== undefined &&
      event.priceRanges[0].min === event.priceRanges[0].max
    ) {
      return `Cost: $${event.priceRanges[0].min}`;
    } else if (event.priceRanges !== undefined) {
      return `Cost: $${event.priceRanges[0].min}-$${event.priceRanges[0].max}`;
    } else {
      return `Cost: See details for more info`;
    }
  };

  return (
    <>
      <Card style={{ width: "25rem" }} className="event">
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

          <Card.Title>
            {event.name}
          </Card.Title>
        </Card.Body>
        <Card.Footer>
          <Button variant="outline-primary" onClick={handleShow}>
            Interested
          </Button>
        </Card.Footer>
      </Card>

      <Modal scrollable centered show={show} onHide={handleClose}>
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
            <a href={event.url}>
              More info and purchasing options
            </a>
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
          <Button variant="outline-primary">Save Event</Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
