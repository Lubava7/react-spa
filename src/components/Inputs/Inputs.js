import React from 'react'
import './Inputs.css'

// ВАРИАНТ 1
// сделай короче компонент - в нем два инпута и кнопка
// когда ты вводишь значение в каждый инпут
// когда вводишь в первый у тебя сохранется в стейт numberOne, 
// когда во второй у тебя сохранется в стейт numberTwo,
// когда ты кликаешь на кнопку у тебя суммируются this.state.numberOne 
// и this.state.numberTwo и результат этого ты кладешь в стейт как result
// в рендере под всем этим после клика должен быть вывод this.state.result
// чтобы не было ошибок тебе нужно убедиться что this.state.result 
// существует, когда в рендере под него jsx будешь писать, иначе может быть ошибка 

// ВАИАНТ 2, КОТОРЫЙ Я БУДУ ДЕЛАТЬ В ЭТОМ ФАЙЛЕ:
// Должно быть 2 инпута и кнопка
// Когда кликаешь кнопку инпуты с кнопкой пропадают,
// появляется надпись 'Сумма этих чисел то-то то-то' 
// и кнопка - повторить счёт? при клике на которую все 
// возвращается к начальному состоянию и снова 2 инпута и кнопка

class Inputs extends React.Component{
    constructor(props) {
        super(props)
      
        this.state = {
            result: 0,
            value: 0
           
        }
        this.add = this.add.bind(this);
        this.num = this.num.bind(this);
        this.numnum = this.numnum.bind(this);
    }

        add(){
            this.setState({
                result: +this.state.numOne + +this.state.numTwo
               
            })
        }
        num(event){
            this.setState({
                numOne: event.target.value
               
            })
        }
        numnum(event){
            this.setState({
                numTwo: event.target.value
            })
        }

      render(){
          return(
              <div>
                  <h1>Sum of two numbers is {this.state.result}</h1>
                  <input placeholder='enter a number' onChange={this.num} value={this.state.numOne}></input>
                  <input placeholder='enter a number' onChange={this.numnum} value={this.state.numTwo}></input>
                  <button onClick={this.add}>click to add numbers</button>
              </div>
          )
      }
}





export default Inputs;