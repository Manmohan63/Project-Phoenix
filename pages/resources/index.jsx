import React from 'react'

const index = () => {
  return (
    <div>index</div>
  )
}

export default index
// Step 1: Initialize Firebase
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, addDoc } from 'firebase/firestore';

// const firebaseConfig = {
//   // Add your Firebase config here
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Step 2: Create a Next.js page
// import { useForm } from 'react-hook-form';

// export default function Contact() {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       const docRef = await addDoc(collection(db, 'contact'), data);
//       console.log('Form submission successful:', docRef.id);
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label>Name</label>
//       <input name="name" {...register('name', { required: true })} />
//       {errors.name && <span>This field is required</span>}

//       <label>Email</label>
//       <input name="email" type="email" {...register('email', { required: true })} />
//       {errors.email && <span>This field is required</span>}

//       <label>Subject</label>
//       <input name="subject" {...register('subject', { required: true })} />
//       {errors.subject && <span>This field is required</span>}

//       <label>Message</label>
//       <textarea name="message" {...register('message', { required: true })} />
//       {errors.message && <span>This field is required</span>}

//       <button type="submit">Submit</button>
//     </form>
//   );
// }
