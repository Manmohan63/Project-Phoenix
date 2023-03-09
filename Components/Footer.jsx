import React from 'react'
import { SiYoutube } from 'react-icons/si'
import { BsInstagram } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import Link from 'next/link';

const Footer = () => {

  return (
    <div className={"flex justify-center items-center relative bottom-0 right-0 border-t-2 border-x-2 border-main bg-cover bg-center backdrop-blur-sm bg-fixed"}>
      <div className={"flex flex-col justify-center items-center"}>
        <div className={"flex justify-around items-center py-[0.4rem] px-[10rem] text-main w-[45%] text-2xl"}>
          <a href="mailto:cpunofficial101@gmail.com" className={"text-4xl mx-3 hover:scale-110  transition-all duration-300 "} target={"blank"} title={"cpunofficial101@gmail.com"}><GrMail /></a>
          <a href="https://www.instagram.com/cp_unofficial.101/" className={"text-4xl mx-3 hover:scale-110  transition-all duration-300 "} target={"blank"} title={"Instagram"}><BsInstagram /></a>
          <a href="https://www.youtube.com/@cpunofficial1196/videos" className={"text-4xl mx-3 hover:scale-110  transition-all duration-300 "} target={"blank"} title={"Youtube"}><SiYoutube /></a>
        </div>
        <div>
          <Link href='/about' title={"About Us"}>About Us</Link>&nbsp; &nbsp;
          <Link href='/contact' title={"Contact Us"}>Contact us</Link>&nbsp; &nbsp;
          <a href='https://github.com/Manmohan63/project-phoenix' title={"Github"} target={"blank"}>Github</a>
        </div>
        <div>
          <p>© {new Date().getFullYear()} <a href="https://www.linkedin.com/in/mandhan63/" target={"blank"} title={"Manmohan's LinkedIn"}>Manmohan</a> and <a href="https://www.linkedin.com/in/ishika-poddar30/" target={"blank"} title={"Ishika's LinkedIn"}>Ishika</a>, India</p>
        </div>


      </div>
    </div>
  )
}

export default Footer