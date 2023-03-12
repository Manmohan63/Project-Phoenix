import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const SignupForm = () => {
  const [codeforcesId, setCodeforcesId] = useState('');
  const [leetcodeId, setLeetcodeId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [state, setState] = useState('');
  const [collegename, setCollegename] = useState('');
  const [interestedin, setInterestedin] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!codeforcesId || !name || !email || !password || !dob || !city ||!leetcodeId || !gender || !state || !collegename || !interestedin ) {
      alert('Please fill out all required fields.');
      return;
    }

    try {
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      
      await setDoc(doc(db, 'users', user.uid), {
        codeforcesId,
        leetcodeId,
        name,
        email,
        password,
        dob,
        city,
        gender,
        state,
        collegename,
        interestedin,
      });

      
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Codeforces ID:
        <input type="text" value={codeforcesId} onChange={(e) => setCodeforcesId(e.target.value)} />
      </label>
      <label>
        Leetcode ID:
        <input type="text" value={leetcodeId} onChange={(e) => setLeetcodeId(e.target.value)} />
      </label>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        Date of Birth:
        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
      </label>
      <label>
        City:
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </label>
      <label>
        Gender:
        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
      </label>
      <label>
        State:
        <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
      </label>
      <label>
        College Name:
        <input type="text" value={collegename} onChange={(e) => setCollegename(e.target.value)} />
      </label>
      <label>
        Interested in:
        <input type="text" value={interestedin} onChange={(e) => setInterestedin(e.target.value)} />
      </label>
      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignupForm;
