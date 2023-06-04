import React from 'react';


const ProgressBar = ({ label, percentage }) => {
  const progressBarStyle = {
    width: `${percentage}%`,

  };

  const circleStyle = {
    left: `calc(${percentage}% - 50px)`,
  };

  return (
    <>
    <div className="progress-bar-wrapper">
      <div className="row">
        <div className="col">
          <div className="progress-bar-label">{label}</div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="progress">
            <div className="progress-bar" style={progressBarStyle}></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="progress-bar-circle" style={circleStyle}>
            <span>{percentage}%</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProgressBar;
