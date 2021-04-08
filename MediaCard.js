
function MediaCard(props){


    
    return(
      <div>
        <h1>Media Component</h1>
        <h1>{props.title}</h1>
        <h2>Card Number : {props.cardNumber}</h2>
        <p>{props.Description}</p>
        <img src={props.image} alt = {props.alt} />
        <p>----------------------------------------------------------------</p>
      </div>
  
    )
  
  }

export default MediaCard;