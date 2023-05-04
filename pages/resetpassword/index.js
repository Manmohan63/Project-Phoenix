/**
 * This is a Next.js page component for handling password reset and forgot password functionality using
 * Firebase authentication.
 * @returns A React component for handling password reset and forgot password functionality, along with
 * a server-side props function for retrieving the oobCode query parameter.
 */
import { getAuth, sendPasswordResetEmail, confirmPasswordReset } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const auth = getAuth();

export default function ForgotPassword({ theme }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const [showconfirmPassword, setShowconfirmPassword] = useState(false)
  async function handleForgotPassword(event) {
    event.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setErrorMessage("");
      setSuccessMessage("Password reset email sent successfully");
    } catch (error) {
      setErrorMessage("Error sending password reset email", error);
    }
  }

  async function handlePasswordReset(event) {
    event.preventDefault();
    const oobCode = router.query.oobCode;
    const newPassword = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      router.push("/signup");
    } catch (error) {
      setErrorMessage("Error resetting password", error);
    }
  }
  let style = "text__black w-full p-1.5 my-1.5 bg-transparent border-4 border-dark__blue rounded-md focus:border-main ";
  return (
    <div>
      {router.query.oobCode ? (
        <div>
          <div className='w-full p-4 h-screen justify-center items-center flex flex-col backdrop-blur-sm'>
            <div className='border-4 p-8 flex flex-col items-center justify-center rounded-lg'>
              <h1 className="font-bold text-3xl text-center pb-4">Reset Password</h1>
              <form onSubmit={handlePasswordReset} className='flex flex-col justify-center h-full w-full'>
                <label htmlFor="password">New Password</label>
                <div className="relative">
                  <input className={style} placeholder="Password" type={showPassword ? "text" : "password"} id="password" />
                  <div className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </div>
                </div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="relative">
                  <input className={style} placeholder="Confirm Password" type={showconfirmPassword ? "text" : "password"} id="confirmPassword" />
                  <div className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer" onClick={() => setShowconfirmPassword(!showconfirmPassword)}>
                    {showconfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </div>
                </div>
                <div className='flex flex-col items-center h-[3vw] sm:pb-6'>
                  <button type="submit" className={'font-bold border-4 p-2 w-full text-bg_blue_phoenix bg-main flex justify-center items-center rounded-md ' + `${theme ? "hover:text-dark__blue hover:bg-[#d49f50] border-dark__blue rounded-full" : "hover:text-light_theme_bg hover:bg-light_theme_ot border-bg-light_theme_ot rounded-full"}`}>Reset Password</button>
                </div>
              </form>
              {errorMessage && <div>{errorMessage}</div>}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className='w-full p-4 h-screen justify-center items-center flex flex-col backdrop-blur-sm'>
            <div className='border-4 p-8 flex flex-col items-center justify-center rounded-lg'>
              <h1 className="font-bold text-3xl text-center pb-4">Forgot Password</h1>
              <form onSubmit={handleForgotPassword} className='flex flex-col justify-center h-full w-full'>
                <label htmlFor="email">Email:</label>
                <input type="email" className={style} id="email" placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />

                <button type="submit" className={'font-bold border-4 p-2 w-full text-bg_blue_phoenix bg-main flex justify-center items-center rounded-md' + `${theme ? "hover:text-dark__blue hover:bg-[#d49f50] border-dark__blue rounded-full" : "hover:text-light_theme_bg hover:bg-light_theme_ot border-bg-light_theme_ot rounded-full"}`}>Send Reset Email</button>

              </form>
              {successMessage && <div>{successMessage}</div>}
              {errorMessage && <div>{errorMessage}</div>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      oobCode: context.query.oobCode || null,
    },
  };
}