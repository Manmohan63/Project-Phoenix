// Step 1: Initialize Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { BsArrowRightCircle } from "react-icons/bs"; 

const firebaseConfig = {
  // Add your Firebase config here
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Step 2: Create a Next.js page
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const docRef = await addDoc(collection(db, 'contact'), data);
      console.log('Form submission successful:', docRef.id);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

return (
  <div className={`pt-16 pb-20 px-20`}>
    <div className="flex flex-col justify-center border-solid border-4 border-current p-5 h-full rounded-lg backdrop-blur-sm">
      <h1 className="text-5xl font-semibold leading-8 justify-center p-6 flex">
        Contact Us
      </h1>
      <p className='text-center text-xl'>We value your feedback and strive to continuously improve our services to better meet your needs. Please feel free to fill out the form below, or use our contact information to reach out to us directly. Our dedicated team will respond to your inquiry as soon as possible. Thank you for choosing to contact us - we look forward to connecting with you soon!</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center my-4">

        <input placeholder='Your Name' className='text__black p-1.5 my-1.5 w-3/5 bg-transparent border-2 border-main rounded-md' name="name" {...register('name', { required: true })} />
        {errors.name && <span>This field is required</span>}

        <input placeholder='Your Email' className='text__black p-1.5 my-1.5 w-3/5 bg-transparent border-2 border-main rounded-md' name="email" type="email" {...register('email', { required: true })} />
        {errors.email && <span>This field is required</span>}

        <input placeholder='Your Subject' className='text__black p-1.5 my-1.5 w-3/5 bg-transparent border-2 border-main rounded-md' name="subject" {...register('subject', { required: true })} />
        {errors.subject && <span>This field is required</span>}

        <textarea placeholder='Your Message' className='text__black p-1.5 resize-none my-1.5 w-3/5 border-2 border-main bg-transparent rounded-md' name="message" {...register('message', { required: true })} />
        {errors.message && <span>This field is required</span>}

        <button type="submit" className='border-2 border-current mt-1.5 p-2.5 flex justify-center items-center rounded-md'>Submit &nbsp;<BsArrowRightCircle className='inline'/></button>
      </form>
    </div>
  </div>
);
}
