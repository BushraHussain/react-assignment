import React, { useState, useEffect } from 'react';
import axios from 'axios';



function Test() {

    let [Data, setData] = useState([]);

    useEffect(() => {

        axios.get("https://api.covid19api.com/countries").then((res) => {

            const fetchedData = res.data;
            setData(fetchedData);

        }

        );




    }, []);



    return (
        <div>
            <h1>Data Fetching Using COVID API</h1>
            <ul>
                {Data.map(Data => (
                    <li key={Data.id}>
                        {Data.Country}
                    </li>
                ))
                }
            </ul>

                <p>------------------------------------------------------</p>
        </div>
    )



}






export default Test;