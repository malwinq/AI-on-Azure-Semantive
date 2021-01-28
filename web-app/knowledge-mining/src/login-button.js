import React from "react";
import {  Button } from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
        style={{
            position: 'absolute',
            top: '1.5%',
            right: '6%',
            backgroundColor: '#ffffff',
            color: '#1b19b6'
        }}
      color="primary" 
      onClick={() => loginWithRedirect()}
    >
      Log In/Out
    </Button>
  );
};

export default LoginButton;