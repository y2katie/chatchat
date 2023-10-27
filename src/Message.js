import { useEffect,useState, Rect } from "react";
import { auth, firebase } from "./firebase";
import { doc, deleteDoc } from "firebase/firestore";
import {
  Message,
  Image,
  Comment,
  Button,
  Icon,
  Divider,
} from "semantic-ui-react";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "./firebase";
// import DeleteMessage from "./DeleteMessage"

const Bubble = ({ message, id }) => {
  const [user] = useAuthState(auth);


  const handleDelete = async () => {
    const taskDocRef = doc(db, "messages", `${message.id}`);
    try {
      await deleteDoc(taskDocRef);
    } catch (err) {
      alert(err);
    }
  };

  
//   dateTime(message) {
//     const createdAt = message.createdAt;
//     if (!createdAt) return '' else return "ok";
// }

  // setDate(`${message.id}`.createdAt.toDate().toString())
let dateUs = new Date(0).toLocaleDateString("en-US");

  return (
    <>
      <Comment.Group size="large">
        <Comment>
          <Comment.Avatar as="a" src={message.avatar} circular />
          <Comment.Content>
            <Comment.Author>{message.name}</Comment.Author>
            <Comment.Metadata>
              <div>
                <Icon name="star" />5 Faves
              </div>
            </Comment.Metadata>
            <p> Posted: is: {dateUs} </p>
            {/* <p>{new Date( message.createdAt.seconds * 1000 + message.createdAt.nanoseconds / 1000, ).toLocaleDateString()}</p> */}
            {/* <p> {new Date(message.createdAt * 1000).toLocaleDateString("en-US")}</p> */}
            <Comment.Text>{message.text}</Comment.Text>
            <Button onClick={handleDelete}> Delete</Button>
          </Comment.Content>
        </Comment>
      </Comment.Group>

      <Divider />
    </>
  );
};

export default Bubble;
