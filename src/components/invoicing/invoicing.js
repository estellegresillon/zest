import React from "react";
import { Waypoint } from 'react-waypoint';

import "./invoicing.scss";

const Invoicing = () => {
  const handleWaypointEnter = (div) => {
    const el = document.querySelector(div);
    el.classList.add("transition-on");
  }

  const handleWaypointLeave = (div) => {
    const el = document.querySelector(div);
    el.classList.remove("transition-on");
  }

  return (
    <section className="invoicing">
      <Waypoint
        onEnter={() => handleWaypointEnter(".invoicing-left")}
        onLeave={() => handleWaypointLeave(".invoicing-left")}
      >
        <div className="invoicing-left">
          <h2>Simplified <span className="green-text">invoicing</span> and <span className="green-text">billing</span></h2>

          <div className="list-item">
            <div className="dot purple-dot-key" />
            <p>Create and pay invoices online</p>
          </div>
          <div className="list-item">
            <div className="dot purple-dot-key" />
            <p>Email your invoices</p>
          </div>
          <div className="list-item">
            <div className="dot purple-dot-key" />
            <p>Automatic reminders for clients</p>
          </div>

          <div className="conclusion">
            <p>
              From now on, get paid early. Easy invoicing through our mobile app anytime, anywhere.
            </p>
          </div>
        </div>
      </Waypoint>

      <div className="invoicing-right">
        <Waypoint
          onEnter={() => handleWaypointEnter(".invoicing-right-img")}
          onLeave={() => handleWaypointLeave(".invoicing-right-img")}
        >
          <img className="invoicing-right-img" src="invoicing.svg" alt="invoicing" />
        </Waypoint>
      </div>

      <img className="background-dots" src="medium-dots.svg" alt="background-dots" />
      <img className="background-circle-bottom" src="curve-1.svg" alt="background-circle" />
      <img className="background-circle-top" src="curve-1.svg" alt="background-circle" />
      <div className="dot green-dot-left" />
      <div className="dot green-dot-center" />
      <div className="dot green-dot-right" />
      <div className="dot green-dot-bottom" />
      <div className="dot grey-dot-left" />
      <div className="dot grey-dot-right" />
      <img className="trapeze" src="trapeze-invoicing.svg" alt="bg-trapeze" />
    </section>
  );
};

export default Invoicing;
