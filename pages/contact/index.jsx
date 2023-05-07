/* This code is a Next.js page that allows users to submit a contact form. It initializes Firebase
using the Firebase SDK, creates a form using the react-hook-form library, and submits the form data
to a Firestore database using the Firebase SDK. The page also includes some styling using Tailwind
CSS and a page title using the Head component from Next.js. */
// Step 1: Initialize Firebase
import { initializeApp } from 'firebase/app';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head'
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { BsArrowRightCircle } from "react-icons/bs";
import { app, db, auth } from '../../firebaseclient';

// Step 2: Create a Next.js page
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [msg,setmsg]=useState("");
  const router = useRouter();
  const onSubmit = async (data) => {
    try {
      const docRef = await addDoc(collection(db, 'contact'), data);
      alert("Your message has been sent successfully.");
      console.log('Form submission successful:', docRef.id);
      router.push("/");

    } catch (error) {
      console.error('Error submitting form:', error);
      setmsg('Error submitting form!');
    }
  };

  return (
    <>
      <Head>
        <title>Contact | CP Unofficial</title>
      </Head>
      <div className={`pt-16 pb-20 px-20 sm:pt-4 sm:pb-6 sm:px-6 backdrop-blur-sm`}>
        <div className="flex flex-col justify-center border-4 border-current p-5 sm:p-2 h-full rounded-lg backdrop-blur-sm">
          <h1 className="text-5xl font-semibold leading-8 justify-center p-6 flex md:text-4xl sm:text-2xl">
            Contact Us
          </h1>
          <p className='text-center text-xl md:text-lg sm:text-base'>We value your feedback and strive to continuously improve our services to better meet your needs. Please feel free to fill out the form below, or use our contact information to reach out to us directly. Our dedicated team will respond to your inquiry as soon as possible. Thank you for choosing to contact us - we look forward to connecting with you soon!</p>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center my-4">

            <input placeholder='Your Name' className='text__black p-1.5 my-1.5 w-3/5 md:w-full bg-transparent border-4 border-dark__blue rounded-md focus:border-main sm:w-full' name="name" {...register('name', { required: true })} />
            {errors.name && <span>This field is required</span>}

            <input placeholder='Your Email' className='text__black p-1.5 my-1.5 w-3/5 bg-transparent border-4 border-dark__blue rounded-md sm:w-full md:w-full focus:border-main' name="email" type="email" {...register('email', { required: true })} />
            {errors.email && <span>This field is required</span>}

            <input placeholder='Your Subject' className='text__black p-1.5 my-1.5 w-3/5 bg-transparent border-4 border-dark__blue rounded-md sm:w-full md:w-full focus:border-main' name="subject" {...register('subject', { required: true })} />
            {errors.subject && <span>This field is required</span>}

            <textarea placeholder='Your Message' className='text__black p-1.5 my-1.5 w-3/5 bg-transparent border-4 border-dark__blue rounded-md sm:w-full md:w-full focus:border-main' name="message" {...register('message', { required: true })} />
            {errors.message && <span>This field is required</span>}
            <div className='text-2xl text-center'>{msg}</div>
            <button type="submit" className='border-2 border-current mt-1.5 p-2.5 flex justify-center items-center rounded-md hover:text-dark__blue hover:bg-main'>Submit &nbsp;<BsArrowRightCircle className='inline' /></button>
          </form>
        </div>
      </div>
    </>
  );
}
