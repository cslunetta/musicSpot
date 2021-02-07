import { useContext } from "react";
import { EventContext } from "./EventsProvider";
import { UserEventContext } from "./InterestedEvents/Users_EventsProvider";
import Button from "react-bootstrap/Button";

export const SaveEventButton = ({ event, handleHide }) => {
  const { addEvent, getEvents } = useContext(EventContext);
  const { addUsersEvent } = useContext(UserEventContext);

  const existingEventCheck = () => {
    return fetch(`http://localhost:8088/events?ticketmasterId=${event.id}`)
      .then((res) => res.json())
      .then((i) => (i.length ? i[0] : false));
  };
  
  const handleSaveEvent = () => {
    existingEventCheck().then((exists) => {
      if (exists) {
        addUsersEvent({
          userId: parseInt(localStorage.getItem("current_user")),
          eventId: exists.id,
        });
      } else {
        addEvent({
          ticketmasterId: event.id,
          localDate: event.dates.start.localDate,
        })
          .then((response) => {
            addUsersEvent({
              userId: parseInt(localStorage.getItem("current_user")),
              eventId: response.id,
            });
          })
          .then(getEvents)
          .then(() => handleHide());
      }
    });
  };
  
  return (
    <Button
      variant="outline-primary"
      onClick={() => {
        handleSaveEvent();
      }}
    >
      Save Event
    </Button>
  );
};
