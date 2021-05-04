import React, { useRef } from "react";
import "antd/dist/antd.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "./components/home";
import { Topbar } from "./components/top-bar";
import { General } from "./components/general";
import { Services } from "./components/services";
import { Details } from "./components/details";
import { Contact } from "./components/contact";
// import { Prices } from "./components/prices";

import Team from "./components/team";
import AboutUs from "./components/about-us";
import { BackTop } from "antd";
import { CalculatorFilled, UpCircleOutlined } from "@ant-design/icons";

import './App.scss';

function App() {
  // const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  // const pricesRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);

  const style = {
    height: 40,
    width: 40,
    lineHeight: "40px",
    borderRadius: 4,
    backgroundColor: "#1088e9",
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <div className="main-container">
      <Router>
        <Topbar
          // homeRef={homeRef}
          aboutUsRef={aboutUsRef}
          servicesRef={servicesRef}
          teamRef={teamRef}
          // pricesRef={pricesRef}
          contactRef={contactRef}
        />
        {/* <div ref={homeRef}> */}
          <Home />
        {/* </div> */}
        <div ref={aboutUsRef}>
          <AboutUs />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
        {/* <div ref={pricesRef}>
          <Prices />
        </div> */}

        {/* <HowWeWork /> */}

        <div ref={teamRef}>
          <Team />
        </div>

        <div ref={contactRef}>
          <Contact />
        </div>
        <BackTop>
          <div style={style}><UpCircleOutlined /> </div>
        </BackTop>

        {/* <Switch>
         
          <Route path="/:category" component={General} exact />
          <Route path="/:category/details" component={Details} exact />
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;
