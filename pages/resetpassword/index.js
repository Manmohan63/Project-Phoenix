import { getAuth, sendPasswordResetEmail, confirmPasswordReset } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";

const auth = getAuth();

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleForgotPassword(event) {
    event.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccessMessage("Password reset email sent successfully");
    } catch (error) {
      setErrorMessage("Error sending password reset email:", error);
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
      setErrorMessage("Error resetting password:", error);
    }
  }

  return (
    <div>
      {router.query.oobCode ? (
        <div>
          <h1>Reset Password</h1>
          <form onSubmit={handlePasswordReset}>
            <label htmlFor="password">New Password:</label>
            <input type="password" id="password" />
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" />
            <button type="submit">Reset Password</button>
          </form>
          {errorMessage && <div>{errorMessage}</div>}
        </div> 
      ) : (
        <div>
          <h1>Forgot Password</h1>
          <form onSubmit={handleForgotPassword}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            <button type="submit">Send Password Reset Email</button>
          </form>
          {successMessage && <div>{successMessage}</div>}
          {errorMessage && <div>{errorMessage}</div>}
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      oobCode: context.query.oobCode||null,
    },
  };
}