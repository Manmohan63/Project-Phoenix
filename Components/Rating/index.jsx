/**
 * This is a React component that fetches and displays a user's Codeforces rating history in a table
 * format.
 */
import React,{useState, useEffect} from 'react'
import { BsBoxArrowUpRight } from "react-icons/bs";

const Index = ({name}) => {
    name=name.trim();
    const [data,setdata]= useState([]);
    function fetchData(){
        fetch(`https://codeforces.com/api/user.rating?handle=${name}`)
            .then(response => {
                if(response.status >= 400) {
                console.log("Server responds with error!");
            }
            return response.json()
            })
            .then((data) => {
            if(data.status== "FAILED"){
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
    let size = data.length;
    let new_data = data.reverse();
  return (
    <>
      <table className="table-fixed w-full text-center border-separate border-main border-2 rounded-md sm:text-xs" data-aos="fade-up" data-aos-duration="3000">
            <thead>
                <tr>
                    <th className='border-main border-2'>#</th>
                    <th className='border-main border-2'>Contest&apos;s Name</th>
                    <th className='border-main border-2'>Rating change</th>
                    <th className='border-main border-2'>New rating</th>
                </tr>
            </thead>
            <tbody>
                {new_data.map((q,index) => (
                    <tr key={index}>
                        <td className='border-main border-2'>{size-index}</td>
                        <td className='border-main border-2 p-1.5'><a href={`https://codeforces.com/contest/${q.contestId}`} target={'_blank'} className={'hover:underline'} rel={"noreferrer"}>
                        {q.contestName}<BsBoxArrowUpRight size={15} className='mx-2 inline' /></a></td>
                      <td className='border-main border-2'>{(q.newRating-q.oldRating>=0)?<span className="font-bold text-[green]">+{q.newRating-q.oldRating}</span>:<span className="font-bold text-[red]">{q.newRating-q.oldRating}</span>}</td>
                        <td className='border-main border-2'>{q.newRating}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  )
}

export default Index