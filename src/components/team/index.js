import React from "react";
import { Card, Row, Col, Typography } from "antd";
import Asif from "./../../images/asif_mehdi.jpeg";
import Yasir from "./../../images/yasir.jpeg";
import Liaqat from "./../../images/liaqat.jpeg";

import "./styles.scss";
const { Meta } = Card;

const { Title, Paragraph } = Typography;

export const OurTeam = () => {
  return (
    <div className="teams-container">
      <div className="main-heading">
        <Title>{`Meet Our Trip Organizer`}</Title>
      </div>
      <div className="details-text">
        <Paragraph>{`We have the best in the whole world that organizes the best trips for our clients and make their journeys life remembering.`}</Paragraph>
      </div>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={7} lg={7} xl={7}>
          <div className="card-container">
            <Card hoverable>
              <img src={Liaqat} alt="team" />

              <Meta
                title="Mr. Liaqat"
                description="Manager of Baltistan Adventures"
              />
            </Card>
          </div>
        </Col>
        <Col xs={24} sm={24} md={7} lg={7} xl={7}>
          <div className="card-container">
            <Card hoverable>
              <img src={Asif} alt="team" />

              <Meta
                title="Mr. Asif Mehdi"
                description="Chief Operating Officer"
              />
            </Card>
          </div>
        </Col>

        <Col xs={24} sm={24} md={7} lg={7} xl={7}>
          <div className="card-container">
            <Card hoverable>
              <img src={Yasir} alt="team" />

              <Meta title="Mr. Yasir" description="Chief Executive Officer" />
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OurTeam;
