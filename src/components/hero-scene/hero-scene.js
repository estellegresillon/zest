import React from "react";

import "./hero-scene.scss";
import "./hero-scene-mobile.scss";

const HeroScene = () => {
  const goToSection = (div) => {
    const section = document.getElementById(div);
    section.scrollIntoView();
  }

  return (
    <section className="hero-scene">
      <div className="hero-scene-left">
        <h1>Smart <span className="green-text">banking</span> for <span className="green-text">freelances</span></h1>
        <p>Zest is a revolutionnary mobile bank. Built to help you manage your business easily, save you time and money.</p>
        <div onClick={() => goToSection("try-for-free")} className="btn btn-squared">
          <img src="button-arrow.svg" alt="button-arrow" />
        </div>
      </div>

      <div className="hero-scene-right">
        <img src='iphone-stats.svg' alt="mobile-statistics" />
      </div>

      <img className="background-dots" src="dots-hero-group.svg" alt="background-dots" />
      <img className="background-circle-top" src="curve-1.svg" alt="background-circle" />
      <img className="background-circle-bottom" src="curve-1.svg" alt="background-circle" />
      <div className="dot grey-dot-center" />
      <div className="dot grey-dot-right" />
      <div className="dot purple-dot-top" />
      <div className="dot purple-dot-bottom" />
      <div className="dot green-dot-left" />
      <div className="dot green-dot-right" />
    </section>
  );
};

export default HeroScene;
  