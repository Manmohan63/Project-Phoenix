import React,{useState, useEffect} from 'react'
import { BsBoxArrowUpRight } from "react-icons/bs";

const Index = ({name}) => {
    name=name.trim();
    const [data,setdata]= useState([]);
    function fetchData(){
        fetch(`https://leetcode-stats-api.herokuapp.com/mandhan_63`)
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
    // console.log(data);
  return (
    <div className="text-xl font-bold p-4 border-4 rounded-md m-4">
       Total Questions Solved: <span className='border-2 p-1.5 rounded-md m-2'>{data.totalSolved}</span> out of <span className='border-2 p-1.5 rounded-md m-2'>{data.totalQuestions}</span><br/><br/>
       Total Easy Questions Solved: <span className='border-2 p-1.5 rounded-md m-2'>{data.easySolved}</span> out of <span className='border-2 p-1.5 rounded-md m-2'>{data.totalEasy}</span><br/><br/>
       Total Medium Questions Solved: <span className='border-2 p-1.5 rounded-md m-2'>{data.mediumSolved}</span> out of <span className='border-2 p-1.5 rounded-md m-2'>{data.totalMedium}</span><br/><br/>
       Total Hard Questions Solved: <span className='border-2 p-1.5 rounded-md m-2'>{data.hardSolved}</span> out of <span className='border-2 p-1.5 rounded-md m-2'>{data.totalHard}</span><br/><br/>
       Acceptance rate: <span className='border-2 p-1.5 rounded-md m-2'>{data.acceptanceRate}</span><br/>
    </div>
  )
}

export default Index