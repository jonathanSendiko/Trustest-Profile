import React, { useEffect } from "react";

const WebGazerTrial = () => {
  const webgazer = window.webgazer;
  useEffect(() => {
    webgazer
      .setGazeListener((data, clock) => {
        console.log(data);
      })
      .begin();
  }, [webgazer]);
  return (
    <div className="webgazer" style={{ paddingTop: "20em" }}>
      <h1>Hello World</h1>
      <button
        onClick={() => {
          webgazer.pause();
        }}
      >
        Stop
      </button>
      <button
        onClick={() => {
          webgazer.resume();
        }}
      >
        resume
      </button>
    </div>
  );
};

export default WebGazerTrial;