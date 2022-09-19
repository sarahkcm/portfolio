import * as React from "react";
import "./Skills.css";
import TailwindLogo from "../../assets/tailwind-logo.jpg";
import ReactNativeLogo from "../../assets/react-native2-logo.png";
import MongoDbLogo from "../../assets/mongoDb2-logo.png";
import AngularLogo from "../../assets/angular-logo.jpg";
import FirebaseLogo from "../../assets/firebase-logo.jpg";
import BootstrapLogo from "../../assets/bootstrap-logo.png";
import HTMLLogo from "../../assets/html-logo.png";
import JSLogo from "../../assets/js-logo.png";
import TSLogo from "../../assets/TS-logo.png";
import MSqlLogo from "../../assets/msql-logo.png";
import MUILogo from "../../assets/MUI-logo.png";
import NodeLogo from "../../assets/nodejs-logo.png";
import FigmaLogo from "../../assets/figma1-logo.png";
import CSSLogo from "../../assets/css-logo.jpg";

const logos = [
    FirebaseLogo,
    MongoDbLogo,
    MSqlLogo,
    NodeLogo,
    ReactNativeLogo,
    AngularLogo,
    HTMLLogo,
    JSLogo,
    TSLogo,
    CSSLogo,
    TailwindLogo,
    FigmaLogo,
    BootstrapLogo,
    MUILogo,
];
const delay = 1800;

function Skills() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === logos.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div>
        <h2 className="Title-Skills">Skills</h2>
    <div className='slideshow'>
      <div
        className='slideshowSlider'
        style={{ transform: `translate3d(${-index * 70}%, 0, 0)` }}
      >
        {logos.map((element, index) => (
          <img className='slide' key={index} src={element} alt='' />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Skills;
