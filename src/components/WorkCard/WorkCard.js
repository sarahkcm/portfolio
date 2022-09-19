import React, { useState } from "react";
import "./WorkCard.css";
import HoverVideoPlayer from "react-hover-video-player";

const WorkCard = (props) => {
  const [hover, setHover] = useState(false);
  const handleClick = () => {
    window.open(props.source);
  };
  return (
    <div className='container-work'>
      <div className='container-project'>
        <div
          className='card-project'
          onMouseEnter={(e) => setHover(true)}
          onMouseLeave={(e) => setHover(false)}
        >
          {hover ? (
            <HoverVideoPlayer
              videoSrc={props.video}
              pausedOverlay={
                <img
                  src='thumbnail-image.jpg'
                  alt=''
                  style={{
                    // Make the image expand to cover the video's dimensions
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              }
              loadingOverlay={
                <div className='loading-overlay'>
                  <div className='loading-spinner' />
                </div>
              }
            />
          ) : (
            <img src={props.sourceImg} alt='ParkyProject' />
          )}

          <h2 className='project-tit'>{props.title}</h2>
          <div className='detail-project'>
            <p>{props.text}</p>
            <h3 className="Tech">Technology</h3>
            <p>{props.technology}</p>
            <div className='button-project'>
              <button onClick={handleClick} className='btn'>
                Source
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
