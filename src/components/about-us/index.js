import React, { useEffect, useRef, useState } from "react";
import OnScreen from "./../isInViewport";
import { Typography } from "antd";
import "./styles.scss";
const { Title, Text } = Typography;

export const AboutUs = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  var isVisible = OnScreen(ref);

  useEffect(() => {
    setVisible(isVisible);
  }, [isVisible]);
  return (
    <div className="about-us-container">
      <div className={`main-heading`} ref={ref}>
        {/* <Title>{`About Us`}</Title> */}
        <svg width="100%" height="100%">
         
        <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"> </rect>
          

          
        

          <text  x={"50%"} y="60%" textAnchor={"middle"}>About Us</text>
        </svg>
      </div>
      <div className={`details-text ${visible && "slide-from-left"}`}>
        <Text>
          <Text strong>{`BALTISTAN ADVENTURES`}</Text>
          {` is an adventure tourism based company based in Skardu, GilgitBaltistan. Our mission is to promote adventure tourism in Gilgit-Baltistan. We believe that apart
from sight seeing tourists must have the facilities to participate in different adventure sports
activities therefore for the first time we are launching different activities like Paramotor Gliding,
ATV quad bikes, Dirt bikes desert jeep safari and other exciting activities in Skardu.`}
        </Text>
      </div>
    </div>
  );
};

export default AboutUs;
