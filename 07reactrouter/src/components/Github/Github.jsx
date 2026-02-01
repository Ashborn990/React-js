import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

/*
    const [data, setData] = React.useState({})
    useEffect(() => {
        fetch('https://api.github.com/users/Ashborn990')
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])
*/
    
    const data = useLoaderData()

  return (
    <div className='text-center bg-gray-400 m-4 text-white p-4 text-3xl'>Github Account Name: {data.login}
    <img src={data.avatar_url} width={300} alt="" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Ashborn990')
    return response.json()
}