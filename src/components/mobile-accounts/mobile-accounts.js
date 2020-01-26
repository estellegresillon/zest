import React from "react";
import { Waypoint } from 'react-waypoint';

import "./mobile-accounts.scss";
import "./mobile-accounts-mobile.scss";

const MobileAccounts = () => {
  const handleWaypointEnter = (div) => {
    const el = document.querySelector(div);
    el.classList.add("transition-on");
  }

  const handleWaypointLeave = (div) => {
    const el = document.querySelector(div);
    el.classList.remove("transition-on");
  }

  return (
    <section className="mobile-accounts">
      <div className="top-section">
        <Waypoint
          onEnter={() => handleWaypointEnter(".mobile-accounts-top-left")}
          onLeave={() => handleWaypointLeave(".mobile-accounts-top-left")}
        >
          <div className="left-column mobile-accounts-top-left">
            <img src="wire-money.svg" alt="wire-money" />
            <p className="title">Wire money as you wish</p>
            <p>Anywhere. Anytime. In 18 foreign currencies by benefiting from the lowest, real-time exchange rates.</p>
          </div>
        </Waypoint>

        <Waypoint
          onEnter={() => handleWaypointEnter(".mobile-accounts-top-right")}
          onLeave={() => handleWaypointLeave(".mobile-accounts-top-right")}
        >
          <div className="right-column mobile-accounts-top-right">
            <h2><span className="green-text">Mobile accounts</span> without boundaries</h2>
            <p className="intro">Zest also specializes in multi-currency accounts. Wire money everywhere in seconds and travel carefree.</p>
          </div>
        </Waypoint>
      </div>

      <div className="bottom-section">
        <Waypoint
          onEnter={() => handleWaypointEnter(".mobile-accounts-bottom-left")}
          onLeave={() => handleWaypointLeave(".mobile-accounts-bottom-left")}
        >
          <div className="left-column mobile-accounts-bottom-left">
            <img src="fast-transfer.svg" alt="fast-transfer" />
            <p className="title">Fast bank transfers</p>
            <p>Transfers between Zest accounts are free, unlimited and instant !</p>
          </div>
        </Waypoint>

        <Waypoint
          onEnter={() => handleWaypointEnter(".mobile-accounts-bottom-right")}
          onLeave={() => handleWaypointLeave(".mobile-accounts-bottom-right")}
        >
          <div className="right-column mobile-accounts-bottom-right">
            <img src="travel-carefree.svg" alt="travel-carefree" />
            <p className="title">Travel carefree</p>
            <p>Always get the real exchange rate and save up to 3% on your next travel. Enjoy the best global acceptance.</p>
          </div>
        </Waypoint>
      </div>

      <img className="background-dots-left" src="medium-dots.svg" alt="background-dots" />
      <img className="background-dots-right" src="medium-dots.svg" alt="background-dots" />
      <img className="background-circle-bottom" src="curve-1.svg" alt="background-circle" />
      <div className="dot green-dot-right" />
      <div className="dot grey-dot-left" />
      <div className="dot grey-dot-top" />
    </section>
  );
};

export default MobileAccounts;
