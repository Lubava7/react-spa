import React from 'react';
import './Buttons.css'

// Ниже у меня функциональный компонент:
// const Buttons = (props) => {
//     return(
//         <div>
//         <h1>{props.title}</h1>
//         <button>{props.text}</button>
//         </div>
//     )
//   };



// Ниже будет классовый компонент(СДелать также стрелочную функцию)


class Buttons extends React.Component{
    render(){
        return(
            <div>
            <h1>{this.props.title}</h1>
            <button>{this.props.text}</button>
            </div>
        )
    }
}
 

  export default Buttons;
  
