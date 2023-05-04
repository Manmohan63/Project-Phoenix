/**
 * This is a React component that fetches and displays data about a user's LeetCode problem solving
 * statistics.
 * @returns The component `Index` is being returned, which displays the data fetched from the API
 * endpoint for a given `name`. The data includes the total number of questions solved, the number of
 * easy, medium, and hard questions solved, and the acceptance rate. The component also includes a
 * timer that fetches the data every 15 minutes.
 */
import React,{useState, useEffect} from 'react'
import { BsBoxArrowUpRight } from "react-icons/bs";

const Index = ({name}) => {
    name=name.trim();
    const [data,setdata]= useState([]);
    function fetchData(){
        fetch(`https://leetcode-stats-api.herokuapp.com/${name}`)
            .then(response => {
                if(response.status >= 400) {
                console.log("Server responds with error!");
            }
            return response.json()
            })
            .then((data) => {
            if(data.status!= "success"){
                alert("Fetching failed");
            }
            else{
                setdata(data);
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
    <div className="text-xl font-bold p-4 border-4 rounded-md m-4">
       Total Questions Solved: <span className='border-2 p-1 rounded-md m-1.5 mt-1'>{data.totalSolved}</span> out of <span className='border-2 p-1 rounded-md m-1.5 mt-1'>{data.totalQuestions}</span><br/><br/>
       Total Easy Questions Solved: <span className='border-2 p-1 rounded-md m-1.5 mt-1'>{data.easySolved}</span> out of <span className='border-2 p-1 rounded-md m-1.5 mt-1'>{data.totalEasy}</span><br/><br/>
       Total Medium Questions Solved: <span className='border-2 p-1 rounded-md m-1.5 mt-1'>{data.mediumSolved}</span> out of <span className='border-2 p-1 rounded-md m-1.5 mt-1'>{data.totalMedium}</span><br/><br/>
       Total Hard Questions Solved: <span className='border-2 p-1 rounded-md m-1.5 mt-1'>{data.hardSolved}</span> out of <span className='border-2 p-1 rounded-md m-1.5 mt-1'>{data.totalHard}</span><br/><br/>
       Acceptance rate: <span className='border-2 p-1 rounded-md m-1.5 mt-1'>{data.acceptanceRate}</span><br/>
    </div>
  )
}

export default Index