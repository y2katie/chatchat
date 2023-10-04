import {useEffect, Rect}  from "react";
import { auth, firebase } from "./firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { Message, Image, Comment,Button, Icon, Divider } from "semantic-ui-react";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "./firebase";
// import DeleteMessage from "./DeleteMessage"

const Bubble = ({ message, id }) => {
    const [user] = useAuthState(auth);

    console.log(message.id)

  
    const handleDelete = async () => {
      const taskDocRef = doc(db, 'messages', `${message.id}`)
      try{
        await deleteDoc(taskDocRef)
      } catch (err) {
        alert(err)
      }
    }
    
 
return(  
<>
<Comment.Group size="large">
    <Comment>
      <Comment.Avatar as='a' src={message.avatar} circular />
      <Comment.Content>
        <Comment.Author>{message.name}</Comment.Author>
        <Comment.Metadata>
        <div>
            <Icon name='star' />5 Faves
          </div>
        </Comment.Metadata>
        <Comment.Text>
         {message.text}
        </Comment.Text>
        <Button onClick={handleDelete}> Delete</Button>
      </Comment.Content>
    </Comment>
    
  </Comment.Group>
  <Button> Delete </Button>

  <Divider />
  </>
)
};

export default Bubble;
