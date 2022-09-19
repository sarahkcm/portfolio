import React, { Component } from "react";
import "./Resume.css";
import CVResume from "../../assets/CV-EN.pdf";
import MyPhoto from "../../assets/picture1.jpg";
import {FaGraduationCap} from "react-icons/fa";
import Skills from "../Skills/Skills";


const onButtonClick = () => {
  fetch(CVResume).then((response) => {
    response.blob().then((blob) => {
      const fileUrl = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileUrl;
      alink.download = "CV-Sarah-KCM.pdf";
      alink.click();
    });
  });
};

class Resume extends Component {
  render() {
    return (
      <div className='resume'>
        <div className='left'>
          <h1 className="name">Kacem Sarah</h1>
          <div className='photo' style={{ display: "flex" }}>
            <img src={MyPhoto} alt='MyPhoto' />
          </div>
          <p>
            <strong>
              <small>FullStack Javascript Developer</small>
            </strong>
          </p>
          <p>
            Without requirements or design, programming is the art of adding
            bugs to an empty text file.
          </p>
          <button className='btn' onClick={onButtonClick}>
            Download CV
          </button>
          <h2 className='education'>
            <strong>Education</strong>
          </h2>
          <div className='wrapper'>
          <FaGraduationCap size={20} style={{ color: "#fff", padding: 0, margin: 1, opacity:'40%'}} />
            <span>
              Fundamental License in Product Design at Fine Arts of Tunis(ISBAT)
            </span>
            <p>
              <small>2020-2021</small>
            </p>
          </div>
          <div className='wrapper'>
          <FaGraduationCap size={20} style={{ color: "#fff", padding: 0, margin: 1, opacity:'40%'}} />
            <span>FullStack Javascript Developer ReBootKamp (RBK) Tunis</span>
            <p>
              <small>2021-2022</small>
            </p>
          </div>
          <div className='wrapper'>
          <FaGraduationCap size={20} style={{ color: "#fff", padding: 0, margin: 1, opacity:'40%'}} />
            <span>Learning AWS/Restart Cloud Practitioner</span>
            <p>
              <small>2022-2022</small>
            </p>
          </div>
          <Skills />
        </div>
      </div>
    );
  }
}

export default Resume;
