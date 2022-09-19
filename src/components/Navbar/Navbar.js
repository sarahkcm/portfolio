import "./Navbar.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const ChangeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", ChangeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to='/'>
        <h1>Protfolio</h1>
      </Link>
      <ul className={click ? "navbar active" : "navbar"}>
        <li>
          <Link to='/'> Home </Link>
        </li>
        <li>
          <Link to='/Projects'> Project </Link>
        </li>{" "}
        <li>
          <Link to='/About'> About </Link>
        </li>{" "}
        <li>
          <Link to='/Contact'> Contact </Link>
        </li>
      </ul>
      <div className='icon-nav' onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
