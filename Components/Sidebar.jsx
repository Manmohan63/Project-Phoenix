
import React, {useState} from 'react'
import Link from 'next/link';
import { IoIosHome } from 'react-icons/io'
import { BsFillChatRightFill } from 'react-icons/bs'
import { FaCalendarAlt } from 'react-icons/fa'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { FiMoreHorizontal } from 'react-icons/fi'
import { MdSettings } from 'react-icons/md'
import { auth } from '@/firebaseclient';

const user=auth.currentUser;

const Sidebar = () => {
  let sideicons__styles = "flex justify-center items-center rounded-md flex-col h-[65px] w-[70px] p-[4px] hover:text-dark__blue hover:bg-main sm:p-0 sm:h-auto sm:w-[50px] sm:p-1 ";
  let icon__size=35;
  let text__style ="flex justify-center items-center text-center sm:hidden text-xs p-[2px]";
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);

  return (
    <div className={`fixed flex flex-col justify-evenly items-center border-r top-0 left-0 bottom-0 pt-[64px] w-[80px] 
    sm:w-[60px] border-main`}>
      <Link href="/">
        <div className={sideicons__styles + `${active1?"text-dark__blue bg-main":""}`} title={"Home"} onClick={()=>{
          setActive1(true);
          setActive2(false);
          setActive3(false);
          setActive4(false);
          setActive5(false);
          setActive6(false);
        }}>
          <div>
            <IoIosHome size={icon__size} />
          </div>
          <div className={text__style}>Home</div>
        </div>
      </Link>
       {user? <Link href="/chatroom">
        <div className={sideicons__styles + `${active2?"text-dark__blue bg-main":""}`} title={"Chatroom"} onClick={()=>{
          setActive1(false);
          setActive2(true);
          setActive3(false);
          setActive4(false);
          setActive5(false);
          setActive6(false);
        }}>
          <div>
            <BsFillChatRightFill size={icon__size}/>
          </div>
          <div className={text__style}>Chatroom</div>
        </div>
      </Link> : <Link href="#"><button className={sideicons__styles + `${active2?"text-dark__blue bg-main":""}`} title={"Chatroom"} onClick={()=>{
          alert("You need to Sign in or Sign up");
        }}>
          <div>
            <BsFillChatRightFill size={icon__size}/>
          </div>
          <div className={text__style}>Chatroom</div>
        </button>
        </Link>}
      
      <Link href="/events">
        <div className={sideicons__styles + `${active3?"text-dark__blue bg-main":""}`} title={"events"} onClick={()=>{
          setActive1(false);
          setActive2(false);
          setActive3(true);
          setActive4(false);
          setActive5(false);
          setActive6(false);
        }}>
          <div>
            <FaCalendarAlt size={icon__size}/>
          </div>
          <div className={text__style}>Events</div>
        </div>
      </Link>
      <Link href="/resources">
        <div className={sideicons__styles + `${active4?"text-dark__blue bg-main":""}`} onClick={()=>{
          setActive1(false);
          setActive2(false);
          setActive3(false);
          setActive4(true);
          setActive5(false);
          setActive6(false);
        }}>
          <div title={"Resources"}>
            <AiOutlineAppstoreAdd size={icon__size}/>
          </div>
          <div className={text__style}>Resources</div>
        </div>
      </Link>
      <Link href="/more">
        <div className={sideicons__styles + `${active5?"text-dark__blue bg-main":""}`} title={"More"} onClick={()=>{
          setActive1(false);
          setActive2(false);
          setActive3(false);
          setActive4(false);
          setActive5(true);
          setActive6(false);
        }}>
          <div>
            <FiMoreHorizontal size={icon__size}/>
          </div>
          <div className={text__style}>More</div>
        </div>
      </Link>
      {/* <Link href="/settings">
        <div className={sideicons__styles + `${active6?"text-dark__blue bg-main":""}`} title={"Settings"} onClick={()=>{
          setActive1(false);
          setActive2(false);
          setActive3(false);
          setActive4(false);
          setActive5(false);
          setActive6(true);
        }}>
          <div>
            <MdSettings size={icon__size}/>
          </div>
          <div className={text__style}>settings</div>
        </div>
      </Link> */}
    </div>
  )
}

export default Sidebar