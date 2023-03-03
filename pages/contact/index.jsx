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
  const style1 = { backgroundColor: '#080042' };
  const style2 = { backgroundimage: 'linear-gradient(200deg, #080042 0%, #060031 85%)'};

return (
  <div className={`pt-24 pb-20 px-20 bg-gradient-to-r from-gradient__light__blue to-dark__blue text-main`} style={{ ...style1, ...style2 }}>
    <div className="flex flex-col justify-center border-solid border-4 border-current p-5 h-full">
      <h1 className="text-5xl font-semibold text-main leading-8 justify-center p-6 flex">
        Contact Us
      </h1>
      <p className='text-center text-xl'>We value your feedback and strive to continuously improve our services to better meet your needs. Please feel free to fill out the form below, or use our contact information to reach out to us directly. Our dedicated team will respond to your inquiry as soon as possible. Thank you for choosing to contact us - we look forward to connecting with you soon!</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">

        <input placeholder='Your Name' className='p-1.5 my-1.5 w-3/5 bg-transparent border-2 border-current' name="name" {...register('name', { required: true })} />
        {errors.name && <span>This field is required</span>}

        <input placeholder='Your Email' className='p-1.5 my-1.5 w-3/5 bg-transparent border-2 border-current rounded-md' name="email" type="email" {...register('email', { required: true })} />
        {errors.email && <span>This field is required</span>}

        <input placeholder='Your Subject' className='p-1.5 my-1.5 w-3/5 bg-transparent border-2 border-current rounded-md' name="subject" {...register('subject', { required: true })} />
        {errors.subject && <span>This field is required</span>}

        <textarea placeholder='Your Message' className='p-1.5 text-white resize-none  my-1.5 w-3/5 bg-transparent border-2  border-[#dbad69] rounded-md' name="message" {...register('message', { required: true })} />
        {errors.message && <span>This field is required</span>}

        <button type="submit" className='border-2 border-current mt-1.5 p-2.5 flex justify-center items-center rounded-md'>Submit &nbsp;<BsArrowRightCircle className='inline'/></button>
      </form>
    </div>
  </div>
);
}
