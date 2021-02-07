import React from "react";
import { useParams } from "react-router-dom";


export const EventDetail = () => {
  const { eventId } = useParams();
  
  return (
    <>
      <h1>Test</h1>
    </>
    // <Card style={{ width: "20rem" }} className="event">
    //   <Card.Header>
    //     <Card.Img
    //       variant="top"
    //       src={
    //         event.images.find(
    //           ({ ratio, width }) => ratio === "16_9" && width > 1000
    //         ).url
    //       }
    //     />
    //   </Card.Header>
    //   <Card.Body>
    //     <Card.Subtitle className="mb-2 text-muted">
    //       {event.dates.start?.localDate}
    //     </Card.Subtitle>

    //     <Card.Title>{event.name}</Card.Title>
    //   </Card.Body>
    //   <Card.Footer>
    //     {interested_events ? (
    //       <Button
    //         variant="outline-primary"
    //         onClick={() => history.push(`/interested_events/${event.id}`)}
    //       >
    //         Details
    //       </Button>
    //     ) : (
    //       <Button variant="outline-primary" onClick={handleShow}>
    //         Interested
    //       </Button>
    //     )}
    //   </Card.Footer>
    // </Card>
  );
};
