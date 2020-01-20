import React from "react";

import "./app.scss";
import Header from "./common/header";
import HeroScene from "./hero-scene";
import MoneyControl from "./money-control";
import Invoicing from "./invoicing";
import MobileAccounts from "./mobile-accounts";
import Multilingual from "./multilingual";
import TryForFree from "./try-for-free";
import Background from "./common/background";

const App = () => {
  return (
    <div className="Zest">
      <Header />
      <HeroScene />
      <MoneyControl />
      <Invoicing />
      <MobileAccounts />
      <Multilingual />
      <TryForFree />
      <Background />
    </div>
  );
}

export default App;
