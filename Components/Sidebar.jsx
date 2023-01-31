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
        <div>
          <Link href="/">
            <Image
              src={home}
              alt="home"
              className={styles["images"]}
            />
          </Link>
        </div>
        <div className={styles['textcontainer']}>Home</div>
      </div>
      <div className={styles["hello"]}>
        <div className={styles["imagecontainer"]}>
          <Link href="/chatroom">
            <Image
              src={chatroom}
              alt="chatroom"
              className={styles["images"]}
            />
          </Link>
        </div>
        <div className={styles['textcontainer']}>Chatroom</div>
      </div>
      <div className={styles["hello"]}>
        <div className={styles["imagecontainer"]}>
          <Link href="/calender">
            <Image
              src={calender}
              alt="calender"
              className={styles["images"]}
            />
          </Link>
        </div>
        <div className={styles['textcontainer']}>Calender</div>
      </div>
      <div className={styles["hello"]}>
        <div className={styles["imagecontainer"]}>
          <Link href="/resources">
            <Image
              src={resources}
              alt="Resources"
              className={styles["images"]}
            />
          </Link>
        </div>
        <div className={styles['textcontainer']}>Resources</div>
      </div>
      <div className={styles["hello"]}>
        <div className={styles["imagecontainer"]}>
          <Link href="/more">
            <Image
              src={more}
              alt="more"
              className={styles["images"]}
            />
          </Link>
        </div>
        <div className={styles['textcontainer']}>More</div>
      </div>
      <div className={styles["hello"]}>
        <div className={styles["imagecontainer"]}>
          <Link href="/settings">
            <Image
              src={settings}
              alt="settings"
              className={styles["images"]}
            />
          </Link>
        </div>
        <div className={styles['textcontainer']}>settings</div>
      </div>
    </div>
  )
}

export default Sidebar