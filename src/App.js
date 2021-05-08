import React, { useRef } from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Home } from "./components/home";
import { Topbar } from "./components/top-bar";
import { Services } from "./components/services";
import { Contact } from "./components/contact";

import Team from "./components/team";
import AboutUs from "./components/about-us";
import { BackTop } from "antd";
import { UpCircleOutlined } from "@ant-design/icons";

import './App.scss';

function App() {
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);

  const style = {
    height: 40,
    width: 40,
    lineHeight: "40px",
    borderRadius: 4,
    backgroundColor: "red",
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    opacity:0.7,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <div className="main-container">
      <Router>
        <Topbar
          aboutUsRef={aboutUsRef}
          servicesRef={servicesRef}
          teamRef={teamRef}
          contactRef={contactRef}
        />
      
          <Home />
      
        <div ref={aboutUsRef}>
          <AboutUs />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
     

        <div ref={teamRef}>
          <Team />
        </div>

        <div ref={contactRef}>
          <Contact />
        </div>
        <BackTop>
          <div style={style}><UpCircleOutlined /> </div>
        </BackTop>

       
      </Router>
    </div>
  );
}

export default App;
