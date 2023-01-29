import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/pnf.module.scss'
import logo from '../public/logo_center.png'
import four from '../public/4.png'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Error = () => {
    const [counter, setCounter] = useState(5);
    useEffect(() => {
      if (counter > 0) {
        setTimeout(() => setCounter(counter - 1), 1000);
      } else {
        setCounter(0);
      }
    },[counter]);
    
    const router = useRouter();
    useEffect(() => {
      if (counter === 0) {
        router.push('/');
      }
    });

    return (
      <>
      <Head>
        <title>Error | 404</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.container_inner}>
          <Image
            src={four}
            alt="Phoenix"
            className={styles["img_four"]}
          />
          <Image
            src={logo}
            alt="Phoenix"
              className={styles["img"]}
          />
          <Image
            src={four}
            alt="Phoenix"
              className={styles["img_four"]}
          />
        </div>
        <div className={styles.text}>
          You didn&apos;t break the Internet.but we can&apos;t find the page you&apos;re looking for.
          We are sorry for the inconvenience. You&apos;ll be redirected to the <Link href="/">home</Link> page in {counter} seconds.
        </div>
      </div>
      </>
    )
  }

  export default Error