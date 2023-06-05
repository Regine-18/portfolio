import React from 'react';
import { SiHtml5, SiAdobe, SiBootstrap, SiCss3, SiJavascript, SiReact } from 'react-icons/si';

const Skills = () => {
  const getIconSize = () => {
    if (window.innerWidth <= 768) {
      return {
        htmlSize: 30,
        cssSize: 20,
        jsSize: 25,
        reactSize: 35,
      };
    } else {
      return {
        htmlSize: 60,
        cssSize: 50,
        jsSize: 55,
        reactSize: 70,
      };
    }
  };

  const { htmlSize, cssSize, jsSize, reactSize } = getIconSize();

  const handleIconClick = (event) => {
    event.stopPropagation(); // Stop the event propagation to prevent opening the navbar toggle
  };

  return (
    <div className='container-fluid p-5 bg-light d-flex justify-content-center'>
      <div className="row p-2">
        <div className="col-lg-6 d-flex justify-content-center">
          <div className="icon-container">
            <SiHtml5 size={htmlSize} color="orange" className="icon" onClick={handleIconClick} />
          </div>
          <div className="icon-container">
            <SiCss3 size={cssSize} color="blue" className="icon" onClick={handleIconClick} />
          </div>
          <div className="icon-container">
            <SiJavascript size={jsSize} color="#F0DB4F" className="icon" onClick={handleIconClick} />
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center">
          <div className="icon-container">
            <SiReact size={reactSize} color="#61DBF5" className="icon" onClick={handleIconClick} />
          </div>
          <div className="icon-container">
            <SiBootstrap size={reactSize} color="blue" className="icon" onClick={handleIconClick} />
          </div>
          <div className="icon-container">
            <SiAdobe size={reactSize} color="#FF0000" className="icon" onClick={handleIconClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
