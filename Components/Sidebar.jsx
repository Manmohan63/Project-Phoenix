import React from 'react'
import Link from 'next/link';
import styles from '../styles/Sidebar.module.scss'
import Image from 'next/image';
import home from '../public/Sidebar Icons/Home.png'
import chatroom from '../public/Sidebar Icons/Chatroom.png'
import calender from '../public/Sidebar Icons/calender.png'
import resources from '../public/Sidebar Icons/resources.png'
import more from '../public/Sidebar Icons/more.png'
import settings from '../public/Sidebar Icons/settings.png'

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
          <div>Home</div>
        </Link>
      </div>
      <div className={styles["hello"]}>
        <Link href="/chatroom">
          <Image
            src={chatroom}
            alt="chatroom"
            className={styles["images"]}
          />
          <div>Chatroom</div>
        </Link>
      </div>
      <div className={styles["hello"]}>
        <Link href="/calender">
          <Image
            src={calender}
            alt="calender"
            className={styles["images"]}
          />
          <div>Calender</div>
        </Link>
      </div>
      <div className={styles["hello"]}>
        <Link href="/Resources">
          <Image
            src={resources}
            alt="Resources"
            className={styles["images"]}
          />
          <div>Resources</div>
        </Link>
      </div>
      <div className={styles["hello"]}>
        <Link href="/more">
          <Image
            src={more}
            alt="more"
            className={styles["images"]}
          />
          <div>More</div>
        </Link>
      </div>
      <div className={styles["hello"]}>
        <Link href="/settings">
          <Image
            src={settings}
            alt="settings"
            className={styles["images"]}
          />
          <div>settings</div>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar