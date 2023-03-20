import React, { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/Io";


const QnA = ({question, answer, index}) => {
    const [isopen,setisopen]=useState(false);
  return (
      <div key={index} className="border-2 border-main rounded-md shadow-xl m-3.5 flex-col text-white">
          <div className={`p-3.5 transition-all duration-200 hover: cursor-pointer ${isopen ? "rounded-t-md" : "rounded-md"}`} onClick={() => setisopen(!isopen)}>
              <h3 className="flex justify-between">
                  {question} &nbsp;
                  {isopen && (
                      <IoIosArrowUp className="inline" color="white" />
                  )}
                  {!isopen && (
                      <IoIosArrowDown className="inline" color="white" />
                  )}
              </h3>
          </div>
          {isopen && (
              <div className={`bg-main text-dark__blue p-3.5 rounded-b-md transition`}>
                  {answer}
              </div> 
          )}
      </div>
  )
}

export default QnA