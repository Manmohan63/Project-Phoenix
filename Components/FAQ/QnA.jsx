/* This is a React component that renders a question and answer section with an expandable/collapsible
feature. It uses the useState hook to manage the state of whether the answer section is open or
closed. It also uses the react-icons library to display arrow icons for the expand/collapse feature. */
import React, { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";


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