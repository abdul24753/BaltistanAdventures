/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import services from "../services/helpers";
import { useParams } from "react-router-dom";
import { MacCommandOutlined } from "@ant-design/icons";

import { Typography } from "antd";

import "./styles.scss";

const { Title, Paragraph } = Typography;


export const ServiceDetails = () => {
  window.scrollTo(0, 0)

  
  const { name } = useParams();
  const selectedService = services.find((item) => item.title === name);
  return (
    <div className="service-details-container">
      <div className="image-container">
        <img src={selectedService.img} alt={name} />
      </div>
      <div className={`main-heading`}>
        <Title>{name}</Title>
      </div>
      <div className="details-text">
        <Paragraph>{selectedService.detail}</Paragraph>
      </div>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeV2ujo2sA_jp_pHS1_OgtJgumSdKHpbdXuckgJnqyPKQp2bw/viewform"
        target="_blank"
      >
        {" "}
        <MacCommandOutlined /> Register Yourself
      </a>
      ,
    </div>
  );
};

export default ServiceDetails;
