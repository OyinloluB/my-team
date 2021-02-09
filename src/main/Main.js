import React from "react";
import { Route } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Home from "../pages/Home";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  );
};

export default Main;
