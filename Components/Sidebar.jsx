import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className={"fixed flex flex-col justify-evenly items-center bg-gradient-to-t from-purple-900 to-purple-800 text-yellow-400 border-r border-yellow-400 top-0 left-0 bottom-0 pt-[4vw] w-[8vw] text-main"}>
      <Link href="/">
        <div className={"border-2 border-solid border-main flex justify-center items-center h-[5vw] w-[5vw] rounded-md flex-col p-[5px] transition-all duration-500 ease-in-out hover:box-shadow "} title={"Home"}>
          <div>
            <Image
              src={"https://res.cloudinary.com/dk8ign4oc/image/upload/v1678388162/Home_h0wfwc.png"}
              alt="home"
              className={"w-[3.5vw] h-auto"}
               height={128}
              width={128}
            />
          </div>
          <div className={"flex justify-center items-center"}>Home</div>
        </div>
      </Link>
      <Link href="/chatroom">
        <div className={"border-2 border-solid border-main flex justify-center items-center h-[5vw] w-[5vw] rounded-md flex-col p-[5px] transition-all duration-500 ease-in-out hover:box-shadow "} title={"Chatroom"}>
          <div>
            <Image
              src={"https://res.cloudinary.com/dk8ign4oc/image/upload/v1678388161/Chatroom_cfiypu.png"}
              alt="chatroom"
              className={"w-[3.5vw] h-auto"}
               height={128}
              width={128}
            />
          </div>
          <div className={"flex justify-center items-center"}>Chatroom</div>
        </div>
      </Link>
      <Link href="/calender">
        <div className={"border-2 border-solid border-main flex justify-center items-center h-[5vw] w-[5vw] rounded-md flex-col p-[5px] transition-all duration-500 ease-in-out hover:box-shadow "} title={"Calender"}>
          <div>
            <Image
              src={"https://res.cloudinary.com/dk8ign4oc/image/upload/v1678388162/calender_muwd3r.png"}
              alt="calender"
              className={"w-[3.5vw] h-auto"}
               height={128}
              width={128}
            />
          </div>
          <div className={"flex justify-center items-center"}>Calender</div>
        </div>
      </Link>
      <Link href="/resources">
        <div className={"border-2 border-solid border-main flex justify-center items-center h-[5vw] w-[5vw] rounded-md flex-col p-[5px] transition-all duration-500 ease-in-out hover:box-shadow "}>
          <div title={"Resources"}>
            <Image
              src={"https://res.cloudinary.com/dk8ign4oc/image/upload/v1678388162/resources_noksuu.png"}
              alt="Resources"
              className={"w-[3.5vw] h-auto"}
               height={128}
              width={128}
            />
          </div>
          <div className={"flex justify-center items-center"}>Resources</div>
        </div>
      </Link>
      <Link href="/more">
        <div className={"border-2 border-solid border-main flex justify-center items-center h-[5vw] w-[5vw] rounded-md flex-col p-[5px] transition-all duration-500 ease-in-out hover:box-shadow "} title={"More"}>
          <div>
            <Image
              src={"https://res.cloudinary.com/dk8ign4oc/image/upload/v1678388162/more_pmz8zy.png"}
              alt="more"
              className={"w-[3.5vw] h-auto "}
               height={128}
              width={128}
            />
          </div>
          <div className={"flex justify-center items-center"}>More</div>
        </div>
      </Link>
      <Link href="/settings">
        <div className={"border-2 border-solid border-main flex justify-center items-center h-[5vw] w-[5vw] rounded-md flex-col p-[5px] transition-all duration-500 ease-in-out hover:box-shadow "} title={"Settings"}>
          <div>
            <Image
              src={"https://res.cloudinary.com/dk8ign4oc/image/upload/v1678388162/settings_gr7zcq.png"}
              alt="settings"
              className={"w-[3.5vw] h-auto"}
               height={128}
              width={128}
            />
          </div>
          <div className={"flex justify-center items-center"}>settings</div>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar