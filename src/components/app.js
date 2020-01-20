import React from "react";

import "./app.scss";
import Header from "./common/header";
import HeroScene from "./hero-scene";
import MoneyControl from "./money-control";
import Background from "./common/background";

const App = () => {
  return (
    <div className="Zest">
      <Header />
      <HeroScene />
      <MoneyControl />

      <section className="invoicing">
        Simplified invoicing and billing
        <img className="trapeze" src="trapeze-invoicing.svg" alt="bg-trapeze" />
      </section>

      <section className="mobile-accounts">
        Mobile accounts without boundaries
      </section>

      <section className="multilingual">
        We are here for you in 5 languages
      </section>

      <section className="try-for-free">
        Try Zest for free.
      </section>

      <Background />
    </div>
  );
}

export default App;
