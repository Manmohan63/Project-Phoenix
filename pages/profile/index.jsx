/**
 * This is a React component that displays a user's profile information after they have signed in using
 * Firebase authentication.
 * @returns The `Profile` component is being returned.
 */
import { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Link from 'next/link';
import Head from 'next/head'
import { app, db, auth }  from '../../firebaseclient';
import Maincontent from '../../Components/Profile design/maincontent';

let user_data=null;
const Profile = () => {
  const [user, setUser] = useState(null);

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

  if (!user) {
    return (
      <>
        <Head>
          <title>Profile | CP Unofficial</title>
        </Head>
      <div className="App min-h-screen">
        <section className="min-h-screen backdrop-blur-sm flex justify-center items-center">{<Link href="/signup" className="border-4 text-2xl p-4 rounded-xl">Please sign up/sign in to view your profile. Thank You!</Link>}</section>
      </div>
      </>
    );
  }
  user_data=user;
  return (
    <>
    <Head>
          <title>Profile | CP Unofficial</title>
        </Head>
    <div className='backdrop-blur-sm min-h-screen'>
      <Maincontent user={user}/>
    </div>
    </>
  );
};


export default Profile;
export {user_data};
