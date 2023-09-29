import logo from './logo.svg';
import {auth} from "./firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import './App.css';
import {Container } from "semantic-ui-react";
import NavBar from "./Navbar";
import ChatBox from "./ChatBox";
import Welcome from "./Welcome";



function App() {

  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <Container>
       <NavBar />
       {!user ? <Welcome /> : <ChatBox />}
       </Container>
       
    </div>
  );
}

export default App;
