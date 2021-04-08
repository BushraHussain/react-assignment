import React from 'react';
import ReactDOM from 'react-dom';
import MediaCard from './MediaCard';
import Gate from './Gate';
import Counter from './Counter';
import ShowPicture from './ShowPicture';
import Reddit from './Reddit';
import Test from './Test';


ReactDOM.render(
    <div>
      <Reddit/>
      <Test/>

      <ShowPicture image1="https://www.w3schools.com/html/pic_trulli.jpg"/>

     <Counter initialVal={0}/>

      <MediaCard
        title = "Hat Girl"
        cardNumber={1}
        Description ="Media card 1 representing hat girl"
        image = "https://www.w3schools.com/html/img_girl.jpg"
        alt ="hat girl"
      />   

      <Gate active={false}/>

      <MediaCard
        title = "Trulli"
        cardNumber={2}
        Description ="Media card 2 representing trulli picture"
        image = "https://www.w3schools.com/html/pic_trulli.jpg"
        alt = "trulli picture"
      /> 


    
    </div>,

  document.getElementById('root')
);


