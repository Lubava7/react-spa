import React from "react";
import "./SmileButton.css";

class SmileButton extends React.Component{
constructor(props) {
  super(props)

  this.state = {
    smileDiv: false
  }
  
  this.showTheSmile = this.showTheSmile.bind(this)
  this.hideTheSmile = this.hideTheSmile.bind(this)
  
}
showTheSmile(){
    this.setState({
        smileDiv: true

    })
}
hideTheSmile(){
    this.setState({
        smileDiv: false
    })
}

  render(){
    const smileDiv = this.state.smileDiv
      if(smileDiv){
      return(
            <div className="smileDiv">
            <p>Smile :D</p>
            <button onClick={this.hideTheSmile}>I dont want Smile anymore</button>
            </div> )
  } else {
      return(
            <div>
            <button onClick={this.showTheSmile}>CLick to see the Smile</button>
            </div>
                )}
      }}
      
      


export default SmileButton;