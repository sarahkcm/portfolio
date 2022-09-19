import React from "react";
import "./Slide.css";
import IntroImg from "../../assets/logo1.jpg";
import { Link } from "react-router-dom";

const Slide = () => {
  return (
    <div className='Slide'>
      <div className='mask'>
        <img className='intro-img' src={IntroImg} alt='IntroImg' />
      </div>
      <div className='content'>
        <h1>Hello I'm a fullStack Javascript Developer</h1>
        <div>
          <Link to='/Projects' className='btn'>
            Projects{" "}
          </Link>
          <Link to='/Contact' className='btn btn-light'>
            Contact{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
