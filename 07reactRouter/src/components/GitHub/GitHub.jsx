//import React from 'react'

//import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
//import { use } from "react"

function GitHub() {
  const data = useLoaderData()
  // const [data, setData] = useState([])

  // useEffect(()=> {
  //   fetch('https://api.github.com/users/DATTAJI01')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     setData(data)
  //   },[]);
  // })
  return (
    <div className="bg-gray-600 text-center text-3xl  text-white m-4 p-4">GitHub: {data.name}
    <img src={data.avatar_url} alt="avatar" className="w-24 h-24 rounded-full"/>
    </div>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/DATTAJI01')
  return response.json()
}
  