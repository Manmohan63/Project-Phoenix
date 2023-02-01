// import React from 'react'

// const index = () => {
//   return (
//     <div>index hello hello</div>
//   )
// }

// export default index
// import React, { useState, useEffect } from 'react';

// const Codeforces = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const res = await fetch('https://codeforces.com/api/user.info?handles=ninjamayank');
//       const result = await res.json();
//       setData(result.result);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {data.map(item => (
//         <div key={item.handle}>
//           <p>{item.handle}</p>
//           <p>{item.rank}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Codeforces;
