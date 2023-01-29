
import React, { useRef, useState } from 'react';
import {initializeApp} from 'firebase/app';
import {getFirestore,collection,orderBy,query,limit,addDoc,getDocs,serverTimestamp} from 'firebase/firestore';
 import {getAuth,GoogleAuthProvider,signInWithPopup} from  'firebase/auth';
//import { getAuth } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
//import { useCollectionData } from 'react-firebase-hooks/firestore';

const firebaseApp = initializeApp({
    
  })
  //const app = initializeApp(firebaseConfig);
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

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
     );
}
function SignIn() {

    const signInWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth,provider);
    }
  
    return (
      <>
        <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        <p>Do not violate the community guidelines or you will be banned for life!</p>
      </>
    )
  
  }
  
  function SignOut() {
    return auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
  }
  
  
  function ChatRoom() {
    const dummy = useRef();
    const messagesRef = collection(firestore,'messages');
    const q = query(messagesRef,orderBy('createdAt'),limit(25));
  
    //const [messages] = useCollectionData(q, { idField: 'id' });
  const [messages, setMessages] = useState([]);
    const [formValue, setFormValue] = useState('');
  

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
      await addDoc(collection(firestore, 'messages'), {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      
    });
  
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (<>
      <main>
  
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
        <span ref={dummy}></span>
  
      </main>
  
      <form onSubmit={sendMessage}>
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="write message.." />
  
        <button type="submit" disabled={!formValue}>🕊️ ➡</button>
  
      </form>
    </>)
  }
  
  
  function ChatMessage(props) {
    const { text, uid } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        {/* <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} /> */}
        <p>{text}</p>
      </div>
    </>)
  }
 
export default Chat;
