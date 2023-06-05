
import { useState } from "react";

function  Counter( props){
    let [state,setState]=useState(0)
    var countervalue=0;
    const ince = () =>{
        setState(state+1)
         console.log(state)
    };
    const dec = () =>{
        setState(state-1)
         console.log(state)
    };
    const[text,setText]=useState("")
    return (
        <div>
            <h1>count value is {state}</h1>
            <input type="text" 
            onChange={(event)=>setText(event.target.value)}
            placeholder="enter a text "/>
           <p>{text}</p>
            <button onClick={ince}>increse</button>
            <button onClick={dec}>decre</button>
        </div>
    );
}
export default Counter;