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

// const firebaseApp=initializeApp({
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
// });
//const app1 = initializeApp(firebaseConfig);
// if (!firebase.apps.length) {
//   firebase.initializeApp(app);
// }
//console.log(process.env.MY_A);
//const app = initializeApp(firebaseApp);
//export const auth = getAuth();
//const firestore = getFirestore(firebaseApp);

const Chat = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <Head>
        <title>Chatroom | CP Unofficial</title>
      </Head>
      <div className="App">
        <header>
          <h1>Chatroom</h1>
          {/* <SignOut /> */}
        </header>

        <section>{user ? <ChatRoom /> : <Link href="/signup">SignIn/SignUp</Link>}</section>
        {/* <ChatRoom/> */}
      </div>
    </>
  );
}
function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <div className="">
      <button className='sign-in' onClick={signInWithGoogle}>
        Sign in
      </button>

    </div>
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
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
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


function ChatMessage(props) {
  const user=auth.currentUser;
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const auth = getAuth(app);

  //   const unsubscribe = onAuthStateChanged(auth, async (user) => {
  //     if (user) {
  //       const db = getFirestore(app);
  //       const userDoc = await getDoc(doc(db, 'users', user.uid));
  //       setUser(userDoc.data());
  //     }
  //   });

  //   return unsubscribe;
  // }, []);
  // const ema=user.email;
  const { text, uid, displayName } = props.message;
  
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
 // const emailtoshow=user.email;
  //console.log(user.name);
  
  return (
    <>
      <div className={`message ${messageClass} border-main`}>
        {/* <p>{user.displayName}</p> */}
        {/* <p><MessengerName/></p> */}
        {/* {user.email} */}
        <p className={` text-main  ${messageClass === "sent" ? "text-right" : "text-left"}`}>{displayName}</p>
        <p className={` text-dark__blue bg-main ${messageClass === "sent" ? "text-right" : "text-left"}`}>{text}</p>
      </div>
    </>
  );
}


export { SignIn, SignOut };
export default Chat



