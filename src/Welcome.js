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
  Image,
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
      <Header size='medium'>Welcome to React Chat</Header>
        <Divider horizontal>
          <Header as="h4">
            <Icon/>
            Sign in with Google to chat with with your fellow React Developers.

         
          </Header>
        </Divider>
        <Button
            className="sign-in"
            color="google plus"
            onClick={googleSignIn}
          >
            <Icon src={GoogleSignin} name="google plus" />
            {" Sign In"}
          </Button>

        <p>

        </p>

        

        <Image
          src="https://hips.hearstapps.com/hmg-prod/images/check-out-this-new-app-i-downloaded-royalty-free-image-1658764612.jpg"
          fluid
          rounded
        />
      </Grid>
    </Container>
  );
};

export default Welcome;
