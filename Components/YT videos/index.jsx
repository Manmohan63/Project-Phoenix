import React from 'react'
import Image from 'next/image';
import { BsBoxArrowUpRight } from "react-icons/bs";

const index = () => {
    const data = [
        {
            name: 'Luv',
            link: 'https://www.youtube.com/@iamluv',
            image_address: 'https://yt3.googleusercontent.com/ytc/AL5GRJWvlVkAo-FzU7FZAARDREszImRJ6oWM4NAe_-5vEA=s176-c-k-c0x00ffffff-no-rj',
            subcount: '160k',
            views: '10M',
            videocount: '150'
        },
        {
            name: 'Code With Harry',
            link: 'https://www.youtube.com/@CodeWithHarry',
            image_address: 'https://yt3.googleusercontent.com/ytc/AL5GRJX7LBvNaQFl0ODpVbrt2F4ajG_wY0fKpZGsEqi8Jw=s176-c-k-c0x00ffffff-no-rj',
            subcount: '3.86M',
            views: '500M',
            videocount: '2k'
        },
        {
            name: 'Love Babbar',
            link: 'https://www.youtube.com/@LoveBabbar',
            image_address: 'https://yt3.googleusercontent.com/ytc/AL5GRJVzh_-mPRQGveE6RZnXorN49wowgCEgB5AAznnB=s176-c-k-c0x00ffffff-no-rj',
            subcount: '500k',
            views: '34M',
            videocount: '220'
        },
        {
            name: 'Anuj Bhaiya',
            link: 'https://www.youtube.com/@AnujBhaiya',
            image_address: 'https://yt3.googleusercontent.com/ytc/AL5GRJUTl6PgpstbxBGkY0k_MOySAFc04gGO2Tn3GudZ=s176-c-k-c0x00ffffff-no-rj',
            subcount: '400k',
            views: '28M',
            videocount: '200'
        },
        {
            name: 'Take U Forward',
            link: 'https://www.youtube.com/@takeUforward',
            image_address: 'https://yt3.googleusercontent.com/ytc/AL5GRJVGhLtYyGqGFG_MHJUla4qK-1l9ERVs_uvnbGXd=s176-c-k-c0x00ffffff-no-rj',
            subcount: '320k',
            views: '31M',
            videocount: '380'
        },
        {
            name: 'Aditya Verma',
            link: 'https://www.youtube.com/@TheAdityaVerma',
            image_address: 'https://yt3.googleusercontent.com/ytc/AL5GRJUAjhIG329O6Wx2GrZ-vsnUXr5GpfjTlVDcc4ZnEw=s176-c-k-c0x00ffffff-no-rj',
            subcount: '180k',
            views: '18M',
            videocount: '130'
        },
        {
            name: 'freeCodeCamp.org',
            link: 'https://www.youtube.com/@freecodecamp',
            image_address: 'https://yt3.googleusercontent.com/ytc/AL5GRJXPR4dSz0wwP-elkeiWUMnfZlCtNZP8Rd-tmFOZYg=s176-c-k-c0x00ffffff-no-rj',
            subcount: '7.45M',
            views: '514M',
            videocount: '1.4k'
        },
        {
            name: 'GeeksforGeeks',
            link: 'https://www.youtube.com/@GeeksforGeeksVideos',
            image_address: 'https://yt3.googleusercontent.com/ytc/AL5GRJXsZkM7A5m_RP5GcyMRjRKQ8RVSN3DwCFTp486Mqg=s176-c-k-c0x00ffffff-no-rj',
            subcount: '610k',
            views: '61M',
            videocount: '2.4k'
        },
        {
            name: 'Priyansh Agarwal',
            link: 'https://www.youtube.com/@PriyanshAgarwal',
            image_address: 'https://yt3.googleusercontent.com/piIn5ZHTD7ytOym1FFSGBrZdfnUD1OHwP4AbjDpyQWAWj4YRgur6vUJn2Qa3EVc2pHcQVlQrVQ=s176-c-k-c0x00ffffff-no-rj',
            subcount: '45k',
            views: '1.9M',
            videocount: '144'
        },
        {
            name: 'Apna College',
            link: 'https://www.youtube.com/@ApnaCollegeOfficial',
            image_address: 'https://yt3.googleusercontent.com/O12gYmCwBASezJpxddXOj1PEirMgxCGX2gOiJ3plomaK4E0K1hr_iobbQEWz1e4QVMflTmug=s176-c-k-c0x00ffffff-no-rj',
            subcount: '3.4M',
            views: '490M',
            videocount: '700'
        },
        {
            name: 'Abdul Bari',
            link: 'https://www.youtube.com/@abdul_bari',
            image_address: 'https://yt3.googleusercontent.com/ytc/AL5GRJVbI0Ohd79vfXisuXFGlpBE3f2tjKBymLiwTul6=s176-c-k-c0x00ffffff-no-rj',
            subcount: '720k',
            views: '72M',
            videocount: '100'
        },
    ];
    return (
        <>
            <div className='w-full grid grid-cols-2 grid-template-rows-global md:grid-cols-1 sm:grid-cols-1'>
                {data.map((d, index) => (
                    <div key={index}>
                        <div className="m-2 border-2 p-4 rounded-md backdrop-blur-sm 
          hover:box-shadow flex flex-col items-center justify-center lg:h-[20vw] xl:h-[20vw]" title={d.name}>
                            <div className='flex justify-between w-full'>
                                <div className="flex flex-col justify-around items-start w-auto text-left py-2">
                                    <h1 className='font-bold border-b-4 text-2xl xl:text-3xl mb-2 md:text-xl sm:text-base'>{d.name}</h1>
                                    <h1><div className='border-b-2  border-gray-200'>{d.videocount}+ Videos</div></h1>
                                    <h1><div className='border-b-2  border-gray-200'>{d.subcount}+ Subscribers</div></h1>
                                    <h1><div className='border-b-2  border-gray-200'>{d.views}+ views</div></h1>
                                </div>
                                <Image
                                    src={d.image_address}
                                    alt={d.name}
                                    height={2500}
                                    width={2500}
                                    className='border-4 border-solid border-main rounded-md flex justify-center items-center w-[12vw] h-[12vw] sm:h-[60px] sm:w-[60px] sm:m-1 md:h-[200px] md:w-[200px]'
                                />
                            </div>
                            <h2 className='font-bold text-base'><a href={d.link} target='blank' type="submit" className='border-2 border-main p-2 rounded-md hover:text-dark__blue hover:bg-main flex justify-around items-center'>YouTube
                                <BsBoxArrowUpRight className='mx-2' />&nbsp;</a></h2>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default index
