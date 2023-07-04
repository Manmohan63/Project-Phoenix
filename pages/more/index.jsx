/**
 * The function renders a page with two tabs, one for displaying tools and the other for displaying
 * browser extensions.
 * @returns The `More` component is being returned, which contains a `Head` component from Next.js, a
 * `div` element with two child `div` elements that toggle between displaying the `Tools` and
 * `Browser_extensions` components based on the `open` state using conditional rendering.
 */
import React from 'react'
import Head from 'next/head'
import { useState } from 'react';
import Tools from '../../Components/Programming Tools/index';
import Browser_extensions from '../../Components/Browser Extensions/index';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { useEffect } from 'react';

const More = () => {
    // useEffect(() => {
    //     AOS.init();
    //   }, [])
    const [open, setopen] = useState(true);
    return (
        <>
            <Head>
                <title>More | CP Unofficial</title>
            </Head>
            <div className=''>
                <div className='w-full flex items-center border-b-2'>
                    <div className={`border-x-[1px] m-0 p-0 w-1/2 flex items-center justify-center backdrop-blur-sm ${open ? ("text-dark__blue bg-main sm:text-base") : "m-0"}`} onClick={() => setopen(true)}>Tools</div>
                    <div className={`border-x-[1px] m-0 p-0 w-1/2 flex items-center justify-center backdrop-blur-sm ${!open ? ("text-dark__blue bg-main sm:text-base") : "m-0"}`} onClick={() => setopen(false)}>Browser Extensions</div>
                </div>
                <div className=''>
                    {open && <Tools />}
                    {!open && <Browser_extensions />}
                </div>
            </div>
        </>
    )
}

export default More