import React from "react";

import "./header.scss";

export default () =>
  <header>
    <div className="section-left">
      <img src="logo-zest.svg" alt="zest-logo" />
    </div>

    <div className="section-right">
      <div className="menu-item">
        Benefits
      </div>

      <div className="menu-item">
        Pricing
      </div>

      <div className="btn btn-rounded">
        Start for free
      </div>
    </div>
  </header>
  