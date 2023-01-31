import React, { useRef, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  orderBy,
  query,
  limit,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
//import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
//import { useCollectionData } from 'react-firebase-hooks/firestore';

const firebaseApp=initializeApp({
  // your config
  // apiKey: "AIzaSyCLtUq_2kPK2JuZLfsbo54UB-C7Lu-0qBU",
  // authDomain: "chat-ab56e.firebaseapp.com",
  // projectId: "chat-ab56e",
  // storageBucket: "chat-ab56e.appspot.com",
  // messagingSenderId: "134425089741",
  // appId: "1:134425089741:web:ecf237067cb04ed2e57b84",
  // measurementId: "G-SFTK4TN9MZ",
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
});
//const app1 = initializeApp(firebaseConfig);
// if (!firebase.apps.length) {
//   firebase.initializeApp(app);
// }
//console.log(process.env.MY_A);
//const app = initializeApp(firebaseApp);
const auth = getAuth();
const firestore = getFirestore(firebaseApp);
const Chat = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <h1>Chatroom</h1>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
};
function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <p>
        Do not violate the community guidelines or you will be banned for life!!
      </p>
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
  const messagesRef = collection(firestore, "messages");
  const q = query(messagesRef, orderBy("createdAt"), limit(25));

  //const [messages] = useCollectionData(q, { idField: 'id' });
  const [messages, setMessages] = useState([]);
  const [formValue, setFormValue] = useState("");

  //const [messages, setMessages] = useState([]);
  //const [formValue, setFormValue] = useState("");
  //const messagesRef = collection(firebaseFirestore, "chat-messages");
  //const q = query(messagesRef, orderBy("createdAt"), limit(25));
  getDocs(q).then((response) => {
    setMessages(response.docs.map((doc) => doc.data()));
  });

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid } = auth.currentUser;

    // await messagesRef.add({
    //   text: formValue,
    //   createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    //   uid,

    // })
    await addDoc(collection(firestore, "messages"), {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
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
  const { text, uid } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        {/* <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} /> */}
        <p>{text}</p>
      </div>
    </>
  );
}

export default Chat;



