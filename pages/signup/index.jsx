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
  const [showconfirmPassword, setShowconfirmPassword] = useState(false);
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
  const [redirect, setredirect] = useState(false);
  const redirecting__alert=()=>{
    if(confirm("Warning: You'll be redirected to another page, all the data on this form will reset and cannot be recovered.")){
      router.push('/terms_and_conditions')
    }
  }
  let style = "text__black p-1.5 my-1.5 w-3/5 sm:w-full md:w-full bg-transparent border-4 border-dark__blue rounded-md sm:w-full md:w-full focus:border-main ";
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
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center my-4 sm:text-sm">
            <div className="flex text__black w-3/5 sm:w-full md:w-full sm:w-full md:w-full md:w-full">
              <div className='flex flex-col w-full'>
                <label className='text-main '>First Name </label>
                <input className={style + `w-full`} placeholder={`Your First name`} type="text" value={firstname} onChange={(e) => setfirstName(e.target.value)} />
              </div>
              <div className='flex flex-col w-full ml-3'>
              <label className='text-main '>Last Name </label>
              <input className={style + `w-full`} placeholder={`Your Last name`} type="text" value={lastname} onChange={(e) => setlastName(e.target.value)} />            
              </div>
            </div>

            <div className='flex w-3/5 sm:w-full md:w-full sm:w-full md:w-full'>  
              <div className='flex flex-col grow'>
                    <label className='w-3/5 sm:w-full md:w-full'>Email </label>
                    <input className={style + `w-full`} placeholder={`Your Email`} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>        
              <div className='flex flex-col ml-3'>
                    <label for="Gender">Gender</label>
                    <select id="Gender" name="Gender" onChange={handlegender} className={style + `w-full`}>
                      <option value="" disabled selected hidden></option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </select>
              </div>
            </div>                    

        <label className='w-3/5 sm:w-full md:w-full '>CP Unofficial ID </label>
        <input className={style} placeholder={`CP Unofficial ID`} type="text" value={userId} onChange={(event) => setUserId(event.target.value)} />
        {userIdError && <div>{userIdError}</div>}

            <div className="flex text__black w-3/5 sm:w-full md:w-full sm:flex-col">
              <div className='flex flex-col w-full'>
                <label className='text-main '>Codeforces handle </label>
                <input className={style + `w-full`} placeholder={`Your Codeforces handle e.g. tourist`} type="text" value={codeforcesId} onChange={(e) => setCodeforcesId(e.target.value)} />
              </div>
              <div className='flex flex-col w-full xl:ml-3 lg:ml-3'>
              <label className='text-main '>Leetcode handle </label>
              <input className={style + `w-full`} placeholder={`Your Leetcode handle e.g. tourist`} type="text" value={leetcodeId} onChange={(e) => setLeetcodeId(e.target.value)} />            
              </div>
            </div>
            <div className="flex w-3/5 sm:w-full md:w-full flex-col xl:flex-row">
                <div className='flex flex-col w-full'>
                  <label className='w-3/5 sm:w-full md:w-full '>Date of Birth </label>
                  <input className={style +  `w-full `} placeholder={`Date of Birth`}
                    type="text"
                    ref={ref}
                    value={dob} onChange={(e) => setDob(e.target.value)}
                    onFocus={() => (ref.current.type = "date")}
                    onBlur={() => (ref.current.type = "text")}
                    />
                </div>              
                <div className='flex flex-col w-full xl:mx-3'>
                    <label className='w-3/5 sm:w-full md:w-full '>City </label>
                    <input className={style +  `w-full`} placeholder={`Your City`} type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className='flex flex-col w-full '>
                    <label className='w-3/5 sm:w-full md:w-full '>State </label>
                    <input className={style +  `w-full`} placeholder={`Your State`} type="text" value={state} onChange={(e) => setState(e.target.value)}/>       
                </div>              
            </div>
            
            <label className='w-3/5 sm:w-full md:w-full '>Institute Name </label>
            <input className={style} placeholder={`Your Institute's Name`} type="text" value={collegename} onChange={(e) => setCollegename(e.target.value)} />
            
            <label className='w-3/5 sm:w-full md:w-full '>Interested in </label>
            <input className={style} placeholder={`e.g. web developement, Flutter`} type="text" value={interestedin} onChange={(e) => setInterestedin(e.target.value)} />

            <div className="flex w-3/5 sm:w-full md:w-full sm:flex-col md:flex-col lg:flex-col">
              <div className="relative flex flex-col w-full">
                    <label className='w-3/5 sm:w-full md:w-full'>Enter password</label>
                    <input className={style + `w-full`} placeholder={`Enter your new password`} type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} />

                    <div className="absolute top-2/3 transform -translate-y-1/2 right-4 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                    </div>
                  </div>

                  <div className="relative flex flex-col w-full xl:ml-3">
                    <label className='w-3/5 sm:w-full md:w-full'>Confirm password</label>
                    <input className={style + `w-full`} placeholder={`Confirm your new password`} type={showconfirmPassword ? "text" : "password"} value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} />

                    <div className="absolute top-2/3 transform -translate-y-1/2 right-4 cursor-pointer" onClick={() => setShowconfirmPassword(!showconfirmPassword)}>
                      {showconfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </div>
              </div>

            </div>
            <p className='text-base text-dark__blue bg-main p-1 sm:p-3 rounded-md m-2'>
              By clicking "Sign Up", you agree to our <span onClick={() => redirecting__alert()} className='hover:underline cursor-pointer'> Terms of Service</span>. Thank you for joining our community!
            </p>

            {errormessage && <div>{errormessage}</div>}
            <p>Already a User? <Link href='/signin' className='hover:underline'>Sign In</Link></p>
          <button type="submit" className={'font-bold border-2 border-main border-current mt-1.5 p-2.5 flex justify-center items-center rounded-md ' + `${theme ? "hover:text-dark__blue hover:bg-[#d49f50] border-dark__blue rounded-full" : "hover:text-light_theme_bg hover:bg-light_theme_ot border-bg-light_theme_ot rounded-full"}`}>Sign up &nbsp;<BsArrowRightCircle className='inline' /></button>
          <ToastContainer/>
          
        </form>
      </div> 
    </div>
    </>
  );
};

export default SignupForm;
