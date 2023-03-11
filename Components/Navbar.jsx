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


const firebaseApp = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
});
const auth = getAuth();
const firestore = getFirestore(firebaseApp);
const style__button = "border-2 border-main m-2 p-1.5 rounded-md hover:text-dark__blue hover:bg-main flex justify-around items-center font-bold sm:border-0 sm:rounded-none sm:w-full sm:m-0 sm:p-2.5";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [isOpen, setOpen] = useState(false);
  // { console.log(isOpen) }
  return (
    <div className={"fixed top-0 right-0 w-full overflow-auto h-[64px] z-10 overflow-y-hidden text-[#dbad69] text-1.1 border-b-2 border-[#dbad69] flex justify-center items-center bg-gradient-to-r from-[#231869] to-[#0b005d]"}>
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
            <Link href='/' className={style__button}>Sign up&nbsp;</Link>
            {user ? <SignOut /> : <SignIn />}
          </div>
        </div>

        }
        <div className={`flex justify-between items-center sm:hidden`}>
          <Link href='/' className={style__button}>Sign up&nbsp;</Link>
          <section>{user ? <SignOut /> : <SignIn />}</section>
        </div>
      </div>
    </div>
  )
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <button className={style__button} onClick={signInWithGoogle}>
      Sign in
    </button>
  );
}


function SignOut() {
  return (
    auth.currentUser && (
      <button className={style__button} onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

export default Navbar