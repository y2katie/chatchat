import { React } from "react";
import GoogleSignin from "./img/google.png";
import { auth } from "./firebase";
import {
  Button,
  Divider,
  Grid,
  Header,
  Container,
  Icon,
  Search,
  Segment,
} from "semantic-ui-react";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <Container>
      <Grid columns={1} stackable padded textAlign="center">
        <h1> Welcome to React Chat </h1>
        
    
        <h4> Do whatever you want when you want to.</h4>
      
        <p>
          Sign in with Google to chat with with your fellow React Developers.
          <Button className="sign-in" color="google plus" onClick={googleSignIn} >
          <Icon src={GoogleSignin} name="google plus" />{" Sign In"}
        
        </Button>
        </p>
        </Grid>
    </Container>
  );
};

export default Welcome;
