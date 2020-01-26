import React from "react";
import { Waypoint } from 'react-waypoint';

import "./multilingual.scss";
import "./multilingual-mobile.scss";

const Multilingual = () => {
  const handleWaypointEnter = (div) => {
    const el = document.querySelector(div);
    el.classList.add("transition-on");
  }

  const handleWaypointLeave = (div) => {
    const el = document.querySelector(div);
    el.classList.remove("transition-on");
  }

  return (
    <section className="multilingual">
      <Waypoint
        onEnter={() => handleWaypointEnter(".multilingual-left")}
        onLeave={() => handleWaypointLeave(".multilingual-left")}
      >
        <div className="multilingual-left">
          <h2><span className="green-text">We are here for you</span> in 5 languages</h2>

          <div className="conclusion">
            <p>
              Our Zest Support team is here to help you in 5 languages - English, Spanish, French, Portuguese and German. Send us a message anytime.
            </p>
          </div>
        </div>
      </Waypoint>

      <div className="multilingual-right">
        <Waypoint
          onEnter={() => handleWaypointEnter(".multilingual-right-img")}
          onLeave={() => handleWaypointLeave(".multilingual-right-img")}
        >
          <img className="multilingual-right-img" src="support.svg" alt="multilingual" />
        </Waypoint>
      </div>

      <img className="background-dots" src="medium-dots.svg" alt="background-dots" />
      <img className="background-circle-top" src="curve-1.svg" alt="background-circle" />
      <div className="dot grey-dot-left" />
      <div className="dot green-dot-right" />
    </section>
  );
};

export default Multilingual;
