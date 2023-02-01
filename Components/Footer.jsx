import React from 'react'
import styles from '../styles/Footer.module.scss'
import { SiYoutube } from 'react-icons/si'
import { BsInstagram } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import Link from 'next/link';

const Footer = () => {

  return (
    <div className={styles["Footer"]}>
      <div className={styles["container"]}>

        <div className={styles["icons"]}>
          <a href="" className={styles["icon"]}><GrMail /></a>
          <a href="" className={styles["icon"]}><BsInstagram /></a>
          <a href="" className={styles["icon"]}><SiYoutube /></a>
        </div>
        <div className={styles["text"]}>
          <Link href='/about'>About us</Link>&nbsp; &nbsp; 
          <Link href='/about'>Contact us</Link>&nbsp; &nbsp; 
          <a href='/about'>Github</a>
        </div>
        <div className={styles["copyright"]}>
          <p>© {new Date().getFullYear()} <a href="https://www.linkedin.com/in/mandhan63/" target={"blank"} title={"Manmohan's LinkedIn"}>Manmohan</a> and <a href="https://www.linkedin.com/in/ishika-poddar-598aba231/?trk=public_profile_browsemap&originalSubdomain=in" target={"blank"} title={"Isika's LinkedIn"}>Ishika</a>, India</p>
        </div>


      </div>
    </div>
  )
}

export default Footer