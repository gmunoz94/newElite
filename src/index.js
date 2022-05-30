/*!

=========================================================
* Material Kit PRO React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.9.0";

// pages for this product
import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.js";
import PresentationPage from "views/PresentationPage/PresentationPage.js";
import CarpetCleaning from "views/ProductPages/CarpetCleaning.js";
import TileAndGrout from "views/ProductPages/TileAndGrout.js";
import AreaRug from "views/ProductPages/AreaRug";
import PetStainOdor from "views/ProductPages/PetStainOdor";
import Upholstery from "views/ProductPages/Upholstery";
import CouponPage from "views/CouponsPage/CouponPage";
import FAQPage from "views/FAQPage/FAQPage";
import ServicePage from "views/ServicePage/ServicePage";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/contact-us" component={ContactUsPage} />
      <Route path="/carpet-cleaning" component={CarpetCleaning} />
      <Route path="/tile-grout" component={TileAndGrout} />
      <Route path="/upholstery" component={Upholstery} />
      <Route path="/area-rug" component={AreaRug} />
      <Route path="/pet-stain-odor" component={PetStainOdor} />
      <Route path="/other-services" component={ServicePage} />
      <Route path="/coupons" component={CouponPage} />
      <Route path="/FAQs" component={FAQPage} />
      <Route path="/" component={PresentationPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
