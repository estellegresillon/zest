import React from "react";

import "./hero-scene.scss";

export default () =>
  <section className="hero-scene">
    <div className="hero-scene-left">
      <h1>Smart <span className="green-text">banking</span> for <span className="green-text">freelances</span></h1>
      <p>Zest is a revolutionnary mobile bank. Built to help you manage your business easily, save you time and money.</p>
      <div className="btn btn-squared">
        <img src="button-arrow.svg" alt="button-arrow" />
      </div>
    </div>

    <div className="hero-scene-right">
      <img src='iphone-stats.svg' alt="mobile-statistics" />
    </div>

    <img className="background-dots fade-in" src="dots-hero-group.svg" alt="background-dots" />
    <img className="background-circle-top fade-in" src="curve-1.svg" alt="background-circle" />
    <img className="background-circle-bottom fade-in" src="curve-1.svg" alt="background-circle" />
    <div className="dot grey-dot-center fade-in" />
    <div className="dot grey-dot-right fade-in" />
    <div className="dot purple-dot-top fade-in" />
    <div className="dot purple-dot-bottom fade-in" />
    <div className="dot green-dot-left fade-in" />
    <div className="dot green-dot-right fade-in" />
  </section>