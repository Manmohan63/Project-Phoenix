/**
 * This is a React component that allows a user to update their profile information and updates the
 * information in a Firebase database.
 * @returns This code exports a React component called ProfilePage.
 */
import { useState } from "react";
import { useRouter } from "next/router";
import { auth } from "@/firebaseclient";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebaseclient";
import Link from "next/link";
import Head from "next/head";

export default function ProfilePage({ theme }) {
  const user = auth.currentUser;
  const router = useRouter();
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [interestedin, setInterestedin] = useState("");
  const [codeforcesId, setCodeforcesId] = useState("");
  const [leetcodeId, setLeetcodeId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateUser(user.uid, {
      name,
      dob,
      state,
      city,
      interestedin,
      codeforcesId,
      leetcodeId,
    });
    router.push("/profile");
  };
  let style =
    "text__black w-full p-1.5 my-1.5 bg-transparent border-4 border-dark__blue rounded-md focus:border-main ";
  return (
    <>
      <Head>
        <title>Settings | CP Unofficial</title>
      </Head>

      <div className="w-full p-4 h-screen justify-center items-center flex flex-col backdrop-blur-sm">
        <div className="border-4 p-8 flex flex-col items-center justify-center rounded-lg">
          <h1 className="font-bold text-3xl text-center pb-4">
            Update Profile
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center h-full w-full"
          >
            <label>
              Fullname
              <input
                className={style}
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <label>
              Date of Birth
              <input
                className={style}
                type="date"
                value={dob}
                onChange={(event) => setDob(event.target.value)}
              />
            </label>
            <div className="flex w-full sm:w-full md:w-full">
              <div className="flex flex-col w-full">
                <label>CodeforcesId</label>
                <input
                  className={style + "w-full"}
                  type="text"
                  value={codeforcesId}
                  onChange={(event) => setCodeforcesId(event.target.value)}
                />
              </div>
              <div className="flex flex-col w-full xl:ml-3 lg:ml-3">
                <label>LeetcodeId</label>
                <input
                  className={style + "w-full"}
                  type="text"
                  value={leetcodeId}
                  onChange={(event) => setLeetcodeId(event.target.value)}
                />
              </div>
            </div>
            <div className="flex w-full sm:w-full md:w-full">
              <div className="flex flex-col w-full">
                <label>State</label>
                <input
                  className={style + "w-full"}
                  type="text"
                  value={state}
                  onChange={(event) => setState(event.target.value)}
                />
              </div>
              <div className="flex flex-col w-full xl:ml-3 lg:ml-3">
                <label>City</label>
                <input
                  className={style + "w-full"}
                  type="text"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                />
              </div>
            </div>
            <label>
              Interested In
              <input
                className={style}
                type="text"
                value={interestedin}
                onChange={(event) => setInterestedin(event.target.value)}
              />
            </label>
            <Link href="/resetpassword">
              <button className="hover: underline">ResetPassword</button>
            </Link>
            <div className="flex flex-col items-center h-[3vw] sm:pb-6">
              <button
                type="submit"
                className={
                  "font-bold border-4 p-2 w-full text-bg_blue_phoenix bg-main flex justify-center items-center rounded-md " +
                  `${
                    theme
                      ? "hover:text-dark__blue hover:bg-[#d49f50] border-dark__blue rounded-full"
                      : "hover:text-light_theme_bg hover:bg-light_theme_ot border-bg-light_theme_ot rounded-full"
                  }`
                }
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export async function updateUser(uid, data) {
  const userRef = doc(db, "users", uid);
  await updateDoc(userRef, data);
}
