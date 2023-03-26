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
import { getAuth, GoogleAuthProvider, signInWithPopup,signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import { RiMoonFill } from 'react-icons/ri'
import { BsFillSunFill } from 'react-icons/bs'
import { ImSearch } from 'react-icons/im'
import { useRouter } from 'next/navigation';
import { auth } from '@/firebaseclient';

const style__button = "border-2 m-2 p-1.5 rounded-md flex justify-around items-center font-bold sm:border-0 sm:rounded-none sm:w-full sm:m-0 sm:p-2.5 ";

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
        {isOpen && <div className="fixed top-[64px] right-0 h-auto w-[40vw] z-10 bg-bg_blue_phoenix border-x-2 border-b-2 border-main rounded-b-lg md:hidden">
          <div className={`flex flex-col justify-between items-center`}>
            {user ? <SignOut theme={theme} /> : <Link href='/signup' className={style__button + `${theme ? "hover:text-bg_blue_phoenix hover:bg-main border-main rounded-full" : "hover:text-light_theme_bg hover:bg-light_theme_ot border-bg-light_theme_ot rounded-full"}`}>Sign up/Sign In&nbsp;</Link> }
            <button className={'border-2 m-2 p-1.5 rounded-full ' + `${theme ? "hover:text-bg_blue_phoenix hover:bg-main border-main" : "hover:text-light_theme_bg hover:bg-light_theme_ot border-bg-light_theme_ot"}`} onClick={() => choosetheme(!theme)}>{!theme ? <RiMoonFill size={25} /> : <BsFillSunFill size={25} />}</button>
          </div>
        </div>

        }
        <div className={`flex justify-between items-center sm:hidden`}>
          <Search/>
          <button 
            className={'border-2 m-2 p-1.5 ' + `${!theme ? "hover:text-bg_blue_phoenix hover:bg-main border-main rounded-full" : "hover:text-[white] hover:bg-[blue] border-blue rounded-full"}`}
          onClick={()=> choosetheme(!theme)}> 
          {!theme ? <RiMoonFill size={25} /> : <BsFillSunFill size={25} />}</button>
          
          <section>{user ? <SignOut theme={theme} /> : <Link href='/signup' className={style__button + `${theme ? "hover:text-bg_blue_phoenix hover:bg-main border-main rounded-full" : "hover:bg-light_theme_bg hover:text-light_theme_ot border-bg-light_theme_ot rounded-full"}`}>Sign up/Sign in&nbsp;</Link>}</section>
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
    <form onSubmit={handleSubmit} className='border-2 border-main rounded-md text-dark__blue m-4 flex items-center justify-center'>
      <label className='my-1.5 mx-1 w-[15vw]'>
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

export function SignInGoogle({theme}) {
  const router=useRouter();
  const signInWithGoogle = async() => {
    const provider = new GoogleAuthProvider();
    try{
    await signInWithPopup(auth, provider);
    router.push('/');
    }
    catch(error){
     console.log(error);  
    }
  };

  return (
    <button className={style__button + `${theme ? "hover:text-bg_blue_phoenix hover:bg-main border-main rounded-full" : "hover:text-light_theme_bg hover:bg-light_theme_ot border-bg-light_theme_ot rounded-full"}`} onClick={signInWithGoogle}>
      Sign in
    </button>
  );
}

export function SignIn({theme}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')

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
        setError('email or password not correct')
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
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
}

function SignOut({theme}) {
  return (
    auth.currentUser && (
      <button className={style__button + `${theme ? "hover:text-bg_blue_phoenix hover:bg-main border-main rounded-full" : "hover:text-light_theme_bg hover:bg-light_theme_ot border-bg-light_theme_ot rounded-full"}`} onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

export default Navbar