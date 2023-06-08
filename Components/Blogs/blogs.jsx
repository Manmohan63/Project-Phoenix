import React, { useState} from 'react'
import Image from 'next/image';
import parse from 'html-react-parser';
import { BsBoxArrowUpRight } from "react-icons/bs";
import { ImSearch } from 'react-icons/im'

const Blogs = () => {
    const data = [
        {
            name: 'CP-Algorithms',
            link: 'https://cp-algorithms.com/',
            image_address: 'data:image/png;base64,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',
        },
        {
            name: 'Medium',
            link: 'https://medium.com/',
            image_address: 'https://miro.medium.com/v2/resize:fit:1400/1*psYl0y9DUzZWtHzFJLIvTw.png',
        },
        {
            name: 'Geeks For Geeks',
            link: 'https://www.geeksforgeeks.org/',
            image_address: 'https://yt3.googleusercontent.com/ytc/AL5GRJXsZkM7A5m_RP5GcyMRjRKQ8RVSN3DwCFTp486Mqg=s176-c-k-c0x00ffffff-no-rj',
        },
        {
            name: 'Quora',
            link: 'https://www.quora.com/',
            image_address: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Quora_icon.svg/1200px-Quora_icon.svg.png',
        },
    ];
    const [issearched, setsearched] = useState(false);
    const [name, setname] = useState('');
    const [searchblogs, setsearchblogs] = useState([])
    return (
        <>
            <Search setsearched={setsearched} name={name} setname={setname} setsearchblogs={setsearchblogs}/>
            {(issearched) && <Searchcontent searchblogs={searchblogs}/>}
              <h1 className='text-3xl m-2'>Other recomended Sources:</h1>
            <div className='w-full grid grid-cols-3 grid-template-rows-global md:grid-cols-2 sm:grid-cols-1'>
                {data.map((d, index) => (
                    <div key={index}>
                        <div className="m-2 border-2 p-4 rounded-md backdrop-blur-sm 
          hover:box-shadow flex flex-col items-center justify-around lg:h-[20vw] xl:h-[20vw]" data-aos="fade-up-left" data-aos-duration="3000" title={d.name}>
                            <div className='flex justify-center w-full'>
                                <Image
                                    src={d.image_address}
                                    alt={d.name}
                                    height={2500}
                                    width={2500}
                                    data-aos="flip-right" data-aos-duration="3000"
                                    className='border-4 border-solid border-main rounded-md flex justify-center items-center w-[12vw] h-[12vw] sm:h-[60px] sm:w-[60px] sm:m-1 md:h-[200px] md:w-[200px]'
                                />
                            </div>
                            <h2 className='font-bold text-base'><a href={d.link} target='blank' type="submit" className='border-2 border-main p-2 rounded-md hover:text-dark__blue hover:bg-main flex justify-around items-center' data-aos="fade-left" data-aos-duration="3000" >{d.name}
                                <BsBoxArrowUpRight className='mx-2' />&nbsp;</a></h2>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

const Search = ({setsearched,name,setname, setsearchblogs}) => {
  /**
   * This function fetches blog entries of a user from Codeforces API and sets the state of the
   * searched blogs.
   */
  function fetchData(){
    fetch(`https://codeforces.com/api/user.blogEntries?handle=${name}`)
      .then(response => {
         if(response.status >= 400) {
            console.log("Server responds with error!");
        }
        return response.json()
      })
      .then((data) => {
        if(data.status== "FAILED"){
            alert(data.comment);
            setname('');
            setsearched(false);
        }
        else{
          setsearchblogs(data.result);
        }
      })
  }
    /**
     * This is a React function that handles form submission and input change, checking if a name is
     * entered and setting a state accordingly.
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        if(name==''){
            alert('Please enter a name');
        }
        else{ 
          setsearched(true);
          fetchData();
        }
    };
    const handleChange = (e) => {
        setname(e.target.value);
    };
    return (
        <div className='flex items-end'>
            <form onSubmit={handleSubmit} className='border-2 border-main rounded-md text-dark__blue mx-2 mt-2 flex items-center justify-between xl:w-[28vw] lg:w-[28vw] md:w-full sm:w-full'>
                <label className='my-1.5 mx-1 w-full'>
                    <input type="text" className='p-1 w-full rounded-md h-[35px]' placeholder={`Search Codeforces Authors e.g. Um_nik`}
                        value={name} onChange={handleChange}
                    />
                </label>
                <button type='submit' className='p-1 hover:text-dark__blue hover:bg-main mr-1 rounded-md text-main border-2 border-main '>
                    <ImSearch size={20} />
                </button>
            </form>
        </div>
    );
}
/* The above code is a React component that takes in a prop called `searchblogs` and displays a list
of blogs based on the search results. It first displays the number of results found and then maps
through the `searchblogs` array to display each blog's title and a link to the blog post on
Codeforces. The component also applies some styling to the blog post container. */
const Searchcontent = ({searchblogs}) => {
  return (
    <div>
      <h1 className='text-2xl m-2'>{searchblogs.length} Results Found</h1>
      <div className='w-full grid grid-cols-2 grid-template-rows-global md:grid-cols-1 sm:grid-cols-1'>
        {searchblogs.map((d, index) => (
          <div key={index}>
            <div className="m-2 border-2 p-4 rounded-md backdrop-blur-sm 
            hover:box-shadow  flex flex-col items-center justify-around lg:h-[10vw] xl:h-[10vw]"data-aos="zoom-in" data-aos-duration="3000" >
              {parse(d.title)}
              <h2 className='font-bold text-base'><a href={`https://codeforces.com/blog/entry/${d.id}`} target='blank' type="submit" className='border-2 border-main p-2 rounded-md hover:text-dark__blue hover:bg-main flex justify-around items-center'>Blog link
                <BsBoxArrowUpRight className='mx-2' />&nbsp;</a></h2>
            </div>
          </div>
        ))}
      </div>
      </div>
  )
}
export default Blogs