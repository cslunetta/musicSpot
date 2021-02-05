import React from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";


export const LogoutButton = () => {
  
  const history = useHistory();
  
  const removeUser = () => {
  localStorage.removeItem("current_user");
    history.push("/login");
  };

  return (
    <Button variant="outline-danger"
    onClick={() => {
      removeUser();
    }}
  >
    Log-Out
  </Button>
  )
};
