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
          <a href="mailto:cpunofficial101@gmail.com" className={styles["icon"]} target={"blank"} title={"cpunofficial101@gmail.com"}><GrMail /></a>
          <a href="https://www.instagram.com/cp_unofficial.101/" className={styles["icon"]} target={"blank"} title={"Instagram"}><BsInstagram /></a>
          <a href="https://www.youtube.com/@cpunofficial1196/videos" className={styles["icon"]} target={"blank"} title={"Youtube"}><SiYoutube /></a>
        </div>
        <div className={styles["text"]}>
          <Link href='/about' title={"About Us"}>About Us</Link>&nbsp; &nbsp;
          <Link href='/contact' title={"Contact Us"}>Contact us</Link>&nbsp; &nbsp;
          <a href='https://github.com/Manmohan63/project-phoenix' title={"Github"} target={"blank"}>Github</a>
        </div>
        <div className={styles["copyright"]}>
          <p>© {new Date().getFullYear()} <a href="https://www.linkedin.com/in/mandhan63/" target={"blank"} title={"Manmohan's LinkedIn"}>Manmohan</a> and <a href="https://www.linkedin.com/in/ishika-poddar30/" target={"blank"} title={"Ishika's LinkedIn"}>Ishika</a>, India</p>
        </div>


      </div>
    </div>
  )
}

export default Footer