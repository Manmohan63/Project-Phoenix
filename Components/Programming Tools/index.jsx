/* This is a React component that renders a grid of cards containing information about various
competitive programming tools and websites. It uses the `Image` component from the `next/image`
library to display images, and imports icons from the `react-icons` library. It also uses the `Link`
component from `next/link` to create a link to another page. The data for the cards is stored in an
array of objects, and is mapped over to create the cards dynamically. */
import React from 'react'
import Image from 'next/image';
import { TiPlus } from "react-icons/ti";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Link from 'next/link';

const index = () => {
  const data = [
    {
      name: 'C2 Ladders',
      link: 'https://c2-ladders.com/',
      image_address: 'https://c2-ladders.com/c2logo.png',
      desc: `C2Ladders is rating wise list of Codeforces problems which were solved by many people who have had stable rating increase.`,
    },
    {
      name: 'Atcoder Problems',
      link: 'https://kenkoooo.com/atcoder/#/table/',
      image_address: 'https://www.andreafiori.net/img/software-development/competitive-programming/atcoder.gif',
      desc: `AtCoder Problems is a web application to help AtCoder users to solve problems and manage progress more efficiently.`,
    },
    {
      name: 'CF Tracker',
      link: 'https://cftracker.netlify.app/contests',
      image_address: 'https://lh3.googleusercontent.com/6DpPmAx2q3jnqADSa6JbS-ouBLezT0hjXWXHDr_aVc7inVlaia1CaaaEl0IGTvv7E-puoY_Kqi3mZ1CpRnzkWwDR9Q=w128-h128-e365-rj-sc0x00ffffff',
      desc: `CodeForces Tracker is a web application to help CodeForces users to solve problems and manage progress more efficiently.`,
    },
    {
      name: 'The On-Line Encyclopedia of Integer Sequences® (OEIS®)',
      link: 'https://oeis.org/',
      image_address: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/OEIS_icon.png',
      desc: `Most people use the OEIS to get information about a particular number sequence. If you are a new visitor, then you might ask the database if it can recognize your favorite sequence, if you have one.`
    },
    {
      name: 'Geometry Widget',
      link: 'https://csacademy.com/app/geometry_widget/',
      image_address: 'https://ieeextreme.org/wp-content/uploads/2020/03/csacademy_200-1.png',
      desc: `Using this tool, you can easily manipulate a plane and any objects on it, like points, segments, circles, polygons and so on.`,
    },
    {
      name: 'Codehunt',
      link: 'https://codehunt.cc/',
      image_address: 'https://codehunt.cc/assets/codehunt.png',
      desc: `CodeHunt is a tool to help coders see helpful statistics about themselves. Please enter your username and filter the questions according to your preferences. You can also sort the questions by clicking on the column headers.`,
    },
    {
      name: 'Gravy',
      link: 'https://gravy.thud.dev/#',
      image_address: 'https://gravy.thud.dev/images/gravy.svg',
      desc: `Welcome to Gravy (short for graph visualisation, I guess?). Gravy is a toy that allows you to generate graphs and visualise some common graph-based algorithms.`,
    },
    {
      name: 'Codeforces Visualizer',
      link: 'https://cfviz.netlify.app/',
      image_address: 'https://lh3.googleusercontent.com/EjnWrXMpV9a9VSC_VwAGo-J_S5GBUfsih_9WvzczPZcgz0_w63P9TBPfUkWaEWUULfazIoJLxc8UgAKAc0lNiHbCEg=w128-h128-e365-rj-sc0x00ffffff',
      desc: `Welcome to Gravy (short for graph visualisation, I guess?). Gravy is a toy that allows you to generate graphs and visualise some common graph-based algorithms.`,
    },
    {
      name: 'Codedrills',
      link: 'https://recommender.codedrills.io/tools/comparator',
      image_address: 'https://recommender.codedrills.io/images/code-drills.png',
      desc: `Competitive programming comparator; Compare competitive programming profiles between 2 different sets of handles.`,
    },
  ];
  return (
    <div className='w-full grid grid-cols-2 grid-template-rows-global md:grid-cols-1 sm:grid-cols-1'data-aos="fade-down-left" data-aos-duration="3000">
      {data.map((d, index) => (
        <div key={index}>
          <div className="m-2 border-2 p-4 rounded-md backdrop-blur-sm 
          hover:box-shadow  flex flex-col items-center justify-around lg:h-[25vw] xl:h-[25vw]" title={d.name}>
            <h1 className='font-bold text-2xl mb-2 md:text-xl sm:text-md'>{d.name}</h1>
            <div className='flex items-start justify-around'>
              <p className='text-xl lg:text-base sm:text-sm' data-aos="zoom-in" data-aos-duration="2000">{d.desc}</p>
              <Image
                src={d.image_address}
                alt={d.name}
                height={80}
                width={80}
                data-aos="flip-left" data-aos-duration="3000"
                className='border-4 border-solid border-main rounded-md flex justify-center items-center h-[80px] w-[80px] m-2 
                sm:h-[60px] sm:w-[60px] sm:m-1'
              />
            </div>
            <h2 className='font-bold text-base'><a href={d.link} target='blank' type="submit" className='border-2 border-main p-2 rounded-md hover:text-dark__blue hover:bg-main flex justify-around items-center' data-aos="fade-left" data-aos-duration="2000" >Web Store
              <BsBoxArrowUpRight className='mx-2' />&nbsp;</a></h2>
          </div>
        </div>
      ))}
      <Link href='/contact' className="hover:box-shadow m-2 border-2 p-4 rounded-md backdrop-blur-sm flex flex-col justify-around items-center lg:h-[25vw] xl:h-[25vw]" title={"Add More"}>
        <TiPlus className='h-auto w-28 md:w-20 sm:w-16 border-2 border-main rounded-xl' />
        <p classname=''> Add More</p>
      </Link>
    </div>
  )
}

export default index