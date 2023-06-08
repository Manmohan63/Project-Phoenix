/* The below code is a React component that displays a list of Chrome extensions related to competitive
programming. It uses Next.js for server-side rendering and includes images, links, and descriptions
for each extension. The component also includes a "Add More" button that links to a contact page. */
import React from 'react'
import Image from 'next/image';
import { TiPlus } from "react-icons/ti";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Link from 'next/link';

const index = () => {
  const data = [
    {
      name: 'CF-Predictor',
      link: 'https://chrome.google.com/webstore/detail/cf-predictor/ocfloejijfhhkkdmheodbaanephbnfhn',
      image_address: 'https://lh3.googleusercontent.com/z7bUgnNFUF_3CBjOs4YijH8fdsgcZVw5CnrsEnyjMp2w3OqjwzocnCTt4MQJ0rm4z3tkVo0UUZcu8J9nzjs5aktT=w128-h128-e365-rj-sc0x00ffffff',
      desc: `This extension predicts rating changes for Codeforces. It shows approximate deltas during and after the contest. A huge number of your nerve cells die every time when you wait for a rating update on Codeforces.`,
      version: `1.3.2`,
    },
    {
      name: 'Codeforces Enhancer',
      link: 'https://chrome.google.com/webstore/detail/codeforces-enhancer/ocmandagmgmkcplckgnfgaokpgkfenmp',
      image_address: 'https://lh3.googleusercontent.com/EjnWrXMpV9a9VSC_VwAGo-J_S5GBUfsih_9WvzczPZcgz0_w63P9TBPfUkWaEWUULfazIoJLxc8UgAKAc0lNiHbCEg=w128-h128-e365-rj-sc0x00ffffff',
      desc: `Makes Codeforces better: multiple ratings graph, colorizes standings, adds "Hide/Show solved problems" link
Chrome extension that makes Codeforces better: supports multiple ratings graph.`,
      version: `1.2`,
    },
    {
      name: 'CF Tracker',
      link: 'https://chrome.google.com/webstore/detail/cf-tracker/hadiffebpglmdnknojeoelfgmjleiecc',
      image_address: 'https://lh3.googleusercontent.com/t7Lw886qdcWqx5MrfP9yLqJa3ke9Iz4hi-A9TGdHqAJOZLVVzfy075oW4ts_Q1sODlmTPcXZxX5DKnTlcsuykQ0D=w128-h128-e365-rj-sc0x00ffffff',
      desc: `Find time invested in a particular problem during a contest or otherwise. Find time spent on a particular problem on codeforces.com. It helps in increasing speed which is vital for any competitive programmer.`,
      version: `1.0.1`,
    },
    {
      name: 'Codeforces Customizer',
      link: 'https://chrome.google.com/webstore/detail/codeforces-customizer/akmlgflgekmnameijijkefhochekjfgg',
      image_address: 'https://lh3.googleusercontent.com/6DpPmAx2q3jnqADSa6JbS-ouBLezT0hjXWXHDr_aVc7inVlaia1CaaaEl0IGTvv7E-puoY_Kqi3mZ1CpRnzkWwDR9Q=w128-h128-e365-rj-sc0x00ffffff',
      desc: `This is a chrome extension to customise codeforces and enhance user experience.`,
      version: `1.1.1`,
    },
    {
      name: 'Keep Problems',
      link: 'https://chrome.google.com/webstore/detail/keep-problems/bpcgbgiipbblkoajepkmlcdgafnhiamp',
      image_address: 'https://lh3.googleusercontent.com/Z7ZSLIzEyCiss7irXxbFf63TJWubR5zAaAOKrkrqpNNKkyAesISVzYzV_vGggyjIHvUTEk6To-Y-nfMA3RGucP4Hsg=w128-h128-e365-rj-sc0x00ffffff',
      desc: `Save problem with link, name, difficulty, code and notes.This extension helps to save and keep track of problems from different platforms(codeforces, codechef, atcoder, leetcode etc.).`,
      version: `0.1.1`,
    },
    {
      name: 'Codeforces++',
      link: 'https://chrome.google.com/webstore/detail/codeforces%2B%2B/ehbcfilpfnlahficlpimomapmbccieoi',
      image_address: 'https://lh3.googleusercontent.com/ERjXBkpIiSvlCyo97ntPKFWZ5G1XkeFVdgXSf-wJyYDdRdzSlI398KNh19EyynS3YsAcWiQT8CHb2TMXry9sUvYNj9E=w128-h128-e365-rj-sc0x00ffffff',
      desc: `Ever wanted Codeforces to have handy shortcuts, auto-updating standings, problem tags that you can hide/show on demand, better site navigation, a dark theme, or all of the above.`,
      version: `2.4.0`,
    },
    {
      name: 'Codeforces Practice Tracker',
      link: 'https://chrome.google.com/webstore/detail/codeforces-practice-track/cnahgdhboflcnojgmeehhhfeoojifonm',
      image_address: 'https://lh3.googleusercontent.com/O6qQwGoX7p3f-sdI9WNay7UTAP58vem0BC33amw-Cyb0pnEJ_OqZ381wDOX9pjq5cYWCsOF1HaD1JWvVoPggsxV9BJA=w128-h128-e365-rj-sc0x00ffffff',
      desc: `Codeforces is one of the most impotent websites for any competitive programmer. With this extension you can track your practice progress in codeforces through time phases.`,
      version: `1.2.0`,
    },
    {
      name: 'LC-Predictor',
      link: 'https://chrome.google.com/webstore/detail/lc-predictor/jfhgaegpgiepniiebglgjhhfnjcibphh',
      image_address: 'https://lh3.googleusercontent.com/KA6fKuJqnl_q6oo5Ajsfm-bKsPVyYMj-8LojDSH8aqF6hMi-ArGWM2B7MA_8lXeVGoLtroSCGDDpJblesthh-p18bQ=w128-h128-e365-rj-sc0x00ffffff',
      desc: `Browser extension for predicting leetcode contest rating. It shows approximate rating delta after contests on leetcode itself. After participating in Leetcode contests, you wait too long for seeing your new rating.`,
      version: `1.0.2`,
    },
    {
      name: 'CP Calendar',
      link: 'https://chrome.google.com/webstore/detail/cp-calendar/gnnibhojjocbjpkhhlphelmiiffodajj',
      image_address: 'https://lh3.googleusercontent.com/uKHLgF_scaZZqCtojv0K14uhux2FfFlXJmcyKvm9eLzrVZ4IAKq1ZFlRJoqfpLNtwAzb81gQNIzkLwpKNzdkhA59EQ=w128-h128-e365-rj-sc0x00ffffff',
      desc: `Chrome extension for checking Competitive programming contests schedule organized by various platforms.`,
      version: `3.0.0`,
    },
    {
      name: 'CF Analytics',
      link: 'https://chrome.google.com/webstore/detail/cf-analytics/hhljbjodjdbjbggddjaidojnlmaobcpo',
      image_address: 'https://lh3.googleusercontent.com/-YGkuRgsIAkYeIYXKREbGZNB9tVDh1cSjMcMMagCqM2HBebfOZOctWKPEqwZvp2VWoIhqHrBUq4SgZ5m1FkzoTBZVw=w128-h128-e365-rj-sc0x00ffffff',
      desc: `CF Analytics Chrome extension improves the Codeforces profile webpage to include statistics of problems solved by the user. The 'Problem Rating' graph is a bar chart showing problems solved for each problem rating.`,
      version: `0.1.2`,
    },
    {
      name: 'Leetcode Enhancer',
      link: 'https://chrome.google.com/webstore/detail/leetcode-enhancer/gcmncppaaebldbkgkcbojghpmpjkdlmp',
      image_address: 'https://lh3.googleusercontent.com/04fLtNL8Lmc8qxg4qr5gWTxUktnTgnhDIBh3ODrOujNrmyNL8vIyCpKGMYq0CqDm2S-sRkUK9r1JXDP5cwKi17GznCE=w128-h128-e365-rj-sc0x00ffffff',
      desc: `A browser extension to improve productivity on Leetcode. It is a light-weight browser extension which boosts your productivity by hiding unnecessary visual elements from the screen, enabling you to focus on what is important`,
      version: `1.48`,
    },
    {
      name: 'CF World Standings',
      link: 'https://chrome.google.com/webstore/detail/cf-world-standings/caginmipmmelcmijagfppgdljepiioak',
      image_address: 'https://lh3.googleusercontent.com/fGas1rQUliaKiPmYUTeGO-b7dgkVB58u4eSuz8ZaBhYjZRL6BJPPl6Mit2PFbvlgFnYjFhBKHmyk-YpBvahKTy8g=w128-h128-e365-rj-sc0x00ffffff',
      desc: `This extension filters the standings for a given contest on Codeforces to show only active competitors of a specific country. All the countries with more than 5 active users are listed and the lists are updated every weekend. `,
      version: `1.0.1`,
    },
  ];
  return (
    <div className='w-full grid grid-cols-2 grid-template-rows-global md:grid-cols-1 sm:grid-cols-1' data-aos="fade-down-left" data-aos-duration="3000">
      {data.map((d, index) => (
        <div key={index}>
          <div className="m-2 border-2 p-4 rounded-md backdrop-blur-sm 
          hover:box-shadow  flex flex-col items-center justify-around lg:h-[25vw] xl:h-[25vw]" title={d.name}>
            <h1 className='font-bold text-2xl mb-2 md:text-xl sm:text-md'>{d.name}</h1>
            <div className='flex items-start justify-around'>
              <p className='text-xl lg:text-base sm:text-sm'data-aos="zoom-in" data-aos-duration="2000">{d.desc}</p>
              <Image
                src={d.image_address}
                alt={d.name}
                height={80}
                width={80}
                data-aos="flip-right" data-aos-duration="3000"
                className='border-4 border-solid border-main rounded-md flex justify-center items-center h-[80px] w-[80px] m-2 
                sm:h-[60px] sm:w-[60px] sm:m-1'
              />
            </div>
            <h2 className='font-bold text-base'><a href={d.link} target='blank' type="submit" className='border-2 border-main p-2 rounded-md hover:text-dark__blue hover:bg-main flex justify-around items-center' data-aos="fade-left" data-aos-duration="2000">Web Store
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