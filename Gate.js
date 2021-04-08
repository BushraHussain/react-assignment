import react, {useState} from 'react';


function Gate(props){
        

   const [state, setState] = useState(props.active) ;

    return(
        <div>   
            <h1>Gate Component</h1>     
            {state == false? <p>Gate is Closed</p> : <p>Gate is Open</p>}
            <button onClick={()=> setState(!state)}>  Change </button>
            <p>----------------------------------------------------------------------</p>
        </div>

    )

}

export default Gate;