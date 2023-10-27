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


  const signOut = () => {
    auth.signOut();
  };

  return (
    <>
      <Container style={{position:"absolute", marginTop:"90px", zIndex:"2000"}}>
        {/* <Grid columns={1} stackable padded textAlign="center"> */}
        <Header as="h1">Illuminate Your Conversations</Header>
        <Header as="h4">
          <Icon />
          Connecting Conversations with Privacy in Mind
          
        </Header>
        
      </Container>

  

      <Image
        src="https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        fluid
        rounded
      />

        {/* <Button className="sign-in" color="google plus" onClick={googleSignIn}>
        <Icon src={GoogleSignin} name="google plus" />
        {" Sign In"}
      </Button> */}
      {/* </Grid> */}
    </>
  );
};

export default Welcome;
