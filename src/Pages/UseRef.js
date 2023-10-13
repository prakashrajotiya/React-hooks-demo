import React, { useRef } from 'react'

const UseRef = () => {
    const userName = useRef("")
    console.log(userName.current)
    function clickHandler(){
        console.log(userName.current.value)
    }
  return (
    <div className='page'>
        <div>            
            <input placeholder='Enter User Name' ref={userName}/>
            <button onClick={clickHandler}>Submit</button>
        </div>
    </div>
  )
}

export default UseRef