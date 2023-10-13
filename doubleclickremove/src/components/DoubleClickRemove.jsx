import { useState } from "react"


export default function DoubleClick(){
    const array=[{id:0,name:"Leo"},{id:1,name:"Vikram"},{id:2,name:"Kaithi"},{id:3,name:"Rolex"}];
    const [item,setitem]=useState(array);
    return(
        <div>
            <h1>Click to delete</h1>
            <ul class="lists">
                {item.map(it=><li onClick={()=>{it.id=it.id+1; setitem(item.filter(f=>(f.id!==2)))}} >
                         
                    {it.name}<br></br><p>Count:{it.id}</p></li>)}
            </ul>

        </div>
    )
}