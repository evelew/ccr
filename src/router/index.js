import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Splash from "./../pages/splash";
import Onboarding01 from "./../pages/onboarding01";
import Onboarding02 from "./../pages/onboarding02";
import Onboarding03 from "./../pages/onboarding03";
import Signup from "./../pages/signup";
import ChooseInterests from "../pages/choose-interests";
import TellYourHistory from "../pages/tell-your-history";
import Tribes from "../pages/tribes";
import YourTribe from "../pages/your-tribe";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/onboarding-01">
          <Onboarding01 />
        </Route>
        <Route path="/onboarding-02">
          <Onboarding02 />
        </Route>
        <Route path="/onboarding-03">
          <Onboarding03 />
        </Route>
        <Route path="/cadastrar">
          <Signup />
        </Route>
        <Route path="/escolha-seus-interesses">
          <ChooseInterests />
        </Route>
        <Route path="/conte-sua-historia">
          <TellYourHistory />
        </Route>
        <Route path="/tribos">
          <Tribes />
        </Route>
        <Route path="/sua-tribo">
          <YourTribe />
        </Route>

        <Route path="/">
          <Splash />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
