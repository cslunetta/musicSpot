import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useHistory, useParams } from "react-router-dom";
import { TicketMasterContext } from "../TicketMasterProvider";

export const EventDetail = () => {
  const { getTMEventById } = useContext(TicketMasterContext);

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
      
    </>
  );
};
