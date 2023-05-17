import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState([])
    const [pending,setPending] = useState(true)

 const getData = async (url) => {
  const res = await fetch(url)
     const data = await res.json()
     setData(data)
     setPending(false)
    }
      
    useEffect(() => {
       getData(url)
    }, [])

    return[data,pending]
}
