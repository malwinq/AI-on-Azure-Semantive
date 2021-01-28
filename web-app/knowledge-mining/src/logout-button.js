import React from "react";
import {  Button } from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      style={{
        position: 'absolute',
        top: '1.5%',
        right: '6%',
        backgroundColor: '#ffffff',
        color: '#1b19b6'
      }}
      onClick={() =>
        logout({
            returnTo: window.location.origin,
          })
      }
    >
      Log In/Out
    </Button>
  );
};

export default LogoutButton;