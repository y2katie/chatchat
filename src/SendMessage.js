import React, {useState} from "react";
import { auth, db } from "./firebase";
import { Input, Button } from 'semantic-ui-react'
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = () => {
    const [message,setMessage] = useState("");

    const sendMessage = async(event) => {
        event.preventDefault();

        if (message.trim() === "") {
            alert("valid message");
            return;
        };

        const { uid, displayName, photoURL} = auth.currentUser;
        await addDoc(collection(db, "messages"), {
            text: message,
            name: displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid
        });
        setMessage("");
    };

    return (
        <form onSubmit={(event) => sendMessage(event)} className="send-message">
            <label htmlFor="messageInput" hidden>
                Enter message
            </label>
            <Input
            id="messageInput"
            name="messageInput"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-input__input"
            placeholder="type message..."
            />
            <Button animated="fade" type="submit">
                  
                 <Button.Content visible>Send </Button.Content>
                <Button.Content hidden>Are you s ure you want to send that></Button.Content>
                </Button>
        </form>
    )
}

export default SendMessage;