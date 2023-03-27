import { auth } from '@/firebaseclient';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from 'next/link';
export default function SignIn({theme}) {

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
          //alert('email or password not correct');
          setErrorp('email or password not correct')
          // ..
        });
    }
  
    return (
        <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          {errorp && <div>{errorp}</div>}
        </label>
        <button type="submit">Sign In</button>
        
        
      </form>
      
      <div>
      <Link href='/resetpassword'>Forgot Password?</Link>
      </div>
      </div>
    );
  }