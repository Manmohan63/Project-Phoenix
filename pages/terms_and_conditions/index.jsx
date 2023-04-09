import React from 'react'
import Head from 'next/head'

const Index = () => {
  return (
    <>
      <Head>
        <title>Rules | CP Unofficial</title>
      </Head>
    <div className='flex justify-around items-around p-2.5 pb-12 backdrop-blur-sm'>
      <div className="w-4/5">
        <h1 className='text-5xl font-bold text-center p-4 sm:text-3xl'>Terms and Conditions</h1>
        <ul className='text-xl sm:text-base list-disc'>
        <li> A CodeChef and Codeforces ID is a MUST (Ensure your name is 
        mentioned in your profile). </li>
        <li> Participate in contests regularly.</li>
        <li> Join Post-Contest Discussions (PCD) regularly and try to interact as much 
        as possible.</li>
        <li> Avoid any unfair means because you&apos;ll be monitored. Your account 
        might also get banned by Codeforces / CodeChef. If you find anyone 
        cheating in any way, please report it to the admins. Your privacy will be 
        respected.</li>
        <li> Be civil. All communications should be respectful. </li>
        <li> Try to practice &quot;Agree to Disagree&quot;, and if things start to get heated, 
        please contact the admins. </li>
        <li> All Cap sentences should be avoided. For example: &quot;I SAID, LET&apos;S SEE&quot; 
        etc.</li>
        <li> Respect privacy.</li>
        <li> Be nice to everyone and try to keep this a friendly environment. </li>
        <li> Generally, be mindful of what you say to anyone! We are all here to 
        support each other.</li>
        <li> Keep it legal. Participating in, suggesting, or encouraging any activity 
        that is termed as illegal by the government is cause for immediate 
        removal and termination of a member.</li>
        <li> No spam, NSFW, or otherwise offensive content. </li>
        <li> No hate speech of any kind (like racism, gender, caste, background, disabilities, etc.)</li>
        <li> No discussion of Religion or Politics.</li>
        <li> No sharing of illegal content. </li>
        <li> Avoid sharing private information (until & unless asked for by any admin & such). </li>
        <li> Be free to ask doubts or for resources in the group.</li>
        <li> Feel free to share any relevant opportunities & resources in the group and Discord Server.</li>
        <li> For any queries contact the admins.</li>
        </ul> 
      </div>
    </div>
    </>
  )
}

export default Index