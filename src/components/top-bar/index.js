import React, { useState, useEffect, useRef } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import Logo from "./../../images/logo.PNG";
import { MenuOutlined } from "@ant-design/icons";
import OnScreen from "./../isInViewport";
import { useHistory } from "react-router-dom";

export const Topbar = () => {
  const history = useHistory();
  const [openMenu, setOpenMenu] = useState(null);
  const ref = useRef();

  var isVisible = OnScreen(ref);

  useEffect(() => {
    if (!isVisible) {
      setOpenMenu(isVisible);
    }
  }, [isVisible]);

  const topbarElements = [
    {
      id: "home",
      label: "Home",
    },
    {
      id: "aboutUs",
      label: "About Us",
    },
    {
      id: "services",
      label: "Services",
    },
    {
      id: "gallery",
      label: "Gallery",
    },

    {
      id: "team",
      label: "Team",
    },
    {
      id: "contact",
      label: "Contact",
    },
  ];

  return (
    <div className="nav-bar-container" ref={ref}>
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
            className={`nav-bar--item`}
            onClick={() => {
              history && history.push(`/${item.id}`);

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
