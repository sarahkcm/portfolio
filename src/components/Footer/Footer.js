import React from "react";
import "./Footer.css";
import { FaHome, FaPhone, FaMailBulk,FaLinkedin, FaGithub, FaPhotoVideo } from "react-icons/fa";

const Footer = () => {
  
  return (
    <div className='footer'>
      <div className='container-footer'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>17 Street Taher Khemiri Khaznadar</p>
              <p>Bardo</p>
            </div>
          </div>
          <div className='phonenbr'>
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +216 54 291 648
            </h4>
          </div>
          <div className='email'>
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              7_sarah@live.fr
            </h4>
          </div>
        </div>
        <div className='right'>
          <h4>About Me</h4>
          <p>
            I’m a fullstack javascript devoloper, also i’m a great communicator,
            dynamic and problem solving person. throught my experience i’d
            worked on a lot of projects that made me technically confident, but
            i still aiming to learn more and that's why i’m looking to develop
            my knowledge skills.
          </p>
          <div className="Social">
                <FaLinkedin size={30} className='Linkedin' 
                style={{ color: "#fff", marginRight: "2rem" }} onClick={()=>window.open('https://www.linkedin.com/in/sarah-kacem-abab541a1/')} />
                <FaGithub size={30} className='Github' 
                style={{ color: "#fff", marginRight: "2rem" }} onClick={()=>window.open('https://github.com/sarahkcm')} />
                <FaPhotoVideo size={30} className='Portfolio'
                style={{ color: "#fff", marginRight: "2rem" }} onClick={()=>window.open('https://sites.google.com/view/kacem-sarah')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
