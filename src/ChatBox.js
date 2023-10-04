import { React, useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "./firebase";
import Bubble from "./Message";
import SendMessage from "./SendMessage";
import DeleteMessage from "./DeleteMessage";
import { Divider, Button } from "semantic-ui-react";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  // const SendMessage = ({scroll}) => {
  //     const sendMessage = async(event) => {
  //         setMessages("");
  //         scroll.current.scrollIntoView({behavior: "smooth"})
  //     }

  // }

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(5)
    );

    // const deleteThis = () => {
    //     db.collection("messages").doc(`${messages.id}`).delete().then(() => {
    //         console.log("Document successfully deleted!");
    //     }).catch((error) => {
    //         console.error("Error removing document: ", error);
    //     });
    // }


    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });
    return () => unsubscribe;
  }, []);

  return (
    <>
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <Bubble key={message.id} message={message} />
        ))}
        <Divider />
      </div>
      <Button> Delete </Button>

      {/* when a new message enters the chat, the screen scrolls down to the scroll div */}
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
    </main>
    </>
  );
};

export default ChatBox;
