import React from "react";
import { Route, useLocation } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Home from "../pages/Home";
import CtaFooter from "../components/layout/CtaFooter";
import Footer from "../components/layout/Footer";

const Main = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      {location.pathname === "/contact" ? "" : <CtaFooter />}

      <Footer />
    </div>
  );
};

export default Main;
