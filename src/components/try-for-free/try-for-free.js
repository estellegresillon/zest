import React from "react";
import { Waypoint } from 'react-waypoint';

import "./try-for-free.scss";

const TryForFree = () => {
  const handleWaypointEnter = (div) => {
    const el = document.querySelector(div);
    el.classList.add("transition-on");
  }

  const handleWaypointLeave = (div) => {
    const el = document.querySelector(div);
    el.classList.remove("transition-on");
  }

  return (
    <section id="try-for-free" className="try-for-free">
      <Waypoint
        onEnter={() => handleWaypointEnter(".try-for-free-title")}
        onLeave={() => handleWaypointLeave(".try-for-free-title")}
      >
        <h2 className="try-for-free-title">
          Try <span className="green-text">Zest</span> for <span className="green-text">free.</span>
        </h2>
      </Waypoint>

      <Waypoint
        onEnter={() => handleWaypointEnter(".try-for-free-conclusion")}
        onLeave={() => handleWaypointLeave(".try-for-free-conclusion")}
      >
        <div className="conclusion try-for-free-conclusion">
          <p>
            The peace of mind is in the palm of your hand.
            Download our free app and open your new account in an easy, paperless signup process.
          </p>
        </div>
      </Waypoint>

      <div className="links-to-stores">
        <div className="btn-store">
          <img src="apple-logo.svg" alt="apple-logo" />
          <p>Soon on the Apple Store</p>
        </div>

        <div className="btn-store">
          <img src="play-store-logo.svg" alt="apple-logo" />
          <p>Soon on the Play Store</p>
        </div>
      </div>

      <p className="covered">We've got you covered.</p>

      <img className="background-circle-bottom" src="curve-1.svg" alt="background-circle" />
      <img className="background-circle-top" src="curve-1.svg" alt="background-circle" />
      <div className="dot green-dot-right" />
      <div className="dot green-dot-left" />
      <div className="dot green-dot-bottom" />
      <div className="dot grey-dot-right" />
      <div className="dot grey-dot-left" />
    </section>
  );
};

export default TryForFree;
