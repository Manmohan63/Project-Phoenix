import React from 'react'
const data=[
    {
        name:'Rahul',
        rating:'100',
        questionssolved:'200'
    },
    {
        name:'Rahul',
        rating:'100',
        questionssolved:'200'
    },
    {
        name:'Rahul',
        rating:'100',
        questionssolved:'200'
    },
    {
        name:'Rahul',
        rating:'100',
        questionssolved:'200'
    },
    {
        name:'Rahul',
        rating:'100',
        questionssolved:'200'
    },
    {
        name:'Rahul',
        rating:'100',
        questionssolved:'200'
    },
    {
        name:'Rahul',
        rating:'100',
        questionssolved:'200'
    },
    {
        name:'Rahul',
        rating:'100',
        questionssolved:'200'
    },
    {
        name:'Rahul',
        rating:'100',
        questionssolved:'200'
    },
    {
        name:'Rahul',
        rating:'100',
        questionssolved:'200'
    },
];
const monthly = () => {
    return (
        <table class="table-fixed border-separate border-main border-2 rounded-md">
            <thead>
                <tr>
                    <th className='border-main border-2'>Name</th>
                    <th className='border-main border-2'>Rating</th>
                    <th className='border-main border-2'>Questions Solved</th>
                </tr>
            </thead>
            <tbody>
                {data.map((person,index) => (
                    <tr key={index}>
                        <td className='border-main border-2'>{person.name}</td>
                        <td className='border-main border-2'>{person.rating}</td>
                        <td className='border-main border-2'>{person.questionssolved}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default monthly