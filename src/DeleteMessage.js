// import React, {useState} from "react";
// import { auth, db, firebase } from "./firebase";
// import { Input, Button } from 'semantic-ui-react'
// import { useAuthState } from "react-firebase-hooks/auth";
// import { addDoc, collection, serverTimestamp, doc, deleteDoc } from "firebase/firestore";
// //noSQL database

// const DeleteMessage = () => {
// //curly brace symbolize start of block statement
//  //function expression, creation of an annonymous function, assigned to a variable
   
//     const [message,removeMessage] = useState("");
//     //returns current state and the function to update it
//     const [user] = useAuthState(auth);

//     const colRef = collection(db,"messages");
//     console.log(colRef);


//     const deleteMe = () => {
//         db.collection('messages').doc(user).get().then(function(querySnapshot) {
//             querySnapshot.forEach(function(doc) {
//                 doc.ref.delete();
//             });
//         });

//     }

// // how can i keep track of message ID 
// // how can i delete that message
// // how is firebase messages being represented

// // when button is clicked on 
// // select current message
// // remove message from ui
   


   

//     return (
   

//             <Button id = {message.uid} onClick={(e) => deleteMe()} animated="fade" >
//                   Delete Message 
//                 </Button>
       
//     )
// }

// export default DeleteMessage;