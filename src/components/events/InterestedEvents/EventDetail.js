import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TicketMasterContext } from "../TicketMasterProvider";

export const EventDetail = () => {
  const { getTMEventById } = useContext(TicketMasterContext);

  const [setTMEvents] = useState([]);

  const { ticketmasterId } = useParams();

  useEffect(() => {
    console.log("useEffect", ticketmasterId);
    getTMEventById(ticketmasterId).then((response) => {
      setTMEvents(response);
    });
  }, []);

  return <></>;
};
