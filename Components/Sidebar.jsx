import React from 'react'
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <Link href="/">Home</Link>
        <Link href="/chatroom">Chatroom</Link>
        <Link href="/calender">Calender</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/more">More</Link>
        <Link href="/settings">Settings</Link>
    </div>
  )
}

export default Sidebar