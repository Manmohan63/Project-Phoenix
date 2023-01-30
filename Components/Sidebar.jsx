import React from 'react'
import Link from 'next/link';
import styles from '../styles/Sidebar.module.scss'
import Image from 'next/image';
import home from '../public/Home.png'

const Sidebar = () => {
  return (
    <div className={styles["sidebar"]}>
      <div className={styles["hello"]}>
        <Link href="/">
          <Image
            src={home}
            alt="home"
            className={styles["images"]}
          />
          <span>Home</span>
        </Link>
      </div>
      <Link href="/chatroom">Chatroom</Link>
      <Link href="/calender">Calender</Link>
      <Link href="/resources">Resources</Link>
      <Link href="/more">More</Link>
      <Link href="/settings">Settings</Link>
    </div>
  )
}

export default Sidebar