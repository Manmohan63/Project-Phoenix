import React from 'react'
import styles from '../styles/Navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'
import name from '../public/pic5_zoom.png'
import { SignIn } from '@/pages/chatroom'
import{SignOut} from '@/pages/chatroom'


const Navbar = () => {
  
  return (
    <div className={styles["Navbar"]}>
      <div className={styles["container"]}>
        <div title={"CP UnOfficial"}>
          <Link href='/' className='flex'>
            <Image
              src={logo}
              alt="Phoenix"
              className={"h-auto w-20 justify-around item-center"}
            />
            <Image
              src={name}
              alt="logo"
              className={"p-1 h-auto w-48"}
            />
          </Link>
        </div>
        <div className={styles["options"]}>
          <Link href='/' className={styles["first"]}>Sign up&nbsp;</Link>
          <Link href='/' className={styles["second"]}>&nbsp;Sign in</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar