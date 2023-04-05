import { useState,useRef } from 'react';
import { getAuth, createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { SignIn, SignInGoogle } from '@/Components/Navbar';
import { isUserIdTaken } from '@/firebaseclient';
import { BsArrowRightCircle } from "react-icons/bs";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Head from 'next/head'
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

const SignupForm = ({theme}) => {
  const [codeforcesId, setCodeforcesId] = useState('');
  const [leetcodeId, setLeetcodeId] = useState('');
  const [name, setName] = useState('');
  const [firstname, setfirstName] = useState('');
  const [lastname, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [dob, setDob] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [state, setState] = useState('');
  const [collegename, setCollegename] = useState('');
  const [interestedin, setInterestedin] = useState('');
  const [userId, setUserId] = useState('');
  const [userIdError, setUserIdError] = useState('');
  const [errormessage, setErrorMessage]=useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmPassword, setShowconfirmPassword] = useState(false)
  const router=useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (await isUserIdTaken(userId)) {
      setUserIdError('User ID is already taken')
      return;
    } 
    if (password !== confirmpassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    setName(firstname+" "+lastname);
    if (!userId||!codeforcesId || !firstname || !lastname || !email || !password || !dob || !city || !leetcodeId || !gender || !state || !collegename || !interestedin) {
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
        userId,
      });
       toast.success('Successfully signed up!');
      //setTimeout(router.push('/'),5000);

    } catch (error) {
      alert(error.message);
    }
   
        setCodeforcesId('');
        setLeetcodeId('');
        setfirstName('');
        setlastName('');
        setEmail('');
        setPassword('');
        setDob('');
        setCity('');
        setGender('');
        setState('');
        setCollegename('');
        setInterestedin('');
        setUserId('');
        setConfirmpassword('');
        
  };
  const handlegender=(e)=>{
    setGender(e.target.value)
  }
  let style = "text__black p-1.5 my-1.5 w-3/5 bg-transparent border-4 border-dark__blue rounded-md sm:w-full focus:border-main ";
  const ref = useRef();
  return (
    <>
    <Head>
        <title>Sign up | CP Unofficial</title>
      </Head>
    <div className={`pt-16 pb-20 px-20 sm:pt-4 sm:pb-6 sm:px-6 backdrop-blur-sm`}>
      <div className="flex flex-col justify-center border-4 border-current p-5 sm:p-2 h-full rounded-lg">
        <h1 className="text-5xl font-semibold leading-8 justify-center p-6 flex md:text-4xl sm:text-2xl">
          Sign Up
        </h1>
        <p className='text-center text-xl md:text-lg sm:text-base'>We&apos;re excited to have you join our community. Please take a few moments to fill out the form below and create your account.</p>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center my-4">
            <div className="flex text__black w-3/5 sm:w-full">

            <input className={style} placeholder={`First name`} type="text" value={firstname} onChange={(e) => setfirstName(e.target.value)} />
            <input className={style + `ml-3`} placeholder={`Last name`} type="text" value={lastname} onChange={(e) => setlastName(e.target.value)} />
            
            </div>
            {/* <label className='w-3/5 '>Email: </label> */}
            <input className={style} placeholder={`Email`} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <div className="flex justify-between w-3/5 sm:w-full">
            <label>Gender: </label>
                <label>
                <input type="radio" name="Gender" value="Male" onChange={handlegender} />
                  Male
                  </label>
                <label>
                <input type="radio" name="Gender" value="Female" onChange={handlegender}/>
                  Female
                  </label>
              <label>                  
                <input type="radio" name="Gender" value="Others" onChange={handlegender}/>
                  Others
                  </label>
            </div>
            
        
        <input className={style} placeholder={`CP Unofficial ID`} type="text" value={userId} onChange={(event) => setUserId(event.target.value)} />
        {userIdError && <div>{userIdError}</div>}
            
            <div className="flex text__black w-3/5 sm:w-full">
            <input className={style} placeholder={`Codeforces profile name e.g. tourist`} type="text" value={codeforcesId} onChange={(e) => setCodeforcesId(e.target.value)} />
            
            <input className={style + `ml-3`} placeholder={`Leetcode profile name e.g. tourist`} type="text" value={leetcodeId} onChange={(e) => setLeetcodeId(e.target.value)} />
            </div>
            
            
            <div className="flex text__black w-3/5 sm:w-full">
              <input className={style} placeholder={`Date of Birth`}
                type="text"
                ref={ref}
                value={dob} onChange={(e) => setDob(e.target.value)}
                onFocus={() => (ref.current.type = "date")}
                onBlur={() => (ref.current.type = "text")}
              />

            <input className={style + `ml-3`} placeholder={`City`} type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            
            <input className={style + `ml-3`} placeholder={`State`} type="text" value={state} onChange={(e) => setState(e.target.value)}/>
            </div>
            
            <input className={style} placeholder={`Institute Name`} type="text" value={collegename} onChange={(e) => setCollegename(e.target.value)} />
            
            <input className={style} placeholder={`Interested in`} type="text" value={interestedin} onChange={(e) => setInterestedin(e.target.value)} />
            <div className="flex text__black w-3/5 sm:w-full">
              <div className="relative">
            <input className="text__black w-full p-1.5 my-1.5 bg-transparent border-4 border-dark__blue rounded-md focus:border-main " placeholder={`Set a new Password`} type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </div>
            </div>
            <div className='relative'>
            <input className="text__black w-full p-1.5 my-1.5 bg-transparent border-4 border-dark__blue rounded-md focus:border-main ml-3 " placeholder={`Confirm Password`} type={showconfirmPassword ? "text" : "password"} value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} />
            <div className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer" onClick={() => setShowconfirmPassword(!showconfirmPassword)}>
              {showconfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </div>
            </div>
            </div>
            {errormessage && <div>{errormessage}</div>}
            <p>Already a User? <Link href='/signin' className='hover:underline'>Sign In</Link></p>
          <button type="submit" className={'font-bold border-2 border-main border-current mt-1.5 p-2.5 flex justify-center items-center rounded-md ' + `${theme ? "hover:text-dark__blue hover:bg-[#d49f50] border-dark__blue rounded-full" : "hover:text-light_theme_bg hover:bg-light_theme_ot border-bg-light_theme_ot rounded-full"}`}>Sign up &nbsp;<BsArrowRightCircle className='inline' /></button>
          <ToastContainer/>
          
          {/*By clicking "Sign Up," you agree to our Terms of Service and Privacy Policy. Thank you for joining our community! */}
        </form>
      </div> 
    </div>
    </>
  );
};

export default SignupForm;
