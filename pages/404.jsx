import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/pnf.module.scss'
import logo from '../public/logo_center.png'
import four from '../public/4.png'


const Error = () => {
    const [counter, setCounter] = useState(5);

    useEffect(() => {
      const interval = setInterval(() => {
        setCounter((counter) => counter - 1);
      }, 1000);
      return () => clearInterval(interval);
    }, []);
    
    return (
      <div className={styles.container}>
        <div className={styles.container_inner}>
          <Image
            src={four}
            alt="Phoenix"
            className={styles.img_four}
          />
          <Image
            src={logo}
            alt="Phoenix"
            className={styles.img}
          />
          <Image
            src={four}
            alt="Phoenix"
            className={styles.img_four}
          />
        </div>
        <div className={styles.text}>
          You didn&apos;t break the Internet.but we can&apos;t find the page you&apos;re looking for.
          We are sorry for the inconvenience. You&apos;ll be redirected to the home page in {counter} seconds.
        </div>
      </div>
    )
  }

  export default Error