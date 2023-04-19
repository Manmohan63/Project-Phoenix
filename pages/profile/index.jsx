import { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Link from 'next/link';
import { app, db, auth }  from '../../firebaseclient';
import Maincontent from '../../Components/Profile_design/maincontent';

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
      <div className='min-h-screen'>
        <p>Please sign up to view your profile.</p>
        {/* <Link href="/signup"><a>Sign up</a></Link> */}
      </div>
    );
  }
 
  return (
    <div className='backdrop-blur-sm min-h-screen'>
      <Maincontent user={user}/>
    </div>
  );
};


export default Profile;

