import React from "react";
import { Link } from "react-router-dom";
import "./AboutContent.css";
import ShopIumProject1 from "../../assets/shopIum1.jpg";
import ShopIumProject2 from "../../assets/shopIum2.jpg";

const AboutContent = () => {
  return (
    <div className='about'>
      <div className='left'>
        <h1>Who I'm ?</h1>
        <p>
          FullStack Javascript Developer. I create responsive secure websites.
        </p>
        <Link to='/Contact'>
          <button className='btn'>Contact</button>
        </Link>
      </div>
      <div className='right'>
        <div className='container-img'>
          <div className='img-stack top'>
            <img className="img" src={ShopIumProject1} alt={true} />
          </div>
          <div className='img-stack bottom'>
            <img className="img" src={ShopIumProject2} alt={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
