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
// class Buttons extends React.Component{
//     render(){
//         return(
//             <div>
//             <h1>{this.props.title}</h1>
//             <button>{this.props.text}</button>
//             </div>
//         )
//     }
// }




// Ниже буде компонент по заданию:
// 1) добавить конструктор класса (ничего особенного, в примерах найдешь легко 
// просто штука которая нужна чтобы у классового компонента появился state)
//  с начальным значением count равным нулю 

// 2) Подключить к кнопке функцию с помощью onClick 
// (<button onClick={туттвояфункция}/>

// 3) В этой функции сделать так чтобы каждый раз к текущему state.count 
// прибавлялась единица (с помощью метода this.setState()

// 4) Ну и все это дело отображать в самом рендере, какой нибудь текст 
// и цифра показывающая кол-во кликов



class Buttons extends React.Component{
   constructor(props){
       super(props);
       this.state = {count:0};
   }
   plusone=()=>{
       this.setState(state => ({
           count: this.state.count +1
       })
        )
   }
    render(){
        
        return(
            <div>
            <h1>{this.props.title}</h1> 
            <button onClick={this.plusone}>{this.props.text}</button>
            <h1>Oh! u click me {this.state.count} times, very cool!</h1>
            </div>
        )
    }
}
export default Buttons;
