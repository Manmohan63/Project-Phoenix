/* This is a React component that displays a list of frequently asked questions (FAQs) and their
corresponding answers. It imports the React library and a custom QnA component, defines an array of
questions and answers, and maps over the array to render each question and answer using the QnA
component. The component also includes some styling using CSS classes. */
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
      question: "What is competitive Programming?",
      answer:
        `Competitive Programming is a mental sport where the contestants called sport programmers have to solve coding problems using maths, data structures and algorithms with various restrictions like memory limit, execution time within a set time limit. They are judged on the basis of output produced, execution time and program size.`,
    },
    {
      question: "What is most important for competitive programming?",
      answer:
        "Competitive programming is a field that requires a deep understanding of algorithms and data structures, as well as the ability to think logically and solve problems efficiently.",
    },
    {
      question: "Which language is mostly used in competitive programming?",
      answer:
        `Here are the 5 most-preferred languages that developers use for competitive programming:
        C++,
        Java,
        Python,
        Kotlin,
        Ruby.`
    },
    {
      question: "What is the difference between CP and DSA?",
      answer:
        "DSA is all about solving real-world problems mainly using programming concepts that are vaguely related to computer science. CP is a mind sport to train your brain, get better at problem-solving and critical thinking; you should try competitive programming.",
    },
    {
      question: "Can we do CP without DSA?",
      answer:
        "DSA in depth is required when you want to learn computer science, not programming. Understand the difference, computer science is the theory - programming is practical. Be aware of things that exist, algorithms that exist, and data structures that exist.",
    },
    {
      question: "Does CP help in placements?",
      answer:
        "Yes, competitive programming is necessary for freshers. It helps them to improve their skills in a short span of time. This will assist them to land a better job and increase their chances of being chosen in an interview.",
    },
    {
      question: "How can I be strong in competitive programming?",
      answer:
        `Pick a Programming Language. Comprehend the Concepts of Time and Space Complexity. Study Data Structures and Algorithms Fundamentals. Participate in Coding Challenges and Solve Coding Problems.`,
    },
  ];
  

  return (
    <div>
      <div className="flex flex-col-reverse justify-between md:flex-row overflow-hidden w-full">
        <div className="flex flex-col justify-center items-center w-full" data-aos="fade-up" data-aos-duration="3000">
        <div className="text-5xl font-bold">FAQs</div>
          <div className="xl:w-[40vw] lg:w-[40vw] md:w-full sm:w-full" data-aos="zoom-in" data-aos-duration="3000">
            {questions.map((q, index) => <QnA question={q.question} answer={q.answer} key={index}/>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
