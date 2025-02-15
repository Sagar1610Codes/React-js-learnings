import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setdata] = useState([])
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/Sagar1610Codes`)
    //     .then(res => res.json())
    //     .then(data => {console.log(data);
    //     setdata(data)}),
    // []})
  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl p-4'>
        <img className='m-auto' src={data?.avatar_url} alt="Git_picture" width={120}/>
        Github Id: {data?.id}
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {

    const res = await fetch(`https://api.github.com/users/Sagar1610Codes`)
    return res.json()
}