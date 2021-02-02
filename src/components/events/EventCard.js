import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./event.css";

export const EventCard = ({ event }) => {
  return (
    <Card style={{ width: "25rem" }} className="event">
      <Card.Header>
        <Card.Img variant="top" src={`${event.images[0].url}`} />
      </Card.Header>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">
          {event.dates.start?.localDate}
        </Card.Subtitle>

        <Card.Title>{event.name}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary">Interested</Button>
      </Card.Footer>
    </Card>
  );
};
