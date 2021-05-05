import React, { useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import Logo from "./../../images/logo.PNG";
import { MenuOutlined } from "@ant-design/icons";

export const Topbar = ({
  aboutUsRef,
  servicesRef,
  teamRef,
  contactRef,
}) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [selected, setSelected] = useState(null);

  const topbarElements = [
    {
      id: "home",
      label: "Home",
      url: "/",
      // ref: homeRef,
    },
    {
      id: "aboutUs",
      label: "About Us",
      url: "/aboutUs",
      ref: aboutUsRef,
    },
    {
      id: "services",
      label: "Services",
      url: "/services",
      ref: servicesRef,
    },

    {
      id: "team",
      label: "Team",
      url: "/team",
      ref: teamRef,
    },
    {
      id: "contact",
      label: "Contact",
      url: "/contact",
      ref: contactRef,
    },
  ];

  return (
    <div className="nav-bar-container">
      <div className="nav-bar--section-left">
        <div className="logo-container">
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <div
        className="menu"
        onClick={() => {
          if (window.innerWidth < 900) {
            setOpenMenu(!openMenu);
          }
        }}
      >
        <MenuOutlined />
      </div>

      <div
        className="nav-bar--section-right"
        style={openMenu ? { width: "100%", opacity: "1" } : {}}
      >
        {topbarElements.map((item) => (
          <div
            className={`nav-bar--item ${selected === item.id && "selected"}`}
            onClick={() => {
              setSelected(item.id);
              item.ref && item.ref.current && item.ref.current.scrollIntoView();
              console.log(item.ref);
              if (openMenu) {
                setOpenMenu(!openMenu);
              }
            }}
          >
            <Link>{item.label}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
