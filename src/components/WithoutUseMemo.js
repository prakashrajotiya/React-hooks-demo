import React, { useEffect, useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";
const WithoutUseMemo = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setText(123456)
  },[])

//   const heavyOperation = useMemo(() => {
//     console.log("heavy operation")
//     return findNthPrime(text)
//   }, [text]);

  const heavyOperation = () => {
    console.log("doing heavy operation...")
    return findNthPrime(text)
  }; 

  function inputOnChange(e){
    setText(e.target.value);
  }
  console.log("render ...");

  return (
    
      <div className="col">
        <div>without useMemo</div>
      <div className={isDarkTheme?"box dark-theme":"box"}>
       <div> <button onClick={(e)=>setIsDarkTheme(!isDarkTheme)}>Toggle Theme</button></div>
       <br/>
       Find Nth Prime Number 
        <input
          type="number"
          value={text}
          onChange={inputOnChange}
        />
        <div >Result: {heavyOperation()}</div>
      </div>
      
    
    
    </div>
  );
};

export default WithoutUseMemo;
