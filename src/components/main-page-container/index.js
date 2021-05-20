import React from "react";
import { Topbar } from "../top-bar";
import { Services } from "../services";
import { Contact } from "../contact";
import { Gallery } from "../galley";
import { ServiceDetails } from "../service-details";

import Team from "../team";
import AboutUs from "../about-us";
import Main from "../main";

import { BackTop } from "antd";
import { UpCircleOutlined } from "@ant-design/icons";
import { useParams } from "react-router";
import { useEffect, useRef, useState } from "react";
// import './styles.scss'

export const MainPageContainer = () => {
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);
  const galleryRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    if (id === "aboutUs") {
      aboutUsRef.current && aboutUsRef.current.scrollIntoView();
    }
    if (id === "gallery") {
      galleryRef.current && galleryRef.current.scrollIntoView();
    }
    if (id === "team") {
      teamRef.current && teamRef.current.scrollIntoView();
    }
    if (id === "services") {
      servicesRef.current && servicesRef.current.scrollIntoView();
    }
    if (id === "contact") {
      contactRef.current && contactRef.current.scrollIntoView();
    }
  }, [id]);

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

  const renderMainPage = () => {
    return (
      <>
        <Main />
        <div ref={aboutUsRef}>
          <AboutUs />
        </div>
        <div ref={servicesRef} id="servicesss">
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
      </>
    );
  };
  return renderMainPage();
};

export default MainPageContainer;
