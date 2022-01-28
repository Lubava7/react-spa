import React from 'react';
import './Buttons.css'


const Buttons = (props) => {
    return(
        <div>
        <h1>{props.title}</h1>
        <button>{props.text}</button>
        </div>
    )
  };
 

  export default Buttons;
  
