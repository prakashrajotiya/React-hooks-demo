import React from 'react'
import { memo } from 'react'
const Child = memo(({clickHandler}) => {
    console.log("child component render...")
  return (
    <div>Child Compoent<br/>
        <button onClick={clickHandler}> Button</button>
    </div>
  )
})

export default Child