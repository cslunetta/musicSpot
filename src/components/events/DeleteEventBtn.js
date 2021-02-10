import Button from "react-bootstrap/Button";

export const DeleteUserEventButton = ({event, handleDeleteUserEvent}) => {

  return (
    <Button variant="danger" onClick={() => {handleDeleteUserEvent(event)}}>
      Delete Event
    </Button>
  );
};
