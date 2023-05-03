/**
 * This is a React component for a sign-in form that uses Firebase authentication and allows users to
 * log in to their account.
 */
import { auth } from '@/firebaseclient';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function SignIn({ theme }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorp, setErrorp] = useState('')
  const [showPassword, setShowPassword] = useState(false)

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
    <div className='w-full p-4 h-screen justify-center items-center flex flex-col backdrop-blur-sm'>
      <div className='border-4 p-8 flex flex-col items-center justify-center rounded-lg'>
        <h1 className='font-bold text-3xl text-center pb-4'>Log In to Your Account</h1>

        <form onSubmit={handleSubmit} className='flex flex-col justify-center h-full w-full'>
          <input className={style} placeholder="E-mail" type="email" value={email} onChange={(event) => {
            setEmail(event.target.value);
            setErrorp('')
          }} />
          <div className="relative">
            <input className={style} placeholder="Password" type={showPassword ? "text" : "password"} value={password} onChange={(event) => {
              setPassword(event.target.value);
              setErrorp('');
            }}/>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </div>
          </div>
          <div className='flex justify-end'>
            <div><Link href='/resetpassword' className='text-sm hover:underline'>Forgot Password?</Link></div>
          </div>
          {errorp && <div className='text-center text-2xl'>{errorp}</div>}
          <div className='flex flex-col items-center h-[3vw]'>
            <button type="submit" className={'font-bold border-4 p-2 w-full text-bg_blue_phoenix bg-main flex justify-center items-center rounded-md ' + `${theme ? "hover:text-dark__blue hover:bg-[#d49f50] border-dark__blue rounded-full" : "hover:text-light_theme_bg hover:bg-light_theme_ot border-bg-light_theme_ot rounded-full"}`}>Sign In</button>
          </div>
        </form>

        <div className='mt-4 pt-6'>Need an Account?&nbsp;<Link href='/signup' className='hover:underline'>Sign up</Link></div>
      </div>
    </div>
  );
}