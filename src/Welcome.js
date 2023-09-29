import { React } from "react";
import GoogleSignin from "./img/google.png";
import { auth } from "./firebase";
import {
  Button,
  Divider,
  Grid,
  Header,
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
    <Segment placeholder>
    <Grid columns={1} stackable textAlign='center'>
      <Divider vertical>Welcome to React Chat.</Divider>

      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header icon>
        

          <Button className="sign-in" color='google plus'>
      <Icon onClick={googleSignIn}
          src={GoogleSignin} name='google plus' /> Google Plus
   
      
      </Button>
      <p>Sign in with Google to chat with with your fellow React Developers.</p>
          </Header>

        </Grid.Column>
        </Grid.Row>

    </Grid>
  </Segment>
  );
};

export default Welcome;


