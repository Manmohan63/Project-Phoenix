/**
 * This is a React component that displays user information, including their Codeforces and Leetcode
 * IDs, and allows the user to toggle between viewing their Codeforces submissions, rating changes, and
 * Leetcode submissions.
 */
import React, { useState, useEffect } from 'react'
import Submission from '../Submission/index'
import Rating from '../Rating/index'
import Leetcode_data from '../Leetcode Data/leetcode_data'
import Image from 'next/image'
import Link from 'next/link'
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Maincontent = ({user,theme}) => {
  // useEffect(() => {
  //   AOS.init();
  // }, [])
  const [open1, setopen1] = useState(true);
  const [open2, setopen2] = useState(false);
  const [open3, setopen3] = useState(false);
  const [data,setdata]= useState([
{
"lastName": "Waiting for server",
"country": "India",
"lastOnlineTimeSeconds": 0,
"city": "Waiting for server",
"rating": 0,
"friendOfCount": 0,
"titlePhoto": "https://userpic.codeforces.org/no-title.jpg",
"handle": "Waiting for server",
"avatar": "https://userpic.codeforces.org/2370846/avatar/8e3aeab60928f315.jpg",
"firstName": "Waiting for server",
"contribution": 0,
"organization": "NIT Rourkela",
"rank": "Waiting for server",
"maxRating": 0,
"registrationTimeSeconds": 0,
"email": "Waiting for server",
"maxRank": "Waiting for server"
}
]);
    function fetchData(){
        fetch(`https://codeforces.com/api/user.info?handles=${user.codeforcesId}`)
            .then(response => {
                if(response.status >= 400) {
                console.log("Server responds with error!");
            }
            return response.json()
            })
            .then((data) => {
            if(data.status== "FAILED"){
                alert("Fetching failed");
            }
            else{
                setdata(data.result);
            }
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
    },[counter]);
  return (
  <>
    <div className='border-4 rounded-md m-1 flex justify-between items-center p-10 sm:flex-col-reverse'>
      <div className="" data-aos="fade-right" data-aos-duration="3000">
      <p className="text-4xl font-bold sm:text-2xl">{user.name}</p>
      <p className="text-xl sm:text-lg font-bold">{user.collegename}</p>
      <p className="text-base"><a href={`mailto:${user.email}`} className='hover:underline'>{user.email}</a></p>
      <li>{user.city}, India</li>
      <li>Codeforces ID: <a href={`https://codeforces.com/profile/${user.codeforcesId}`} className='hover:underline'>{user.codeforcesId}</a></li>
      <li>Leetcode ID: <a href={`https://leetcode.com/${user.leetcodeId}/`} className='hover:underline'>{user.leetcodeId}</a></li>
      <li>Current CF Rank: {data[0].rating}, {data[0].rank} (max. {data[0].maxRank}, {data[0].maxRating})</li>
      <li>CF Contributions: {data[0].contribution}</li>
      <li>Friend of: {data[0].friendOfCount} users</li>
          <li>Interested In: {user.interestedin} </li>
      </div>
      <div className='flex flex-col items-center'>

      <Image
            src={data[0].titlePhoto}
            alt="Phoenix"
            className={"w-auto h-[15vw] border-4 border-main rounded-md sm:h-[30vw]"}
            width={1500}
            height={1500}
            data-aos="fade-left" data-aos-duration="3000"
            layout="filled"
          />
          <Link href="/updateprofile" className=' m-2 font-bold border-2 border-main p-2 rounded-md hover:text-dark__blue hover:bg-main flex justify-around items-center' data-aos="fade-left" data-aos-duration="3000">Update Profile</Link>
          </div>
    </div>
    <div className=''>
        <div className='w-full flex items-center border-y-2' data-aos="fade-up" data-aos-duration="3000">
            <div className={` m-0 p-0 w-1/2 flex items-center justify-center backdrop-blur-sm sm:text-sm ${open1 ? ("text-dark__blue bg-main") : "m-0"}`} onClick={() => {
              setopen1(true);
              setopen2(false);
              setopen3(false);
            }}>CF Submissions</div>
            <div className={`border-x-[1px] m-0 p-0 w-1/2 flex items-center justify-center backdrop-blur-sm sm:text-sm ${open2 ? ("text-dark__blue bg-main") : "m-0"}`} onClick={() => {
              setopen1(false);
              setopen2(true);
              setopen3(false);
            }}>CF Rating Changes</div>
            <div className={` m-0 p-0 w-1/2 flex items-center justify-center backdrop-blur-sm sm:text-sm ${open3 ? ("text-dark__blue bg-main") : "m-0"}`} onClick={() => {
              setopen1(false);
              setopen2(false);
              setopen3(true);
            }}>LC Submissions</div>
        </div>
        <div className=''>
            {open1 && <Submission name={user.codeforcesId}/>}
            {open2 && <Rating name={user.codeforcesId}/>}
            {open3 && <Leetcode_data name={user.leetcodeId}/>}
        </div>
        <p className="text-2xl sm:text-lg xl:text-center lg:text-center xl:p-14 lg:p-14 sm:p-4 md:p-36">
            Our sincerest gratitude to Mr. Mike Mirzaynov, developer of Codeforces and its API keys. Your dedication and hard work in creating such an awesome platform have not gone unnoticed.
            We would like to personally thank you for the Codeforces API keys, which have been an essential component in our project. Your work has made a significant impact on the programming community, and we greatly appreciate all that you have done. Your dedication to excellence is an inspiration to us all.
        </p>
    </div>
  </>
  )
}

export default Maincontent