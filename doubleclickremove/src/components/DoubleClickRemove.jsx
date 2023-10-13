import { useState } from "react"


export default function DoubleClick(){
    const array=[{id:0,name:"Leo"},{id:0,name:"Vikram"},{id:0,name:"Kaithi"},{id:0,name:"Rolex"}];
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