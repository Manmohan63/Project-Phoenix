import React,{useState,useEffect} from 'react'
import Head from 'next/head'
import { BsBoxArrowUpRight } from "react-icons/bs";
import Image from 'next/image';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';

const Index = () => {
  // useEffect(() => {
  //   AOS.init();
  // }, [])
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  let check__style='mr-1 h-[18px] w-[18px]';
  let label__style='text-xl p-1 rounded-md border-2 bg-main text-dark__blue text-center flex items-center justify-between w-5/6';
  return (
    <>
      <Head>
        <title>Events | CP Unofficial</title>
      </Head>
    <div className='backdrop-blur-sm'>
      <h1 className='text-4xl p-2 mb-2 mt-1 mx-1 text-center bg-main text-dark__blue border-4 border-[black]'>Upcoming Contests</h1>
      <div className="grid grid-cols-6 p-2 justify-items-center md:grid-cols-2 sm:grid-cols-1">
        <label className={label__style}>
        <input
          type="checkbox"
          checked={checked1}
          onClick={()=>setChecked1(!checked1)}
          className={check__style}
        />
        <div className='w-full text-center'>
        Codeforces
        </div>
      </label>
        <label className={label__style}>
        <input
          type="checkbox"
          checked={checked2}
          onClick={()=>setChecked2(!checked2)}
          className={check__style}
        />
         <div className='w-full text-center'>
        Codechef
        </div>
      </label>
        <label className={label__style}>
        <input
          type="checkbox"
          checked={checked3}
          onClick={()=>setChecked3(!checked3)}
          className={check__style}
        />
         <div className='w-full text-center'>
        AtCoder
        </div>
      </label>
        <label className={label__style}>
        <input
          type="checkbox"
          checked={checked4}
          onClick={()=>setChecked4(!checked4)}
          className={check__style}
        />
         <div className='w-full text-center'>
        LeetCode
        </div>
      </label>
        <label className={label__style}>
        <input
          type="checkbox"
          checked={checked5}
          onClick={()=>setChecked5(!checked5)}
          className={check__style}
        />
         <div className='w-full text-center'>
        HackerRank
        </div>
      </label>
        <label className={label__style}>
        <input
          type="checkbox"
          checked={checked6}
          onClick={()=>setChecked6(!checked6)}
          className={check__style}
        />
         <div className='w-full text-center'>
        HackerEarth
        </div>
      </label>
      </div>
      <Searchcontent checked1={checked1} checked2={checked2} checked3={checked3} checked4={checked4} checked5={checked5} checked6={checked6}/>
      <Supported_platforms />
    </div>
    </>
  )
}
const Searchcontent = ({checked1,checked2,checked3,checked4,checked5,checked6}) => {
  const [events,setevents]= useState([]);
  /**
   * This function fetches data from an API and filters it based on certain conditions, then sets the
   * filtered data to be displayed.
   */
  function fetchData(){
    fetch(`https://kontests.net/api/v1/all`)
      .then(response => {
         if(response.status >= 400) {
            console.log("Server responds with error!");
        }
        return response.json()
      })
      .then((data) => {
          setevents(data);
      })
    }
    const [counter, setCounter] = useState(0);
    useEffect(() => {
      if (counter > 0) {
        setTimeout(() => setCounter(counter - 1), 60000);
      }
    },[counter]);
    
    useEffect(() => {
      if (counter <= 0) {
        fetchData();
        setCounter(15);
      }
    },[counter,events]);
    const[data__to__show,setdata__to__show]=useState([]);
    useEffect(() => {
      const words = [`${checked1?"CodeForces":""}`, `${checked2?"CodeChef":""}`,`${checked3?"AtCoder":""}`, `${checked4?"LeetCode":""}`, `${checked5?"HackerRank":""}`, `${checked6?"HackerEarth":""}`];
      const total_data = events.filter(contest=>{
        return (words.includes(contest.site) && (contest.duration/60 <=22000))
      });
      setdata__to__show(total_data);
    },[checked1,checked2,checked3,checked4,checked5,checked6,events]);

    let CodeForces='https://lh3.googleusercontent.com/EjnWrXMpV9a9VSC_VwAGo-J_S5GBUfsih_9WvzczPZcgz0_w63P9TBPfUkWaEWUULfazIoJLxc8UgAKAc0lNiHbCEg=w128-h128-e365-rj-sc0x00ffffff';
    let CodeChef='data:image/jpeg;base64,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';
    let AtCoder='https://www.andreafiori.net/img/software-development/competitive-programming/atcoder.gif';
    let LeetCode=`data:image/png;base64,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`;
    let HackerRank='https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/800px-HackerRank_Icon-1000px.png';
    let HackerEarth='https://i1.sndcdn.com/avatars-000187997749-n2xz2w-t500x500.jpg';
    let options = {
        weekday: "short",
        year: "numeric",
        month: "2-digit",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };
  /* The above code is a React component that displays a list of data items with information about
  scheduled coding contests. It shows the number of results found and a countdown timer for
  automatic data refresh. Each item in the list displays the name of the contest, the scheduled
  start and end times, the duration, and a link to the contest page. It also displays the logo of
  the coding platform where the contest is being held. The component is responsive and adjusts its
  layout based on the screen size. */
  return (
    <div>
      <div className='w-full flex items-center justify-between'>
      <h1 className='text-2xl m-2'>{data__to__show.length} Results Found</h1>
      <span className='mr-2 text-sm italic'>This data will automatically refresh in {counter} minutes</span>
      </div>
      <div className='w-full grid grid-cols-2 grid-template-rows-global md:grid-cols-1 sm:grid-cols-1'data-aos="fade-up-left" data-aos-duration="3000">
        {data__to__show.map((d, index) => (
          <div key={index}>
              <div className="m-2 border-2 p-4 rounded-md backdrop-blur-sm 
hover:box-shadow flex flex-col items-center justify-around lg:h-[20vw] xl:h-[20vw]" title={d.name}>
                  <div className='flex justify-between items-center w-full'>
                      <div className="flex flex-col justify-around items-start w-auto text-left py-2">
                          <h1 className='font-bold text-2xl xl:text-3xl mb-2 md:text-xl sm:text-base'>{d.name}</h1>
                          <h1><span className='underline'> Scheduled at</span>:- {new Date(d.start_time).toLocaleString("en-IN",options, {timeZone: 'Asia/Kolkata'})}</h1>
                          <h1><span className='underline'> Duration</span>:- {d.duration/60} Minutes</h1>
                          <h1><span className='underline'> Ends at </span>:- {new Date(d.end_time).toLocaleString("en-IN",options, {timeZone: 'Asia/Kolkata'})}</h1>
                      </div>
                      <Image
                          src={
                              d.site === 'CodeForces'?CodeForces:
                              d.site === 'CodeChef'?CodeChef:
                              d.site === 'AtCoder'?AtCoder:
                              d.site === 'LeetCode'?LeetCode:
                              d.site === 'HackerRank'?HackerRank:
                              d.site === 'HackerEarth'?HackerEarth:"hello"
                          }
                          alt={d.site}
                          height={2500}
                          width={2500}
                          data-aos="flip-left" data-aos-duration="3000"
                          className='border-4 border-solid border-main rounded-md flex justify-center items-center w-[12vw] h-[12vw] sm:h-[60px] sm:w-[60px] sm:m-1 md:h-[200px] md:w-[200px]'
                      />
                  </div>
                  <h2 className='font-bold text-base'><a href={d.url} target='blank' type="submit" className='border-2 border-main p-2 rounded-md hover:text-dark__blue hover:bg-main flex justify-around items-center'>Contest link
                      <BsBoxArrowUpRight className='mx-2' />&nbsp;</a></h2>
              </div>
          </div>
        ))}
      </div>
      </div>
  )
}

const Supported_platforms = () => {
    const data = [
        {
            name: 'Codefoces',
            link: 'https://codeforces.com/',
            image_address: 'https://lh3.googleusercontent.com/EjnWrXMpV9a9VSC_VwAGo-J_S5GBUfsih_9WvzczPZcgz0_w63P9TBPfUkWaEWUULfazIoJLxc8UgAKAc0lNiHbCEg=w128-h128-e365-rj-sc0x00ffffff',
        },
        {
            name: 'Codechef',
            link: 'https://www.codechef.com/',
            image_address: 'data:image/jpeg;base64,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',
        },
        {
            name: 'AtCoder',
            link: 'https://atcoder.jp/',
            image_address: 'https://www.andreafiori.net/img/software-development/competitive-programming/atcoder.gif',
        },
        {
            name: 'LeetCode',
            link: 'https://www.leetcode.com/',
            image_address: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABGlBMVEUAAAD/////oRazs7O2tra5ubmFhYVHR0f/phf/oxb/pxf/nAD///1jPwn//Pf/ngC3dBDz8/PShRJxSAr1mxWQkJAjIyPX19ccHBw6Ojrh4eF4eHicnJzp6enx8fE2NjZOTk5iYmJILgbHfhHijxRdOwiDUwyIf3N6Tguoag9NMQfslRTcixODd2Y0IQVqQwm1rJ8RERFSSDorHAQZDgCcYw4kFwPNzc2Pj49tbW364cSsaACMWAf/69L/8eD/pyn/rD3/tFT/u2T/w3nZ0cb/y4z/0p3Kv6//3rihmo9xZlXakCeRZy5GPCxbSC4yKhzr4tackoNpaWnx6d+lmISLfmtcVk46NSxPQzE/NCBmSh8oIRSshVU9JwXul1z9AAAHEUlEQVR4nO2da1vaSBSASQBNomJAxLsgoBWhWC+wrUvVbru9uNvVrq176fr//8aGm8XMOZMLY2aS57wf+snwnPeZ65nkTFMpgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIglCe0mylLDuGp2RjJa9p+fVl2XE8Favr2ojtWdmxPAlree0HO7KjeQJKk4Katio7HuEcbT0S1LKyAxLOuuZCdkCiWXELahuyQxLLT4ygtik7JqFkWcFkGWYAQe2l7KgEkoYEtTXZYYljExTckh2WOGZAwQRNpRuwYHIW/Few4IrsuISxAwuuy45LGGuw4LbsuISBCSYmryhvg4L5xKyEq1ugoFaRHZgwEi/IJIRDknN8AeRLfZKzlUEEZ2THJQwoIXRIzkEpnC8lKOmF8yUtLTsuYbyEBc9+7lVlhyYGJF96PWcaZrG2Jzu86UHypfM5vY9jWTuUHeJ07CCCpj7GtOr7sqOcggoieLGo/8A0mrFtxzIsmHskOHAsnMiONRTlPCx46RLsO+px7KolOJ2Yf8MKOhi27HiDg6QTv8xBgo5ivSs74oAgCSEm2O+pu7JjDsQNLPgWFew79mRHHYB3sOCvPEFdt+IzGD/Agu/5gs5gbJ3KDt0fYQWdjlo8kB28H17Agh+9BfuOMdiNf4IFz4broOnA76kN2QJePIMFXy86uzPLrBdqtVbRMgxc0yjIVuCDCppFe+lhHql2CrqBD0aVk+PnsOA5mwiedIqYo8rb1Kt5WPA3aIo8baDNqOxgPM6Bgrnfkb8/KGLDUdHB+BkR/AN/pIA1o9G8jy5wv1zDCeH8Me8htKea+lJUgfvl+y08y1zxH9vHB2MnmsB9gwg+93qOMxhrUcTtGyRf+ub95GkLHYwq7cSRfOmLr4dtS/0pFUknPvl8vId1VEuVjTgi+ML3D+xig7H5hFEHAMmX/AumUt06PBhNJRJGJF96F+xXbFDRUKGbfhEimEp1IEVDgeMpRPAm+C/t6uxgVMAQyZduw6xkbXYwmtJPUa9gwVzIpbrmViyKDTc4x3BCmLsO+4Odx4u/JXtv+heSL30O/5OHk4PRrIuLNRRdeLed4+ZLXlSbDz3VaLZFhRoSZDPqkS95cWpbg2Y0rZrs91HISu+ZL3lStZuG0bSlb2eOYcFnsuMSB5wR+suXYgF89us3X4oD4EIRJJ1QHXCa+SA7KpFATRg4nVAZaD+aKEFosQ+RLynMCdtJQ+VL6gJ8N3onOyaxsIdrSVon+jDfdOW8nij9uTEzHRs7EVaBXTPD0KMJy8vZbGZastmZyBzZb2P5OW8lnUmLIJOOqtaNOX665f75rBi/gWIpGsOvbkNusfKRoBYcKEZUicIc43/l/fWrrDDBdDpbicSQKWXivibcFNeETiNGc8MEY8g7uTgS2YTpdDTdNJBhSaxhJhLDQONwVaxhNDVhzFzKXfCF+kU0mX5zG3JTw2WRM002mtraO7fhPC91mhXaTaNZ8tn3FdxjYIGNGFETAp8HcbvpkbAVMRtZ9TB7iPE39+83syIcM9no6r/ZV9sex1CVTacBpiOdXo7wFg3gzajXC5nVtdnpKB9FojaGfXOYT9ZJFHTknazTxFSbNUzWmT78/jdZisy2JnmK4Ev8RL26ABsxWYrwR6VJUmSPhROniFRxJWldRL4YSlArniI1FtMptvd6vX1VtoDIp4nTdNSDlmk46DVF7spAyvHCK3as0aeJytQ9IZ8Iazfhutnk5+zGguBYQ4JMqOFa0fW9vuhYQ8KcLI7gv3ADcQkqU0mKddTAH2cw5U/SP/Iegyp+D/QzQEmJ9C9Mx6CKQWZ8QNBQ5wYpbNHY9q8IVegpZIgr+i1LgKueVLp6AFX0V5gACypSmjfiDlP8x8fDSN2a7HISF8h1A1rOWxGukjWVWSzGoIr8VxpYC+qmSqNwCKrIr6FBBHWFJtIHQrUiIqjKvtsFUunFuzkCqVSXX3eIgCnm/kUeYAoOR4JqtmAfTPEMnPnvsQpudQVxxTd1dmpsILdiKS2I3nHyftEqLEy+47xvYFdFGaqOwTGw4us53bSatb2Favvkfnep0TLQa1vUbsE+15Di+eC+NtPxKhaLJuc6M8W76BCoFc/Bm1kBQdW76BDgqPjM16WCcRGEFN/6a8M4dNEhXVeFae7CVwvGR9BpxceKHpezxqyLjphU9HO1Z9xuEk5NviT2cTlrXG5nfcx/Z4Mh+PHSh6CSl+x5s7d4cXkxN+djGlXoVq9gYMmDu4fq8i/aCU0Hv4r1Aaug3pFMALq2xb052LSKirwLDU/b1tGNtmnE+r/weKDbqZuspOk0n63iiVo4qp3C4A7o/m3X/X8My6jbh6p8ciGK+/2GXSjUm61Cze7tyr5ehyAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIggjD/3VNoHXyPE2hAAAAAElFTkSuQmCC`,
        },
        {
            name: 'HackerRank',
            link: 'https://www.hackerrank.com/',
            image_address: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/800px-HackerRank_Icon-1000px.png',
        },
        {
            name: 'HackerEarth',
            link: 'https://www.hackerearth.com/',
            image_address: 'https://i1.sndcdn.com/avatars-000187997749-n2xz2w-t500x500.jpg',
        },
    ];
    return (
        <>
            <h1 className='text-3xl md:text-2xl sm:text-2xl font-bold m-2'>Supported Platforms :</h1>
            <div className='w-full grid grid-cols-3 grid-template-rows-global md:grid-cols-2 sm:grid-cols-1' >
                {data.map((d, index) => (
                    <div key={index}>
                        <div className="m-2 border-2 p-4 rounded-md backdrop-blur-sm 
          hover:box-shadow flex flex-col items-center justify-around lg:h-[20vw] xl:h-[20vw]" data-aos="fade-up" data-aos-duration="3000" title={d.name}>
                            <div className='flex justify-center w-full'>
                                <Image
                                    src={d.image_address}
                                    alt={d.name}
                                    height={2500}
                                    width={2500}
                                    data-aos="flip-left" data-aos-duration="3000"
                                    className='border-4 border-solid border-main rounded-md flex justify-center items-center w-[12vw] h-[12vw] sm:h-[60px] sm:w-[60px] sm:m-1 md:h-[200px] md:w-[200px]'
                                />
                            </div>
                            <h2 className='font-bold text-base'><a href={d.link} target='blank' type="submit" data-aos="fade-left" data-aos-duration="3000" className='border-2 border-main p-2 rounded-md hover:text-dark__blue hover:bg-main flex justify-around items-center'>{d.name}
                                <BsBoxArrowUpRight className='mx-2' />&nbsp;</a></h2>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
                }
export default Index