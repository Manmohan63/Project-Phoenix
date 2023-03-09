import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SignIn } from '@/pages/chatroom'
import { SignOut } from '@/pages/chatroom'
import { auth } from '@/pages/chatroom'


const Navbar = () => {
  let style = "p-8 rounded-md bg-blue-600 hover:border-gold hover:bg-[gold] hover:text-[blue-1] cursor-pointer border-1 border-solid";
  const user = auth.currentUser;
  return (
    <div className={"fixed top-0 right-0 w-full overflow-auto h-[4vw] z-10 overflow-y-hidden text-[#dbad69] text-1.1 border-b-2 border-[#dbad69] flex justify-center items-center bg-gradient-to-r from-[#231869] to-[#0b005d]"}>
      <div className={"flex justify-between items-center w-full px-4"}>
        <div title={"CP UnOfficial"}>
          <Link href='/' className='flex items-center space-around'>
            <Image
              src={"https://res.cloudinary.com/dk8ign4oc/image/upload/v1678292149/logo_sgor2b.png"}
              alt="Phoenix"

              height={70}
              width={70}
            />
            <Image
              src={"https://res.cloudinary.com/dk8ign4oc/image/upload/v1678292149/pic5_zoom_on6noq.png"}
              alt="logo"

              height={50}
              width={150}
            />
          </Link>
        </div>
        <div className={"flex justify-between items-center p-8"}>
          {/*<Link href='/' className={"p-8 rounded-md bg-blue-600 hover:border-gold hover:bg-[gold] hover:text-[blue-1] cursor-pointer border-1 border-solid"}>Sign up&nbsp;</Link>
          <Link href='/' className={"p-8 rounded-md bg-blue-600 hover:border-gold hover:bg-[gold] hover:text-[blue-1] cursor-pointer border-1 border-solid"}>&nbsp;Sign in</Link>*/}
          <Link href='/' className={"p-8 rounded-md bg-blue-600 hover:border-gold hover:bg-[gold] hover:text-[blue-1] cursor-pointer border-1 border-solid"}>Sign up&nbsp;</Link>
          {/* <Link href='/' className={styles["second"]}>&nbsp;Sign in</Link> */}

          {/* <Link href='/' className={styles["second"]}>&nbsp;Sign in</Link> */}
          <section>{user ? <SignOut className={style} /> : <SignIn className={style} />}</section>
          {/* <SignIn/>
          <SignOut/> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar