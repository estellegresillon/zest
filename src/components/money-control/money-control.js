import React from "react";
import { Waypoint } from 'react-waypoint';

import { useWindowSize } from "../../hooks/useWindowSize";
import "./money-control.scss";
import "./money-control-mobile.scss";

const MoneyControl = () => {
  const windowSize = useWindowSize();
  
  const handleWaypointEnter = (div) => {
    const el = document.querySelector(div);
    el.classList.add("transition-on");
  }

  const handleWaypointLeave = (div) => {
    const el = document.querySelector(div);
    el.classList.remove("transition-on");
  }

  const renderPicture = () => (
    <div className="money-control-left">
      <Waypoint
        onEnter={() => handleWaypointEnter(".money-control-img")}
        onLeave={() => handleWaypointLeave(".money-control-img")}
      >
        <img className="money-control-img" src="money-control.svg" alt="money-control" />
      </Waypoint>
    </div>
  );
  
  const renderText = () => (
    <>
      <Waypoint
        onEnter={() => handleWaypointEnter(".money-control-right")}
        onLeave={() => handleWaypointLeave(".money-control-right")}
      >
        <div className="money-control-right">
          <h2>Total <span className="green-text">control</span><br /> over your <span className="green-text">money</span></h2>
  
          <div className="list-item">
            <div className="dot purple-dot-key" />
            <p>Overview of your finances</p>
          </div>
          <div className="list-item">
            <div className="dot purple-dot-key" />
            <p>Unlimited transactions history</p>
          </div>
          <div className="list-item">
            <div className="dot purple-dot-key" />
            <p>Get real time notifications</p>
          </div>
  
          <div className="conclusion">
            <p>
              With Zest, banking, bookkeeping 
              and invoicing are all in one place. 
              You’ll always know where you stand.
            </p>
          </div>
        </div>
      </Waypoint>
    </>
  );
  
  const renderBackground = () => (
    <>
      <div className="dot green-dot-left" />
      <div className="dot green-dot-right" />
      <div className="dot grey-dot-left" />
      <div className="dot grey-dot-center" />
      <div className="dot grey-dot-bottom" />
      <img className="background-circle-bottom" src="curve-1.svg" alt="background-circle" />
      <img className="trapeze" src="trapeze-money-control.svg" alt="bg-trapeze" />
    </>
  );

  return windowSize.width > 728 ? (
    <section className="money-control">
      {renderPicture()}
      {renderText()}
      {renderBackground()}
    </section>
  ) : (
    <section className="money-control">
      {renderText()}
      {renderPicture()}
      {renderBackground()}
    </section>
  )
};

export default MoneyControl;

