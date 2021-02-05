import { useContext } from "react";
import { UserEventContext } from "./Users_EventsProvider";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";

export const DeleteUserEventButton = ({ event, handleHide }) => {
  const { deleteUsersEvent } = useContext(UserEventContext);

  const { eventId } = useParams;

  const handleDeleteUserEvent = () => {
    deleteUsersEvent;
  };

  return (
    <Button
      variant="outline-primary"
      onClick={() => {
        handleDeleteUserEvent(eventId).then(() => {
          history.push("/my_events");
        });
      }}
    >
      Delete Event
    </Button>
  );
};
