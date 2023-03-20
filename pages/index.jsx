import React, { useState} from 'react'
import Carousel from '../Components/Carousel/Carousel'
import Monthly from '../Components/Monthly Scoreboard/Monthly';
import Weekly from '../Components/Weekly Scoreboard/Weekly';
import Homeredirect from '../Components/HomeRedirect/Homeredirect';
import Faq from '../Components/FAQ/FAQ';
import Link from 'next/link';
import Head from 'next/head'

const Index = () => {
  return (
    <>
      <Head>
        <title>Home | CP Unofficial</title>
      </Head>
    <div className='flex items-center flex-col'>
      <div className="flex flex-col items-center justify-start w-full">
        <Carousel />
      </div>
      <div className='flex justify-around items-around p-2.5 pb-12'>
        <div className="w-4/5">
          <h1 className='text-6xl font-bold text-center p-4 sm:text-3xl'>ABOUT US</h1>
          <p className='text-2xl sm:text-sm text-center'>Welcome to CP Unofficial, an open community dedicated to competitive programming enthusiasts! We are a group of students from NITR who are passionate about programming and have come together to create a community for like-minded individuals to connect and collaborate.
            At CP Unofficial, we believe that programming is not just a hobby, but a way of life. Our goal is to create a community where everyone can learn from each other, grow together, and have fun while doing it. Whether you are a beginner just starting out or a seasoned pro, we welcome you to join us on this journey. <Link href='/about' className='underline'>Read more</Link></p>
        </div>
      </div>
      <Homeredirect />
      <div className='flex w-full justify-around'>
      <Monthly />
      <Weekly />
      </div>
      <Faq/>
    </div>
    </>
  )
}

export default Index