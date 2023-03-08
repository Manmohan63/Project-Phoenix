import React from 'react'
import Image from 'next/image';

const index = () => {
  const data = [
    {
      name: 'CF-Predictor',
      link: 'https://chrome.google.com/webstore/detail/cf-predictor/ocfloejijfhhkkdmheodbaanephbnfhn',
      image_address: 'https://lh3.googleusercontent.com/z7bUgnNFUF_3CBjOs4YijH8fdsgcZVw5CnrsEnyjMp2w3OqjwzocnCTt4MQJ0rm4z3tkVo0UUZcu8J9nzjs5aktT=w128-h128-e365-rj-sc0x00ffffff',
      desc: `This extension predicts rating changes for Codeforces. It shows approximate deltas during and after the contest. A huge number of your nerve cells die every time when you wait for a rating update on Codeforces.`,
      version: `1.3.2`,
    },
    {
      name: 'CF-Predictor',
      link: 'https://chrome.google.com/webstore/detail/cf-predictor/ocfloejijfhhkkdmheodbaanephbnfhn',
      image_address: 'https://lh3.googleusercontent.com/z7bUgnNFUF_3CBjOs4YijH8fdsgcZVw5CnrsEnyjMp2w3OqjwzocnCTt4MQJ0rm4z3tkVo0UUZcu8J9nzjs5aktT=w128-h128-e365-rj-sc0x00ffffff',
      desc: `This extension predicts rating changes for Codeforces. It shows approximate deltas during and after the contest. A huge number of your nerve cells die every time when you wait for a rating update on Codeforces.`,
      version: `1.3.2`,
    },
    {
      name: 'CF-Predictor',
      link: 'https://chrome.google.com/webstore/detail/cf-predictor/ocfloejijfhhkkdmheodbaanephbnfhn',
      image_address: 'https://lh3.googleusercontent.com/z7bUgnNFUF_3CBjOs4YijH8fdsgcZVw5CnrsEnyjMp2w3OqjwzocnCTt4MQJ0rm4z3tkVo0UUZcu8J9nzjs5aktT=w128-h128-e365-rj-sc0x00ffffff',
      desc: `This extension predicts rating changes for Codeforces. It shows approximate deltas during and after the contest. A huge number of your nerve cells die every time when you wait for a rating update on Codeforces.`,
      version: `1.3.2`,
    },
    {
      name: 'CF-Predictor',
      link: 'https://chrome.google.com/webstore/detail/cf-predictor/ocfloejijfhhkkdmheodbaanephbnfhn',
      image_address: 'https://lh3.googleusercontent.com/z7bUgnNFUF_3CBjOs4YijH8fdsgcZVw5CnrsEnyjMp2w3OqjwzocnCTt4MQJ0rm4z3tkVo0UUZcu8J9nzjs5aktT=w128-h128-e365-rj-sc0x00ffffff',
      desc: `This extension predicts rating changes for Codeforces. It shows approximate deltas during and after the contest. A huge number of your nerve cells die every time when you wait for a rating update on Codeforces.`,
      version: `1.3.2`,
    },
    {
      name: 'CF-Predictor',
      link: 'https://chrome.google.com/webstore/detail/cf-predictor/ocfloejijfhhkkdmheodbaanephbnfhn',
      image_address: 'https://lh3.googleusercontent.com/z7bUgnNFUF_3CBjOs4YijH8fdsgcZVw5CnrsEnyjMp2w3OqjwzocnCTt4MQJ0rm4z3tkVo0UUZcu8J9nzjs5aktT=w128-h128-e365-rj-sc0x00ffffff',
      desc: `This extension predicts rating changes for Codeforces. It shows approximate deltas during and after the contest. A huge number of your nerve cells die every time when you wait for a rating update on Codeforces.`,
      version: `1.3.2`,
    },
    {
      name: 'CF-Predictor',
      link: 'https://chrome.google.com/webstore/detail/cf-predictor/ocfloejijfhhkkdmheodbaanephbnfhn',
      image_address: 'https://lh3.googleusercontent.com/z7bUgnNFUF_3CBjOs4YijH8fdsgcZVw5CnrsEnyjMp2w3OqjwzocnCTt4MQJ0rm4z3tkVo0UUZcu8J9nzjs5aktT=w128-h128-e365-rj-sc0x00ffffff',
      desc: `This extension predicts rating changes for Codeforces. It shows approximate deltas during and after the contest. A huge number of your nerve cells die every time when you wait for a rating update on Codeforces.`,
      version: `1.3.2`,
    },
    {
      name: 'CF-Predictor',
      link: 'https://chrome.google.com/webstore/detail/cf-predictor/ocfloejijfhhkkdmheodbaanephbnfhn',
      image_address: 'https://lh3.googleusercontent.com/z7bUgnNFUF_3CBjOs4YijH8fdsgcZVw5CnrsEnyjMp2w3OqjwzocnCTt4MQJ0rm4z3tkVo0UUZcu8J9nzjs5aktT=w128-h128-e365-rj-sc0x00ffffff',
      desc: `This extension predicts rating changes for Codeforces. It shows approximate deltas during and after the contest. A huge number of your nerve cells die every time when you wait for a rating update on Codeforces.`,
      version: `1.3.2`,
    },
    {
      name: 'CF-Predictor',
      link: 'https://chrome.google.com/webstore/detail/cf-predictor/ocfloejijfhhkkdmheodbaanephbnfhn',
      image_address: 'https://lh3.googleusercontent.com/z7bUgnNFUF_3CBjOs4YijH8fdsgcZVw5CnrsEnyjMp2w3OqjwzocnCTt4MQJ0rm4z3tkVo0UUZcu8J9nzjs5aktT=w128-h128-e365-rj-sc0x00ffffff',
      desc: `This extension predicts rating changes for Codeforces. It shows approximate deltas during and after the contest. A huge number of your nerve cells die every time when you wait for a rating update on Codeforces.`,
      version: `1.3.2`,
    },
  ];
  return (
    <div className='w-full grid grid-cols-2 grid-template-rows-global'>
      {data.map((d, index) => (
        <a href={d.link} target='blank' key={index}>
          <div className="m-2 border-2 p-4 rounded-md backdrop-blur-sm" title={d.name}>
            <h1 className='font-bold text-2xl mb-2'>{d.name}</h1>
            <div className='flex items-start justify-around'>
              <p className='text-base'>{d.desc}</p>
              <Image
                src={d.image_address}
                alt={d.name}
                height={128}
                width={128}
                className='border-4 border-solid'
              />
            </div>
            <h2 className='font-bold inline text-base'>Version :-</h2> {d.version}
          </div>
        </a>
      ))}
    </div>
  )
}

export default index