import React, { useEffect } from "react";
import "./styles.scss";
import { Col, Typography } from "antd";
import serviceCards from "../helpers";
import { useParams } from "react-router-dom";

import CardContainer from "../card";

const { Title } = Typography;

export const ServiceCardContainer = () => {
  const { serviceId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getServiceType = (key) => {
    switch (key) {
      case "activities":
        return "Activities";
      case "sightSeeing":
        return "Sight Seeing";
      case "trips":
        return "Trips";
      case "others":
        return "Others";
      case "hiking":
        return "Hiking";
      default:
        return "";
    }
  };
  const renderCardItem = (item) => {
    return (
      <Col xs={24} sm={24} md={24} lg={8} xl={8} key={item.title}>
        <CardContainer
          title={item.title}
          imgSrc={item.img}
          descritpion={item.detail}
        />
      </Col>
    );
  };

  return (
    <div className="cards-container">
      <Title className="main-heading title-header">{getServiceType(serviceId)}</Title>
      {serviceCards
        .filter((item) => item.type === serviceId)
        .map((item) => renderCardItem(item))}
    </div>
  );
};

export default ServiceCardContainer;
