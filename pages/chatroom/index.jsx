/**
 * The function exports a chatroom component that allows users to send and receive messages using
 * Firebase authentication and Firestore database.
 * @returns The code exports the `SignOut` component and the `Chat` component as the default export.
 * The `Chat` component renders either the `ChatRoom` component or a message requesting the user to
 * login if there is no authenticated user. The `ChatRoom` component renders the chat messages and a
 * form to send new messages. The `ChatMessage` component renders individual chat messages.
 */
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

import { useAuthState } from "react-firebase-hooks/auth";

import { app, db, auth } from '../../firebaseclient';
import {RiSendPlaneFill} from 'react-icons/ri';



const Chat = () => {
  const [user] = useAuthState(auth);
  
  return (
    <>
      <Head>
        <title>Chatroom | CP Unofficial</title>
      </Head>
      <div className="App">
        <section className="min-h-screen backdrop-blur-sm flex justify-center items-center">{user ? <ChatRoom /> : <Link href="/signup" className="border-4 text-2xl p-4 rounded-xl">You are requested to login with your account to access Chatroom. Thank You!</Link>}</section>
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
    <div className="flex flex-col w-full">
      <main className= "flex-1 px-4 py-6 min-h-screen backdrop-blur-sm">
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage} className="flex items-center py-2 px-2 border-2 m-2 rounded-md">
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type your message here.."
          className="w-full break-all break-words p-1.5 mr-1.5 rounded-md border-2 text-[black]"
          maxLength={1000}
        />

        <button type="submit" disabled={!formValue}><RiSendPlaneFill size={40} className="rounded-md p-1.5 border-2 hover:bg-main hover:text-dark__blue" /></button>
      </form>
    </div>
  );
}

function ChatMessage(props) {
  const messageClass = props.message.uid === auth.currentUser.uid ? "flex-row-reverse" : "flex-row";
  
  return (
    <>
      <div className={`flex ${messageClass} mb-4 items-end`}>
        <div className="flex flex-col">
          <p className="text-sm text-gray-500 mb-1">{props.message.displayName}</p>
          <p className={` bg-main  text-dark__blue rounded-lg p-2 text-white max-w-3xl break-all ${messageClass === "flex-row" ? "bg-gray-100 text-gray-700" : "bg-blue-500"}`}>{props.message.text}</p>
        </div>
      </div>
    </>
  );
}


export {  SignOut };
export default Chat



