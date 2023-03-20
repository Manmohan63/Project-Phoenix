import React from 'react'
import Link from 'next/link';
import { IoIosHome } from 'react-icons/Io'
import { BsFillChatRightFill } from 'react-icons/bs'
import { FaCalendarAlt } from 'react-icons/fa'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { FiMoreHorizontal } from 'react-icons/fi'
import { MdSettings } from 'react-icons/md'


const Sidebar = () => {
  let sideicons__styles = "flex justify-center items-center rounded-md flex-col h-[65px] w-[70px] p-[4px] hover:text-dark__blue hover:bg-main sm:p-0 sm:h-auto sm:w-[50px] sm:p-1";
  let icon__size=35;
  let text__style ="flex justify-center items-center sm:hidden text-xs p-[2px]";
  return (
    <div className={`fixed flex flex-col justify-evenly items-center border-r top-0 left-0 bottom-0 pt-[64px] w-[80px] 
    sm:w-[60px] border-main`}>
      <Link href="/">
        <div className={sideicons__styles} title={"Home"}>
          <div>
            <IoIosHome size={icon__size} />
          </div>
          <div className={text__style}>Home</div>
        </div>
      </Link>
      <Link href="/chatroom">
        <div className={sideicons__styles} title={"Chatroom"}>
          <div>
            <BsFillChatRightFill size={icon__size}/>
          </div>
          <div className={text__style}>Chatroom</div>
        </div>
      </Link>
      <Link href="/calendar">
        <div className={sideicons__styles} title={"Calender"}>
          <div>
            <FaCalendarAlt size={icon__size}/>
          </div>
          <div className={text__style}>Calender</div>
        </div>
      </Link>
      <Link href="/resources">
        <div className={sideicons__styles}>
          <div title={"Resources"}>
            <AiOutlineAppstoreAdd size={icon__size}/>
          </div>
          <div className={text__style}>Resources</div>
        </div>
      </Link>
      <Link href="/more">
        <div className={sideicons__styles} title={"More"}>
          <div>
            <FiMoreHorizontal size={icon__size}/>
          </div>
          <div className={text__style}>More</div>
        </div>
      </Link>
      <Link href="/settings">
        <div className={sideicons__styles} title={"Settings"}>
          <div>
            <MdSettings size={icon__size}/>
          </div>
          <div className={text__style}>settings</div>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar