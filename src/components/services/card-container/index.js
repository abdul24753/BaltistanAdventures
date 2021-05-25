import React, { useEffect } from "react";
import "./styles.scss";
import { Col, Typography } from "antd";
import serviceCards from "../helpers";
import { useParams } from "react-router-dom";

import CardContainer from "../card";

const {Title, Paragraph} = Typography

export const ServiceCardContainer = () => {
  const { serviceId } = useParams();

  useEffect(()=>{window.scrollTo(0,0)},[])


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
        default: return ''
    }
  }
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

  const renderServiceHeader = () => {
    return (
      <>
      <Title>{getServiceType(serviceId)}</Title>
      <Paragraph>
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Paragraph>
      </>
    )
  }

  return (
    <div className="cards-container">
      {renderServiceHeader()}
      {serviceCards
        .filter((item) => item.type === serviceId)
        .map((item) => renderCardItem(item))}
    </div>
  );
};

export default ServiceCardContainer;
