import React from 'react'
import { useState } from 'react';
import Tools from '../tools';
import Browser_extensions from '../browser_extensions';

const Resource = () => {
  const [open, setopen] = useState(true);
  return (
    <div className=''>
      <div className='w-full flex items-center border-b-2'>
        <div className={`border-x-[1px] m-0 p-0 w-1/2 flex items-center justify-center backdrop-blur-sm ${open? ("text-dark__blue bg-main"): "m-0"}`} onClick={()=>setopen(true)}>Tools</div>
        <div className={`border-x-[1px] m-0 p-0 w-1/2 flex items-center justify-center backdrop-blur-sm ${!open ? ("text-dark__blue bg-main"): "m-0"}`} onClick={()=>setopen(false)}>Broswser Extensions</div>
      </div>
      <div className=''>
        {open && <Tools />}
        {!open && <Browser_extensions />}
      </div>
    </div>
  )
}

export default Resource