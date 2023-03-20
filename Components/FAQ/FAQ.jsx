import React from "react";
import QnA from './QnA';

const FAQ = () => {
  {
    /* quesion is the question and ans is the answer to the question itself*/
  }
  {
    /* Similarly more and more can be added and removed*/
  }
  const questions = [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic soluta, fuga temporibus voluptate velit fugiat rerum? Temporibus sunt necessitatibus quam.",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic soluta, fuga temporibus voluptate velit fugiat rerum? Temporibus sunt necessitatibus quam.",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic soluta, fuga temporibus voluptate velit fugiat rerum? Temporibus sunt necessitatibus quam.",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic soluta, fuga temporibus voluptate velit fugiat rerum? Temporibus sunt necessitatibus quam.",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic soluta, fuga temporibus voluptate velit fugiat rerum? Temporibus sunt necessitatibus quam.",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic soluta, fuga temporibus voluptate velit fugiat rerum? Temporibus sunt necessitatibus quam.",
    },
  ];
  

  return (
    <div>
      <div className="flex flex-col-reverse justify-between md:flex-row overflow-hidden w-full">
        <div className="flex flex-col justify-center items-center w-full">
        <div className="text-5xl font-bold">FAQs</div>
          <div className="w-[40vw]">
            {questions.map((q, index) => <QnA question={q.question} answer={q.answer} key={index}/>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
