
import React ,{useState} from 'react';

function Counter(props){
    
    let [number, setNumber] =  useState(props.initialVal);
    

    return(
        <div>
            <h1>Counter Component</h1>
            <h3>Number : {number}</h3>
            <button onClick={()=>setNumber(++number)}>Increment</button> 
            <button onClick={()=>setNumber(--number)}>Decrement</button>
            <p>----------------------------------------------------------------</p>
        </div>


    )
}

export default Counter;