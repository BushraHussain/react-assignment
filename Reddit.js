import React,{useState, useEffect} from 'react';
import axios from 'axios';



function Reddit(){

    let [data,setData] = useState([]); 

    useEffect( ()=>{

        axios.get("https://www.reddit.com/r/reactjs.json").then( (res)=>{
            const NewData = res.data.data.children.map(obj=>obj.data);
            setData(NewData);
        }

        );


    }, []);


    return(
        <div>
            <h1>Data fetching Using Reddit API</h1>
            <ul>

                { data.map(data=> (
                    <li key={data.id}>      
                     <p> Title :   {data.title} </p> 
                     <p> Author : {data.author} </p>     
                    </li>
                ))
                }

            </ul>
            <p>------------------------------------------------------</p>
        </div>
    )



}






export default Reddit;