import React, { useState, useEffect, useRef } from "react";
import { Col, Typography, Tabs, Card } from "antd";
import OnScreen from "./../isInViewport";
import CardContainer from "./card";
import { useHistory } from "react-router-dom";
import adventureicon from '../../images/adventure-icon.jpg'
import sight_seeing_icon from '../../images/sigh-removebg-preview.png'
import trip_icon from '../../images/trip_icon.jpg'
import others_icon from '../../images/others_icon-removebg-preview.png'
import hiking_icon from '../../images/hiking_icon.jpg'





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
      <Col xs={8} sm={8} md={8} lg={6} xl={6}>
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
        <Title level={3} className="label-text">{`Our Services`}</Title>
      </div>
      <div className="details-text">
        <Paragraph >{`Come Explore the world with us and enjoy the best trip of your life. We offer Trips to every end of the world.`}</Paragraph>
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
       
          <Card
            // title="Activities"
            // extra={`Discover More`}
            style={{ width: '100%', background: '#9DCCD2' }}
            hoverable
            onClick={() => {
              history && history.push(`/service/type/activities`);
            }}

          >
            <img src={adventureicon} alt={""} width={70} height={70} />

            <Title level={3} className="label-text">Activities</Title>
            <Paragraph className="more-info-text">Find Out More</Paragraph>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}

          </Card>
          <Card
            // title="Activities"
            // extra={`Discover More`}
            style={{ width: '100%', background: '#F0E0BF' }}
            hoverable
            onClick={() => {
              history && history.push(`/service/type/hiking`);
            }}

          >
            <img src={hiking_icon} alt={""} width={70} height={70} />

            <Title level={3} className="label-text">Hiking</Title>
            <Paragraph className="more-info-text">Find Out More</Paragraph>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}

          </Card>
         
          
            <Card
            // title="Activities"
            // extra={`Discover More`}
            style={{ width: '100%', background: '#84D2A7' }}
            hoverable
            onClick={() => {
              history && history.push(`/service/type/sightSeeing`);
            }}

          >
            <img src={sight_seeing_icon} alt={""} width={70} height={70} />

            <Title level={3} className="label-text">Sight Seeing</Title>
            <Paragraph className="more-info-text">Find Out More</Paragraph>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}

          </Card>
          {/* </Col> */}

          {/* <Card
            title="Sight Seeing"
           extra={`Discover More`}
            style={{ width: '100%' }}
            hoverable

            onClick={() => {
              history && history.push(`/service/type/sightSeeing`);
            }}
          >
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
           
          </Card>{" "} */}
          
         
          <Card
            // title="Activities"
            // extra={`Discover More`}
            style={{ width: '100%', background: '#FEFEFE' }}
            hoverable
            onClick={() => {
              history && history.push(`/service/type/trips`);
            }}

          >
            <img src={trip_icon} alt={""} width={70} height={70} />

            <Title level={3} className="label-text">Trips</Title>
            <Paragraph className="more-info-text">Find Out More</Paragraph>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}

          </Card>
          {/* <Card
            title="Trips"
           extra={`Discover More`}
            style={{ width: '100%' }}
            hoverable

            onClick={() => {
              history && history.push(`/service/type/trips`);
            }}
          >
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            
          </Card>{" "} */}
          
          
          <Card
            // title="Activities"
            // extra={`Discover More`}
            style={{ width: '100%', background: '#ECBCCC' }}
            hoverable
            onClick={() => {
              history && history.push(`/service/type/others`);
            }}

          >
            <img src={others_icon} alt={""} width={70} height={70} />

            <Title level={3} className="label-text">Others</Title>
            <Paragraph className="more-info-text">Find Out More</Paragraph>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}

          </Card>
          {/* <Card
            title="Others"
           extra={`Discover More`}
            style={{ width: '100%' }}
            hoverable

            onClick={() => {
              history && history.push(`/service/type/others`);
            }}
          >
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            
          </Card> */}
        
         
          
          
        </div>
      </div>
    </div>
  );
};

export default Services;
