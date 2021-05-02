import React from "react";
import TeamImage from "./../../images/team.jpg";
import { Card, Row, Col } from "antd";
import Asif from "./../../images/asif_mehdi.jpeg";
import Yasir from "./../../images/yasir.jpeg";
import Liaqat from "./../../images/liaqat.jpeg";

import "./styles.scss";
const { Meta } = Card;

export const OurTeam = () => {
  return (
    <div className="teams-container">
      <img
        src={TeamImage}
        style={{ width: "100%",maxHeight: '400px', objectFit: "contain" }}
        alt="team"
      />
     
        <Row gutter={16}>
          <Col xs={24} sm={24} md={7} lg={7} xl={7}>
            <div className="card-container">
              <Card hoverable>
                <img src={Liaqat} alt="team" />

                <Meta
                  title="Liaqat"
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
                  title="Asif Mehdi"
                  description="CoFounder of Baltistan Adventures"
                />
              </Card>
            </div>
          </Col>

          <Col xs={24} sm={24} md={7} lg={7} xl={7}>
            <div className="card-container">
              <Card hoverable>
                <img src={Yasir} alt="team" />

                <Meta title="Yasir" description="CEO of Baltistan Adventures" />
                {/* <div>
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/yasir.abbas.16144"
                target="_blank"
              >
                <FacebookOutlined />
              </a>
              </div> */}
              </Card>
            </div>
          </Col>
        </Row>
   
    </div>

    // <h1>OurTeam</h1>
  );
};

export default OurTeam;
