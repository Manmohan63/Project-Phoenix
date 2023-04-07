import React, { useEffect,useRef, useState } from "react";
import Head from 'next/head'
import Link from 'next/link'
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  orderBy,
  query,
  limit,
  doc,
  getDoc,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

import { getAuth, GoogleAuthProvider, signInWithPopup,onAuthStateChanged } from "firebase/auth";
//import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
//import { useCollectionData } from 'react-firebase-hooks/firestore';
import { app, db, auth } from '../../firebaseclient';



const Chat = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <Head>
        <title>Chatroom | CP Unofficial</title>
      </Head>
      <div className="App">
        <header className="">
          <h1 className="">Chatroom</h1>
          {/* <SignOut /> */}
        </header>

        <section>{user ? <ChatRoom /> : <Link href="/signup">SignIn/SignUp</Link>}</section>
        {/* <ChatRoom/> */}
      </div>
    </>
  );
}



function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = collection(db, "messages");
  const q = query(messagesRef, orderBy("createdAt"), limit(25));


  const [messages, setMessages] = useState([]);
  const [formValue, setFormValue] = useState("");
  const [user, setUser] = useState(null);

  getDocs(q).then((response) => {
    setMessages(response.docs.map((doc) => doc.data()));
  });
  useEffect(() => {
    const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const db = getFirestore(app);
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        setUser(userDoc.data());
      }
    });

    return unsubscribe;
  }, []);

  const sendMessage = async (e) => {
    


    e.preventDefault();
    //const user=auth.currentUser;
    const { uid } = auth.currentUser;
    
    const {displayName}=auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      displayName : user.name,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main className= "flex-1 overflow-y-auto px-4 py-6">
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage} className="flex items-center border-t-2 border-gray-300 py-2 px-4">
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="write message.."
        />

        <button type="submit" disabled={!formValue}>
          🕊️ ➡
        </button>
      </form>
    </>
  );
}


// function ChatMessage(props) {
//   const user=auth.currentUser;
//   // const [user, setUser] = useState(null);

//   // useEffect(() => {
//   //   const auth = getAuth(app);

//   //   const unsubscribe = onAuthStateChanged(auth, async (user) => {
//   //     if (user) {
//   //       const db = getFirestore(app);
//   //       const userDoc = await getDoc(doc(db, 'users', user.uid));
//   //       setUser(userDoc.data());
//   //     }
//   //   });

//   //   return unsubscribe;
//   // }, []);
//   // const ema=user.email;
//   const { text, uid, displayName } = props.message;
  
//   const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
//  // const emailtoshow=user.email;
//   //console.log(user.name);
  
//   return (
//     <>
//       <div className={`message ${messageClass} border-main`}>
//         {/* <p>{user.displayName}</p> */}
//         {/* <p><MessengerName/></p> */}
//         {/* {user.email} */}
//         <p className={` text-main  ${messageClass === "sent" ? "text-right" : "text-left"}`}>{displayName}</p>
//         <p className={` text-dark__blue bg-main ${messageClass === "sent" ? "text-right" : "text-left"}`}>{text}</p>
//       </div>
//     </>
//   );
//}
function ChatMessage(props) {
  const messageClass = props.message.uid === auth.currentUser.uid ? "flex-row-reverse" : "flex-row";
  
  return (
    <>
      <div className={`flex ${messageClass} mb-4 items-end`}>
        <div className="flex flex-col">
          <p className="text-sm text-gray-500 mb-1">{props.message.displayName}</p>
          <p className={` bg-main  text-dark__blue rounded-lg p-2 text-white ${messageClass === "flex-row" ? "bg-gray-100 text-gray-700" : "bg-blue-500"}`}>{props.message.text}</p>
        </div>
      </div>
    </>
  );
}


export {  SignOut };
export default Chat



