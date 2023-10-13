import React, { useEffect } from 'react'

const UseEffect = () => {
    console.log("UseEffect component")
    useEffect(()=>{
        console.log("useEffect")
    },[])
  return (
    <div>UseEffect</div>
  )
}

export default UseEffect