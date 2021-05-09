import React, {  useRef } from "react";
import { Typography } from "antd";
import "./styles.scss";
const { Title, Text } = Typography;

export const AboutUs = () => {
  const ref = useRef();
  
  return (
    <div className="about-us-container">
      <div className={`main-heading`} ref={ref}>
        <Title>{`Welcome To Baltistan Adventures`}</Title>
        
      </div>
      <div className={`details-text`}>
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
