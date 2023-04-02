import React, { useState } from 'react'
import Head from 'next/head'
import Tools from '../../Components/tools/index';
import Platforms from '../../Components/Platforms/practice';
import YTvideos from '../../Components/YT videos/index';
import Blogs from './../../Components/Blogs/blogs';

const Index = () => {
  const [open1, setopen1] = useState(true);
  const [open2, setopen2] = useState(false);
  const [open3, setopen3] = useState(false);
  return (
    <>
      <Head>
        <title>Resources | CP Unofficial</title>
      </Head>
      <div className='backdrop-blur-sm'>
        <div className='w-full flex items-center border-b-2'>
          <div className={`cursor-pointer border-x-[1px] m-0 p-0 w-1/2 flex items-center justify-center backdrop-blur-sm ${open1 ? ("text-dark__blue bg-main sm:text-base") : "m-0"}`} onClick={() => {
            setopen1(true); setopen2(false); setopen3(false);
          }}>Blogs</div>
          <div className={`cursor-pointer border-x-[1px] m-0 p-0 w-1/2 flex items-center justify-center backdrop-blur-sm ${open2 ? ("text-dark__blue bg-main sm:text-base") : "m-0"}`} onClick={() => { setopen1(false); setopen2(true); setopen3(false); }}>YouTube</div>
          <div className={`cursor-pointer border-x-[1px] m-0 p-0 w-1/2 flex items-center justify-center backdrop-blur-sm ${open3 ? ("text-dark__blue bg-main sm:text-base") : "m-0"}`} onClick={() => { setopen1(false); setopen2(false); setopen3(true); }}>Practice</div>
        </div>
        <div className=''>
          {open1 && <Blogs />}
          {open2 && <YTvideos />}
          {open3 && <Platforms />}
        </div>
      </div>
    </>
  )
}

export default Index