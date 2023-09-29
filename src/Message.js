import React from "react";
import { auth } from "./firebase";
import { Message, Image, Comment, Icon, Divider } from "semantic-ui-react";
import { useAuthState } from "react-firebase-hooks/auth";

// const Bubble = ({ message }) => {
//   const [user] = useAuthState(auth);

//   return (
//     <>
//       <div className={`chat-bubble ${message.uid === user.uid ? "right" : ""}`}>
//         <span>Username</span>

//         <Image className="chat-bubble_left" src={message.avatar} circular  />

//         <Message floated="right" header={message.name} content={message.text}/>

//       </div>
//     </>
//   );
// };





const Bubble = ({ message }) => {
    const [user] = useAuthState(auth);
return(  
<>
<Comment.Group size="large">
    <Comment>
      <Comment.Avatar as='a' src={message.avatar} circular />
      <Comment.Content>
        <Comment.Author>{message.name}</Comment.Author>
        <Comment.Metadata>
          <div>2 days ago</div>
          {message.readTime}
          <div>
            <Icon name='star' />5 Faves
          </div>
        </Comment.Metadata>
        <Comment.Text>
         {message.text}
        </Comment.Text>
      </Comment.Content>
    </Comment>
  </Comment.Group>
  <Divider />
  </>
)
};

export default Bubble;
