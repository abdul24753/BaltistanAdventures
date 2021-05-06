import React, { useState, useEffect } from "react";
import { Col, Typography, Tabs } from "antd";
import CardContainer from "./card";
import jeep from "./../../images/jeep-service.jpg";

import Paragliding from "./../../images/Paragliding.jpeg";

import DirtBike from "./../../images/DirtBike.jpeg";
import ATVQuad from "./../../images/ATVQuad.jpeg";
import "./styles.scss";

import serviceCards from "./helpers";
const { TabPane } = Tabs;

const { Title, Paragraph } = Typography;

export const Services = () => {
  const [selCardType, setSelCardType] = useState("activities");

  useEffect(() => {
    console.log(selCardType);
  });

  const renderCardItem = (item) => {
    return (
      <Col xs={24} sm={24} md={8} lg={8} xl={8}>
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
      <div className="main-heading">
        <Title>{`Explore The World`}</Title>
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
