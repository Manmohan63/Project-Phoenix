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
        <div className={styles["img_container"]} title={"CP UnOfficial"}>
          <Link href='/'>
            <Image
              src={logo}
              alt="Phoenix"
              className={styles["bird"]}
            />
            <Image
              src={name}
              alt="logo"
              className={styles["name"]}
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