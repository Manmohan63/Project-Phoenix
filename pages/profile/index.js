import { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Link from 'next/link';
import { app, db, auth }  from '../../firebaseclient';

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
      <div>
        <p>Please sign up to view your profile.</p>
        {/* <Link href="/signup"><a>Sign up</a></Link> */}
      </div>
    );
  }
 
  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Date of Birth: {user.dob}</p>
      <p>City: {user.city}</p>
      <p>Codeforces ID: {user.codeforcesId}</p>
      <p>Leetcode ID: {user.leetcodeId}</p>
      <p>Gender: {user.gender}</p>
      <p>State: {user.state}</p>
      <p>College Name: {user.collegename}</p>
      <p>Interested In: {user.interestedin}</p>
    </div>
  );
};

export default Profile;
