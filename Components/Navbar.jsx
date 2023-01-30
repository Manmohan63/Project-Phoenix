import React from 'react'
import styles from '../styles/Navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'
import name from '../public/pic5_zoom.png'

const Navbar = () => {
  return (
    <div className={styles["Navbar"]}>
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
      <div className={styles["options"]}>
        <Link href='/'>Sign up </Link> |
        <Link href='/'> Sign in</Link>
      </div>
    </div>
  )
}

export default Navbar