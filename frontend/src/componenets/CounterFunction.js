import React,{useState} from "react";
function CounterFunction(){
    //no render simply return is here
    //reat hooks help to define the state functions
    //functions doesnt have constructors
let [number,setNumber] =useState(0)
function increment(){
    setNumber(++number)
}
    return(
        <div>
            <h3>Function component</h3>
            <h1>Counter ={number} </h1>
            <button onClick={e=>increment()}>Increment</button>
        </div>
    )
}
export default CounterFunction;