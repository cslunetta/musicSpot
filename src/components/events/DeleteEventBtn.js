import { useContext } from "react";
import { UserEventContext } from "./InterestedEvents/Users_EventsProvider";
import { EventContext } from "./EventsProvider";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

export const DeleteUserEventButton = ({ event }) => {
  const { usersEvents, getUsersEvents, deleteUsersEvent } = useContext(
    UserEventContext
  );
  const { getEvents } = useContext(EventContext);

  const history = useHistory();

  // filter users events first by the current user then delete event related to it
  const handleDeleteUserEvent = () => {
    // Get the eventId based on the ticketmaster id

    getUsersEvents()
      .then(getEvents)
      .then((e) => e.find((e) => e.ticketmasterId === event.id).id)
      // gives the eventId as a response ex eventId: 5
      .then((response) => {
        const foundUserEvent = usersEvents.find(
          (userEvent) =>
            userEvent.userId ===
              parseInt(localStorage.getItem("current_user")) &&
            response === userEvent.eventId
        );

        deleteUsersEvent(foundUserEvent.id).then(() =>
          history.push("/interested_events")
        );
      });
  };

  // deleteUsersEvent();

  return (
    <Button variant="danger" onClick={handleDeleteUserEvent}>
      Delete Event
    </Button>
  );
};
