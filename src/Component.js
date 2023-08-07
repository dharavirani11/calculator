import { useState } from "react";

function Component(){
    const [val,setval] = useState('')
    const [val1,setval2] = useState('')
    const btnhandler = ()=>{
        
        setval('good morning')
        setval('hello')
    }

    return(
        <div>
            <button onClick={btnhandler}>Click here </button>
            <h2>{val}</h2>
            <button onClick={btnhandler}>Click me</button>
            <h4>{val1}</h4>
            <input type='text' onChange={(y)=>{setval(y.target.value)}}></input>
            <input type='text' onChange={(y)=>{setval2(y.target.value)}}></input>
        </div>
    )
}
export default Component