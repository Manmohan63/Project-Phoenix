import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs  } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Your Firebase project configuration
  // You can find this in your Firebase console
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export async function isUserIdTaken(userId) {
  const usersRef = collection(db, 'users');
  const q = query(usersRef, where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
}


export { app, db, auth }; 