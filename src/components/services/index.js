import React, { useState, useEffect, useRef } from "react";
import { Col, Typography, Tabs } from "antd";
import OnScreen from "./../isInViewport";
import CardContainer from "./card";
import "./styles.scss";

import serviceCards from "./helpers";
const { TabPane } = Tabs;

const { Title, Paragraph } = Typography;

export const Services = () => {
  const [selCardType, setSelCardType] = useState("activities");

  const [visible, setVisible] = useState(false);
  const ref = useRef();
  var isVisible = OnScreen(ref);

  useEffect(() => {
    setVisible(isVisible);
  }, [isVisible]);

  const renderCardItem = (item) => {
    return (
      <Col xs={24} sm={24} md={24} lg={8} xl={8}>
        <CardContainer
          title={item.title}
          imgSrc={item.img}
          descritpion={item.detail}
        />
      </Col>
    );
  };
  return (
    <div className="services-container">
      <div className={`main-heading`} ref={ref}>
        <svg width="100%" height="100%">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)">
            {" "}
          </rect>
          <text x={"50%"} y="60%" textAnchor={"middle"}>
            Services
          </text>
        </svg>
      </div>
      <div className="details-text">
        <Paragraph>{`Come Explore the world with us and enjoy the best trip of your life. We offer Trips to every end of the world.`}</Paragraph>
      </div>
      <div className="services--tabs-container">
        <Tabs
          type="card"
          onChange={(key) => {
            setSelCardType(key);
          }}
        >
          <TabPane tab="Activities" key="activities" />
          <TabPane tab="Trips" key="trips" />
          <TabPane tab="Others" key="others" />
        </Tabs>
      </div>

      <div className="card-container">
        {serviceCards
          .filter((item) => item.type === selCardType)
          .map((item) => renderCardItem(item))}
      </div>
    </div>
  );
};

export default Services;
