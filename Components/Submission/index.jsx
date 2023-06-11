/**
 * This is a React component that fetches and displays a user's recent Codeforces submissions in a
 * table format.
 */
import React,{useState, useEffect} from 'react'
import { BsBoxArrowUpRight } from "react-icons/bs";

const Index = ({name}) => {
    name=name.trim();
    const [data,setdata]= useState([]);
    function fetchData(){
        fetch(`https://codeforces.com/api/user.status?handle=${name}&from=1&count=25`)
            .then(response => {
                if(response.status >= 400) {
                console.log("Server responds with error!");
            }
            return response.json()
            })
            .then((data) => {
            if(data.status== "FAILED"){
                console.log(`https://codeforces.com/api/user.status?handle=${name}&from=1&count=25`);
                alert("Fetching failed");
            }
            else{
                setdata(data.result);
            }
            })
    }
    const [counter, setCounter] = useState(0);
    useEffect(() => {
      if (counter > 0) {
        setTimeout(() => setCounter(counter - 1), 60000);
      }
    },[counter]);
    
    useEffect(() => {
      if (counter <= 0) {
        fetchData();
        setCounter(15);
      }
    },[counter]);
  return (
    <>
      <table className="table-fixed w-full text-center border-separate border-main border-2 rounded-md sm:text-xs md:text-sm" data-aos="fade-up" data-aos-duration="3000">
            <thead>
                <tr>
                    <th className='border-main border-2'>Submission ID</th>
                    <th className='border-main border-2 sm:hidden'>Problem&apos;s Rating</th>
                    <th className='border-main border-2'>Problem&apos;s Name</th>
                    <th className='border-main border-2'>Language</th>
                    <th className='border-main border-2'>Verdict</th>
                    <th className='border-main border-2 sm:hidden'>Time Consumed</th>
                    <th className='border-main border-2 sm:hidden'>Memory Consumed</th>
                </tr>
            </thead>
            <tbody>
                {data.map((q,index) => (
                    <tr key={index}>
                        <td className='border-main border-2'><a href={`https://codeforces.com/contest/${q.contestId}/submission/${q.id}`} target={'_blank'} className={'hover:underline'} rel={"noreferrer"}>
                        {q.id}<BsBoxArrowUpRight size={15} className='mx-2 inline' /></a></td>
                        <td className='border-main border-2 sm:hidden'>{q.problem.rating}</td>
                        <td className='border-main border-2 xl:p-1.5 lg:p-1.5 md:p-1 sm:p-1'><a href={`https://codeforces.com/contest/${q.contestId}/problem/${q.problem.index}`} target={'_blank'} className={'hover:underline'} rel={"noreferrer"}>
                        {q.problem.name}</a></td>
                        <td className='border-main border-2'>{q.programmingLanguage}</td>
                        <td className='border-main border-2'>{(q.verdict=='OK'?<span className="font-bold text-[green]">Accepted</span>:<span className="font-bold text-[red]">{q.verdict.toLowerCase().replace("_", " ")}</span>)}</td>
                      <td className='border-main border-2 sm:hidden'>{q.timeConsumedMillis} ms</td>
                        <td className='border-main border-2 sm:hidden'>{q.memoryConsumedBytes/1000} KB</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  )
}

export default Index