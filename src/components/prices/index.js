import React from "react";
import { Card } from "antd";
import { Row, Col } from "antd";
import { FieldTimeOutlined, DollarOutlined } from "@ant-design/icons";
import "./styles.scss";

export const Prices = () => {
  return (
    <div className="pricing-container">
        <h1>Fare Details</h1>
      <h2>We are offerinng following services at very reasonable price</h2>
      <h2>Special discount available for group of more than 5 people.</h2>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <Card title="Quad Bike" bordered={true}>
            <div className="duration-container">
              <DollarOutlined />
              <p>2000 Rs</p>
            </div>

            <div className="duration-container">
              <FieldTimeOutlined />
              <p>30 min</p>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <Card title="Trail/Dirt Bike" bordered={true}>
            <div className="duration-container">
              <DollarOutlined />
              <p>2000 Rs</p>
            </div>
            <div className="duration-container">
              <FieldTimeOutlined />
              <p>30 min</p>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <Card title="Jeep Safari" bordered={true}>
            <div className="duration-container">
              <DollarOutlined />
              <p>6000 Rs</p>
            </div>
            <div className="duration-container">
              <FieldTimeOutlined />
              <p>60 min</p>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <Card title="Winch Gliding" bordered={true}>
            <div className="duration-container">
              <DollarOutlined />
              <p>6000 Rs</p>
            </div>
            <div className="duration-container">
              <FieldTimeOutlined />
              <p>15 min</p>
            </div>
          </Card>
        </Col>{" "}
      </Row>
    </div>
  );
};

export default Prices;
