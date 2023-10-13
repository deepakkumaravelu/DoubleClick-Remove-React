import { useState } from "react"



const DoubleClickRemove = () => {
    const arr=[{nam:"hi"},{nam:"hello"},{nam:"vanakaam"}]
  return (
    <div>
    
    <ul>
    {arr.map((val)=>{
<li>{val.nam}</li>
    })}
    <li>hello</li>
    </ul>
    
    </div>
  )
}