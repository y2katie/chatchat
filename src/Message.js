import React from "react";
import { auth } from "./firebase";
import { Message, Image, Comment, Icon, Divider } from "semantic-ui-react";
import { useAuthState } from "react-firebase-hooks/auth";
import MenuExampleBasic from "./Menu.js"

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
          <div>{new Date(message.createdAt.seconds * 1000).toLocaleDateString("en-US")}</div>
        
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
