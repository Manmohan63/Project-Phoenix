/* This is a React functional component that renders the home page of a website for a community of
competitive programming enthusiasts. It imports several components from other files, including a
carousel, a home redirect, and a FAQ section. It also uses the `Head` component from Next.js to set
the title of the page. The component returns JSX code that defines the layout and content of the
home page. */
import React, { useState} from 'react'
import Carousel from '../Components/Carousel/carousel'
import Homeredirect from '../Components/HomeRedirect/homeredirect';
import Faq from '../Components/FAQ/FAQ';
import Link from 'next/link';
import Head from 'next/head'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Index = ({theme}) => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <>
      <Head>
        <title>Home | CP Unofficial</title>
      </Head>
    <div className='flex items-center flex-col backdrop-blur-sm'>
      <div className="flex flex-col items-center justify-start w-full" >
        <Carousel theme={theme}/>
      </div>
      <div className='flex justify-around items-around p-2.5 pb-12'>
        <div className="w-4/5" data-aos="fade-up" data-aos-duration="3000">
          <h1 className='text-6xl font-bold text-center p-4 sm:text-3xl'>ABOUT US</h1>
          <p className='text-2xl sm:text-sm text-center'>Welcome to CP Unofficial, an open community dedicated to competitive programming enthusiasts! We are a group of students from NITR who are passionate about programming and have come together to create a community for like-minded individuals to connect and collaborate.
            At CP Unofficial, we believe that programming is not just a hobby, but a way of life. Our goal is to create a community where everyone can learn from each other, grow together, and have fun while doing it. Whether you are a beginner just starting out or a seasoned pro, we welcome you to join us on this journey. <Link href='/about' className='underline'>Read more</Link></p>
        </div>
      </div>
      <div className='w-full'>
      <Homeredirect theme={theme} />
      </div>
      <div>
      <Faq/>
      </div>
    </div>
    </>
  )
}

export default Index