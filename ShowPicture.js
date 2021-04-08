import React, {useState} from 'react';


function ShowPicture(props){
    // props.initialPic

    let [pic, setPic] = useState(props.image1);

    return(
        <div>
            <h1>Change Picture Component</h1>
            <img src={pic}/><br/>
           
            <button onClick={()=>setPic("https://thumbor.forbes.com/thumbor/trim/512x602:5312x3303/fit-in/711x400/smart/https://specials-images.forbesimg.com/imageserve/5d35eb15f1176b0008974b5c/0x0.jpg")}>Change Picture </button>
            <p>----------------------------------------------------------------</p>
        </div>
    )

}

export default ShowPicture;

