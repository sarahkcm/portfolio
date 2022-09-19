import React, { Component } from "react";
import "./Slide2.css";

class Slide2 extends Component {
  render() {
    return(
    <div className='slideProject'>
    <div className='heading'>
      <h1>{this.props.heading}</h1>
      <p>{this.props.text}</p>
    </div>
  </div>
  )
    
  }
}

export default Slide2;
