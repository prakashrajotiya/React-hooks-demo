import React,{useCallback, useState} from 'react'
import Child from '../components/Child'

const WithUseCallback = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [text, setText] = useState("");

    const heavyOperationFn = useCallback(()=>{
        console.log("heavy Opration...",text)
    },[text])
  return (
    <div className='col'>
        <div>With UseCallback Hook</div>
        <div className={isDarkTheme?"box dark-theme":"box"}>
        <div> <button onClick={(e)=>setIsDarkTheme(!isDarkTheme)}>Toggle Theme</button></div>
        <div> <input value={text} onChange={(e)=>setText(e.target.value)} ></input> </div>
            <Child clickHandler={heavyOperationFn}/>
        </div>
    </div>
  )
}

export default WithUseCallback