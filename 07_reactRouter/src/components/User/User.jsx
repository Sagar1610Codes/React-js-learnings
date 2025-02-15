import React from 'react'
import { use } from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const userId = useParams().userId
  return (
    <div className='bg-gray-500 text-white text-3xl text-center'>User: {userId}</div>
  )
}

export default User