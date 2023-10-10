import React from 'react'



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

export default DoubleClickRemove