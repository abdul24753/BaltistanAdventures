import React, { useEffect, useRef, useState } from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Home } from "./components/home";
import { Topbar } from "./components/top-bar";
import { Services } from "./components/services";
import { Contact } from "./components/contact";
import {Gallery} from './components/galley'

import Team from "./components/team";
import AboutUs from "./components/about-us";
import { BackTop } from "antd";
import { UpCircleOutlined } from "@ant-design/icons";

import "./App.scss";
import Main from "./components/main";

function App() {
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);
  const galleryRef = useRef(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 8000);
  }, []);

  const renderLoader = () => {
    return (
      <div class="loadingContainer">
        <div class="ball1"></div>
        <div class="ball2"></div>
        <div class="ball3"></div>
        <div class="ball4"></div>
      </div>
    );
  };

  const style = {
    height: 40,
    width: 40,
    lineHeight: "40px",
    borderRadius: 4,
    backgroundColor: "rgb(240,205,47)",
    color: "white",
    textAlign: "center",
    fontSize: 14,
    opacity: 0.7,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div className="main-container">
      {loading && renderLoader()}
     {<div style={!loading ? {height: '0px'}: {}}>
        <Router>
          <Topbar
            aboutUsRef={aboutUsRef}
            servicesRef={servicesRef}
            teamRef={teamRef}
            contactRef={contactRef}
          />
          <Main />
          {/* <Home /> */}
          <div ref={aboutUsRef}>
            <AboutUs />
          </div>
          <div ref={servicesRef}>
            <Services />
          </div>
          <div ref={galleryRef}>
            <Gallery />
          </div>

          <div ref={teamRef}>
            <Team />
          </div>

          <div ref={contactRef}>
            <Contact />
          </div>
          <BackTop>
            <div style={style}>
              <UpCircleOutlined />{" "}
            </div>
          </BackTop>
        </Router>
        </div>}
      
    </div>
  );
}

export default App;
