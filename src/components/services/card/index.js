import React from "react";
import { Card, Typography } from "antd";
import "./styles.scss";
import { MacCommandOutlined } from "@ant-design/icons";
const {Title} =Typography
const { Meta } = Card;

export const CardContainer = ({ title = "", imgSrc, descritpion = null }) => {
  return (
    <div class="services-card-container">
      <Card
        hoverable
        cover={<img alt="example" src={imgSrc} />}
        actions={[
          <a
            href="https://docs.google.com/forms/d/15OtVOEj2fBbdfJ6s-C33C9BT6o6llNyNVmvnl2P6vN8"
            target="_blank"
          >
            {" "}
            <MacCommandOutlined /> Register Yourself
          </a>,
        ]}
      >
        <Meta title={<div className="service-title"><Title level={3}>{title}</Title></div>} description={descritpion || "This is a text"} />
      </Card>
    </div>
  );
};

export default CardContainer;
