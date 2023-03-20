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


    if (!codeforcesId || !name || !email || !password || !dob || !city || !leetcodeId || !gender || !state || !collegename || !interestedin) {
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
  let style = "text__black p-1.5 my-1.5 w-3/5 bg-transparent border-2 border-main rounded-md sm:w-full";
  return (
    <div className={`pt-16 pb-20 px-20 sm:pt-4 sm:pb-6 sm:px-6`}>
      <div className="flex flex-col justify-center border-4 border-current p-5 sm:p-2 h-full rounded-lg backdrop-blur-sm">
        <h1 className="text-5xl font-semibold leading-8 justify-center p-6 flex md:text-4xl sm:text-2xl">
          Sign Up
        </h1>
        <p className='text-center text-xl md:text-lg sm:text-base'>We&apos;re excited to have you join our community. Please take a few moments to fill out the form below and create your account.</p>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center my-4">
          <label>
            Codeforces ID:
            <input className={style} type="text" value={codeforcesId} onChange={(e) => setCodeforcesId(e.target.value)} />
          </label>
          <label>
            Leetcode ID:
            <input className={style} type="text" value={leetcodeId} onChange={(e) => setLeetcodeId(e.target.value)} />
          </label>
          <label>
            Name:
            <input className={style} type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Email:
            <input className={style} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Password:
            <input className={style} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <label>
            Date of Birth:
            <input className={style} type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
          </label>
          <label>
            City:
            <input className={style} type="text" value={city} onChange={(e) => setCity(e.target.value)} />
          </label>
          <label>
            Gender:
            <input className={style} type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
          </label>
          <label>
            State:
            <input className={style} type="text" value={state} onChange={(e) => setState(e.target.value)} />
          </label>
          <label>
            College Name:
            <input className={style} type="text" value={collegename} onChange={(e) => setCollegename(e.target.value)} />
          </label>
          <label>
            Interested in:
            <input className={style} type="text" value={interestedin} onChange={(e) => setInterestedin(e.target.value)} />
          </label>
          <button type="submit">Sign up</button>
          {/*By clicking "Sign Up," you agree to our Terms of Service and Privacy Policy.

Once you've completed the form, click "Sign Up" to create your account. You'll receive a confirmation email with instructions on how to verify your account and get started.

Thank you for joining our community! */}
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
