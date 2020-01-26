import React from 'react';

import { useComponentVisible } from "../../../hooks/useComponentVisible";
import "./header-mobile.scss";

const HeaderMobile = () => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  const goToSection = (div) => {
    const section = document.querySelector(div);
    setIsComponentVisible(false);
    section.scrollIntoView();
  }

  return (
    <div className="header-mobile">
      <div className="section-left">
        <img src="logo-zest.svg" alt="zest-logo" />
      </div>
      <div className="section-right">
        <i className="fas fa-bars" onClick={() => setIsComponentVisible(true)} />
        {isComponentVisible &&
          <div ref={ref} className="dropdown-menu-mobile">
            <div className="navigation">
              <div onClick={() => goToSection(".money-control")} className="nav-item">
                BENEFITS
              </div>
              <div className="btn btn-rounded" onClick={() => goToSection(".try-for-free")}>
                Start for free
              </div>
            </div>
          </div>}
      </div>
    </div>
  );
};

export default HeaderMobile;
