import React, { useEffect, useRef, useState } from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
// import { useLocation } from "react-router";

import { Topbar } from "./components/top-bar";
import { ServiceDetails } from "./components/service-details";

import "./App.scss";
import { MainPageContainer } from "./components/main-page-container";

function App() {
  const [loading, setLoading] = useState(false);
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);
  const galleryRef = useRef(null);

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

  return (
    <div className="main-container">
      {/* {loading && renderLoader()} */}
      {
        // <div style={!loading ? { height: "0px" } : {}}>
        <div>
          <Router>
            <Topbar
              aboutUsRef={aboutUsRef}
              servicesRef={servicesRef}
              teamRef={teamRef}
              contactRef={contactRef}
              galleryRef={galleryRef}
            />
            <Route path="/" exact>
              <Redirect to="/home"></Redirect>
            </Route>
            <Route path="/:id" exact>
              <MainPageContainer />
            </Route>
            <Route
              path="/service/:name"
              exact
              render={() => (
                <ServiceDetails
                  aboutUsRef={aboutUsRef}
                  servicesRef={servicesRef}
                  teamRef={teamRef}
                  contactRef={contactRef}
                  galleryRef={galleryRef}
                />
              )}
            ></Route>
          </Router>
        </div>
      }
    </div>
  );
}

export default App;
