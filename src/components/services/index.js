import React, { useState, useEffect, useRef } from "react";
import { Col, Typography, Tabs, Card } from "antd";
import OnScreen from "./../isInViewport";
import CardContainer from "./card";
import { useHistory } from "react-router-dom";
import "./styles.scss";

import serviceCards from "./helpers";
const { TabPane } = Tabs;

const { Title, Paragraph } = Typography;

export const Services = () => {
  const [selCardType, setSelCardType] = useState(null);
  const history = useHistory();

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
        <Title>{`Our Services`}</Title>
      </div>
      <div className="details-text">
        <Paragraph>{`Come Explore the world with us and enjoy the best trip of your life. We offer Trips to every end of the world.`}</Paragraph>
      </div>
      <div className="services--tabs-container">
        {/* <Tabs
          type="card"
          defaultActiveKey={null}
          onChange={(key) => {
            history && history.push(`/service/type/${key}`);
          }}
        >
          <TabPane tab="Activities" key="activities" />
          <TabPane tab="Sight Seeing" key="sightSeeing" />
          <TabPane tab="Trips" key="trips" />
          <TabPane tab="Others" key="others" />
        </Tabs> */}
        <div className="services-type-container">
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <Card
            title="Activities"
            extra={`Discover More`}
            style={{ width: '100%' }}
            hoverable
            onClick={() => {
              history && history.push(`/service/type/activities`);
            }}
          >
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

          </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <Card
            title="Sight Seeing"
           extra={`Discover More`}
            style={{ width: '100%' }}
            hoverable

            onClick={() => {
              history && history.push(`/service/type/sightSeeing`);
            }}
          >
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
           
          </Card>{" "}
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <Card
            title="Trips"
           extra={`Discover More`}
            style={{ width: '100%' }}
            hoverable

            onClick={() => {
              history && history.push(`/service/type/trips`);
            }}
          >
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            
          </Card>{" "}
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <Card
            title="Others"
           extra={`Discover More`}
            style={{ width: '100%' }}
            hoverable

            onClick={() => {
              history && history.push(`/service/type/others`);
            }}
          >
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            
          </Card>
          </Col>
        </div>
      </div>
    </div>
  );
};

export default Services;
