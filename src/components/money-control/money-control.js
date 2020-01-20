import React from "react";
import { Waypoint } from 'react-waypoint';

import "./money-control.scss";

const MoneyControl = () => {
  const handleWaypointEnter = (div) => {
    const el = document.querySelector(div);
    el.classList.add("transition-on");
  }

  const handleWaypointLeave = (div) => {
    const el = document.querySelector(div);
    el.classList.remove("transition-on");
  }

  return (
    <section className="money-control">
      <div className="money-control-left">
        <Waypoint
          onEnter={() => handleWaypointEnter(".money-control-img")}
          onLeave={() => handleWaypointLeave(".money-control-img")}
        >
         <img className="money-control-img" src="money-control.svg" alt="money-control" />
        </Waypoint>
      </div>

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

      <div className="dot green-dot-left" />
      <div className="dot green-dot-right" />
      <div className="dot grey-dot-left" />
      <div className="dot grey-dot-center" />
      <div className="dot grey-dot-bottom" />
      <img className="background-circle-bottom" src="curve-1.svg" alt="background-circle" />
      <img className="trapeze" src="trapeze-money-control.svg" alt="bg-trapeze" />
    </section>
  );
};

export default MoneyControl;

