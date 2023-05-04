/* The above code is a React component that creates a navbar for a web application. It imports various
modules from Firebase, Next.js, and other libraries to implement features such as authentication,
search functionality, and theme switching. The navbar is responsive and includes a hamburger menu
for smaller screens. It also displays the user's profile and a sign-out button if the user is
authenticated. */
import React from 'react'
import { initializeApp } from "firebase/app";
import { Divide as Hamburger } from 'hamburger-react'
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
import { useAuthState } from "react-firebase-hooks/auth";
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import { RiMoonFill } from 'react-icons/ri'
import { BsFillSunFill } from 'react-icons/bs'
import { ImSearch } from 'react-icons/im'
import { useRouter } from 'next/navigation';
import { Offline, Online } from "react-detect-offline";
import { auth } from '@/firebaseclient';

const firebaseApp = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
});


const style__button = "border-2 m-2 md:text-base p-1.5 md:px-1.5 md:py-0 rounded-md flex justify-around items-center font-bold sm:border-0 sm:rounded-none sm:w-full sm:m-0 sm:p-2.5 ";

const Navbar = ({theme, choosetheme}) => {
  const [user] = useAuthState(auth);
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={"fixed top-0 right-0 w-full overflow-auto h-[64px] z-[100] overflow-y-hidden text-1.1 border-b-2 border-[#dbad69] flex justify-center items-center " + `${theme ? "bg-bg_blue_phoenix text-main " : "text-light_theme_bg bg-light_theme_ot border-bg-light_theme_ot"}`}>
      <div className={"flex justify-between items-center w-full px-4"}>
        <div title={"CP UnOfficial"}>
          <Link href='/' className='flex items-center space-around'>
            <Image
              src={"https://res.cloudinary.com/dk8ign4oc/image/upload/v1678292149/logo_sgor2b.png"}
              alt="Phoenix"

              height={70}
              width={70}
            />
            <Image
              src={"https://res.cloudinary.com/dk8ign4oc/image/upload/v1678292149/pic5_zoom_on6noq.png"}
              alt="logo"

              height={50}
              width={150}
            />
          </Link>
        </div>
        <div className={'hidden sm:block'}>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
        {isOpen && <div className={`fixed top-[64px] right-0 h-auto z-10 border-x-2 border-b-2 rounded-b-lg md:hidden lg:hidden xl:hidden ${theme ? "bg-bg_blue_phoenix " : " bg-light_theme_ot  border-bg-light_theme_ot"}` }>
          <div className={`flex flex-col justify-between items-center px-2`}>
            <Offline><div className='bg-main text-dark__blue p-2 rounded-md md:w-full sm:w-full'>You&apos;re Offline!</div></Offline>
          {/* <Search/> */}
            
           <section onClick={()=> setOpen(false)}> 
            <Offline><div className='bg-main text-dark__blue p-2 rounded-md'>You&apos;re Offline!</div></Offline>
              {user ? <div className='flex flex-col'><Link href='/profile' className={style__button + `${theme ? "bg-bg_blue_phoenix " : " bg-light_theme_ot  border-bg-light_theme_ot"}`} >Profile</Link><SignOut theme={theme} /></div> :
            <div className="flex flex-col"> 
            <Link href='/signup' className={style__button + `${theme ? "hover:text-bg_blue_phoenix hover:bg-main border-main rounded-full" : "hover:text-light_theme_bg hover:bg-light_theme_ot border-bg-light_theme_ot rounded-full"}`}>SignUp</Link>
            <Link href='/signin' className={style__button + `${theme ? "hover:text-bg_blue_phoenix hover:bg-main border-main rounded-full" : "hover:text-light_theme_bg hover:bg-light_theme_ot border-bg-light_theme_ot rounded-full"}`}>SignIn</Link></div>}</section>
            
            <button className={'border-2 m-2 p-1.5 rounded-full ' + `${theme ? "hover:text-bg_blue_phoenix hover:bg-main border-main" : "hover:text-light_theme_bg hover:bg-light_theme_ot border-bg-light_theme_ot"}`} onClick={() =>{
              setOpen(false); choosetheme(!theme);}}>{!theme ? <RiMoonFill size={25} /> : <BsFillSunFill size={25} />}</button>
          </div>
        </div>

        }
        <div className={`flex justify-between items-center sm:hidden`}>
          <Offline><div className='bg-main text-dark__blue p-2 rounded-md'>You&apos;re Offline!</div></Offline>
          {/* <Search/> */}
          <button 
            className={'border-2 m-2 p-1.5 ' + `${!theme ? "hover:text-bg_blue_phoenix hover:bg-main border-main rounded-full" : "hover:text-main hover:bg-light_theme_ot border-blue rounded-full"}`}
          onClick={()=> choosetheme(!theme)}> 
          {!theme ? <RiMoonFill size={25} /> : <BsFillSunFill size={25} />}</button>
          
          <section>{user ? <div className='flex'><Link href='/profile' className={style__button + `${theme ? "bg-bg_blue_phoenix " : " bg-light_theme_ot  border-bg-light_theme_ot"}`} >Profile</Link><SignOut theme={theme} /></div> : 
          <div className='flex'> <Link href='/signup' className={style__button + `${theme ? "bg-bg_blue_phoenix " : " bg-light_theme_ot  border-bg-light_theme_ot"}`} >Sign Up</Link>
          <Link href='/signin' className={style__button + `${theme ? "bg-bg_blue_phoenix " : " bg-light_theme_ot  border-bg-light_theme_ot"}`} >Sign In</Link></div>}</section>
        </div>
      </div>
    </div>
  )
}
const Search = () => {
  const [name, setname] = useState('');
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/${name}`);
    // setname('');
  };
  const handleChange = (e) => {
    setname(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className='border-2 border-main rounded-md text-dark__blue m-4 flex items-center justify-center mx-2 md:w-full sm:w-full'>
      <label className='my-1.5 mx-1 w-[15vw] md:w-full sm:w-full'>
        <input type="text" className='p-1 w-full rounded-md h-[30px]' placeholder={`Search profiles`}
          value={name} onChange={handleChange}
        />
      </label>
      <button type='submit' className='p-1 hover:text-dark__blue hover:bg-main mr-1 rounded-md text-main border-2 border-main '>
        <ImSearch size={15} />
      </button>
    </form>
  );

}


export function SignIn({theme}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorp, setErrorp] = useState('')

  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("logged In");
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
        //alert('email or password not correct');
        setErrorp('Email or Password not correct')
        // ..
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        {errorp && <div>{errorp}</div>}
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
}


function SignOut({theme}) {
  return (
    auth.currentUser && (
      <button className={style__button + `${theme ? "bg-bg_blue_phoenix " : " bg-light_theme_ot  border-bg-light_theme_ot"}`} onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

export default Navbar