import React from "react";
import "./SmileButton.css";

class SmileButton extends React.Component{
constructor(props) {
  super(props)

  this.state = {
    smileDiv: false
  }
  
  this.ShowTheSmile = this.ShowTheSmile.bind(this)
  this.HideTheSmile = this.HideTheSmile.bind(this)
}
ShowTheSmile(){
    this.setState({
        smileDiv: true

    })
}
HideTheSmile(){
    this.setState({
        smileDiv: false
    })
}
  render(){
      const smileDiv = this.className.smileDiv
      if(smileDiv){
      return(
            <div className="smileDiv">
            <p>Smile :D</p>
            <button onClick={this.HideTheSmile}>I dont want Smile anymore</button>
            </div> )
  } else {
      return(
            <div>
            <button onClick={this.ShowTheSmile}>CLick to see the Smile</button>
            </div>
                )}
      }}
      
      


export default SmileButton;