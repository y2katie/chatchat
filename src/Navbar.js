import React, { useState } from "react";
import GoogleSignin from "./img/google.png";
import { auth } from "./firebase";
import { Menu, Button } from "semantic-ui-react";

import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <>
      <Menu secondary>
        <Menu.Item name="editorials">Home</Menu.Item>

        <Menu.Item name="reviews">About</Menu.Item>

        <Menu.Item name="upcomingEvents">More </Menu.Item>
        <Menu.Menu position="right">
          {user ? (
            <Button onClick={signOut} className="sign-out" type="button" color="violet">
              Sign Out
            </Button>
          ) : (
            <Button onClick={googleSignIn} className="sign-in" type="button" color="teal">
              Sign In
            </Button>
          )}
        </Menu.Menu>
      </Menu>
    </>
  );
};
export default NavBar;


//delte someone in chat
//chat background be different color
