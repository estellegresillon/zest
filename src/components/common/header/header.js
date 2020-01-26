import React from "react";

import "./header.scss";

const Header = () => {
  const goToSection = (div) => {
    const section = document.querySelector(div);
    section.scrollIntoView();
  }

  return (
    <header>
      <div className="section-left">
        <img src="logo-zest.svg" alt="zest-logo" />
      </div>

      <div className="section-right">
        <div onClick={() => goToSection(".money-control")} className="menu-item">
          BENEFITS
        </div>
        <div className="btn btn-rounded" onClick={() => goToSection(".try-for-free")}>
          Start for free
        </div>
      </div>
    </header>
  );
};

export default Header;

  