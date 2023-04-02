import { auth } from '@/firebaseclient';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from 'next/link';
export default function SignIn({ theme }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorp, setErrorp] = useState('')

  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("logged In");
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
        setEmail('');
        setPassword('');
        setErrorp('Invalid Credentials')
        // ..
      });
  }
  let style = "text__black w-full p-1.5 my-1.5 bg-transparent border-4 border-dark__blue rounded-md focus:border-main ";
  return (
    <div className='w-full h-screen justify-center items-center flex flex-col backdrop-blur-sm'>
      <div className='border-4 p-8 flex flex-col items-center rounded-lg'>
        <h1 className='font-bold text-3xl text-center pb-4'>Log In to Your Account</h1>

        <form onSubmit={handleSubmit} className='flex flex-col justify-center h-full w-[25vw]'>
            <input className={style} placeholder="E-mail" type="email" value={email} onChange={(event) => {
              setEmail(event.target.value);
              setErrorp('')
              }} />
            <input className={style} placeholder="Password" type="password" value={password} onChange={(event) => {
              setPassword(event.target.value);
              setErrorp('');
              }}/>
            <div className='flex justify-end'>
              <div><Link href='/resetpassword' className='text-sm hover:underline'>Forgot Password?</Link></div>
            </div>
            {errorp && <div className='text-center text-2xl'>{errorp}</div>}
        <div className='flex flex-col items-center h-[3vw]'>
          <button type="submit" className={'font-bold border-4 p-2 w-full text-bg_blue_phoenix bg-main flex justify-center items-center rounded-md ' + `${theme ? "hover:text-dark__blue hover:bg-[#d49f50] border-dark__blue rounded-full" : "hover:text-light_theme_bg hover:bg-light_theme_ot border-bg-light_theme_ot rounded-full"}`}>Sign In</button>
        </div>
        </form>

        <div className='mt-4'>Need an Account?&nbsp;<Link href='/signup' className='hover:underline'>Sign up</Link></div>
      </div>
    </div>
  );
}