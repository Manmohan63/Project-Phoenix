/* This code is defining a React component called `Error` that displays a custom 404 error page. It
imports various modules from the Next.js framework, including `Head` for setting the page title,
`Image` for displaying images, `Link` for creating links, and `useRouter` for accessing the router
object. */
import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Error = ({theme}) => {
    const [counter, setCounter] = useState(10);
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
        <div className={"h-[90vh] flex flex-col justify-center items-center backdrop-blur-sm"}>
          <div className={"flex justify-center items-center"}>
          <Image
              src={"https://res.cloudinary.com/dk8ign4oc/image/upload/v1678289997/4_foug3j.png"}
            alt="Phoenix"
            className={"w-[16vw] h-auto"}

              width={2250}
              height={1390}
              layout="responsive"
          />
          <Image
              src={"https://res.cloudinary.com/dk8ign4oc/image/upload/v1678290002/logo_center_jkjeyw.png"}
            alt="Phoenix"
              className={"max-w-sm shadow-inherit"}
              width={2250}
              height={1390}
              layout="responsive"
          />
          <Image
              src={"https://res.cloudinary.com/dk8ign4oc/image/upload/v1678289997/4_foug3j.png"}
            alt="Phoenix"
              className={"w-[16vw] h-auto"}
              width={2250}
              height={1390}
              layout="responsive"
          />
        </div>
          <div className={"text-white text-center text-3xl font-medium px-5"}>
          You didn&apos;t break the Internet.but we can&apos;t find the page you&apos;re looking for.
          We are sorry for the inconvenience. You&apos;ll be redirected to the <Link href="/">home</Link> page in {counter} seconds.
        </div>
      </div>
      </>
    )
  }

  export default Error