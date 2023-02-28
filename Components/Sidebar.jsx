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
      <Link href="/">
        <div className={styles["hello"]} title={"Home"}>
          <div>
            <Image
              src={home}
              alt="home"
              className={styles["images"]}
            />
          </div>
          <div className={styles['textcontainer']}>Home</div>
        </div>
      </Link>
      <Link href="/chatroom">
        <div className={styles["hello"]} title={"Chatroom"}>
          <div className={styles["imagecontainer"]}>
            <Image
              src={chatroom}
              alt="chatroom"
              className={styles["images"]}
            />
          </div>
          <div className={styles['textcontainer']}>Chatroom</div>
        </div>
      </Link>
      <Link href="/calender">
        <div className={styles["hello"]} title={"Calender"}>
          <div className={styles["imagecontainer"]}>
            <Image
              src={calender}
              alt="calender"
              className={styles["images"]}
            />
          </div>
          <div className={styles['textcontainer']}>Calender</div>
        </div>
      </Link>
      <Link href="/resources">
        <div className={styles["hello"]}>
          <div className={styles["imagecontainer"]} title={"Resources"}>
            <Image
              src={resources}
              alt="Resources"
              className={styles["images"]}
            />
          </div>
          <div className={styles['textcontainer']}>Resources</div>
        </div>
      </Link>
      <Link href="/more">
        <div className={styles["hello"]} title={"More"}>
          <div className={styles["imagecontainer"]}>
            <Image
              src={more}
              alt="more"
              className={styles["images"]}
            />
          </div>
          <div className={styles['textcontainer']}>More</div>
        </div>
      </Link>
      <Link href="/settings">
        <div className={styles["hello"]} title={"Settings"}>
          <div className={styles["imagecontainer"]}>
            <Image
              src={settings}
              alt="settings"
              className={styles["images"]}
            />
          </div>
          <div className={styles['textcontainer']}>settings</div>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar