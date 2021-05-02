import React from "react-router";
import HowWeWorkImage from "./../../images/how-we-work.jpg";
import { Row, Col, Card } from "antd";
import "./styles.scss";
const { Meta } = Card;

export const HowWeWork = () => {
  const stepCount = (stepNum) => {
    return (
      <div className="step-count-container">
        <span>{stepNum}</span>
      </div>
    );
  };
  return (
    <div className="how-we-work-container">
      <div
        className="basic-container"
        style={{ backgroundImage: `url(${HowWeWorkImage})` }}
      >
        <div>
          <h1>How We Work</h1>
          <h3>We Love To Plan Your Adventure Tour In GIGLIT BALTISTAN</h3>
        </div>
      </div>
      <div>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card title={stepCount(1)} bordered={false}>
              <Meta title="Card title" description={`
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`} />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card title={stepCount(2)} bordered={false}>
              <Meta title="Card title" description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`} />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card title={stepCount(3)} bordered={false}>
              <Meta title="Card title" description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}/>
            </Card>
          </Col>
        </Row>
      </div>

      {/* <div className="information-container">
          <div className="basic-information">
            <div className="contact-information-item">
              <h3 className="label">Address</h3>
              <ApartmentOutlined />
  
              <h3 className="value">Desert Glamping Near Sam Sand Dunes Jaisalmer-345001</h3>
            </div>
            <div className="contact-information-item">
              <h3 className="label">Phone</h3>
              <PhoneOutlined />
  
              <h3 className="value">+91 9828034521 / 9214434521</h3>
            </div>
            <div className="platforms-container">
              <div>
                <a
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/abdulwadood.candi"
                  target="_blank"
                >
                  <FacebookOutlined />
                </a>
              </div>
              <div>
                <a
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/lilmiquela/?hl=en"
                  target="_blank"
                >
                  <InstagramOutlined />
                </a>
              </div>
              <div>
                <a
                  rel="noopener noreferrer"
                  href="https://twitter.com/mubasherlucman"
                  target="_blank"
                >
                  <TwitterOutlined />
                </a>
              </div>
              <div>
                <a
                  rel="noopener noreferrer"
                  href="http://wa.link/uw9ry2"
                  target="_blank"
                >
                  <WhatsAppOutlined />
                </a>
               
              </div>
              <div>
                <a
                  rel="noopener noreferrer"
                  href="mailto:wadood816892@gmail.com"
                  target="_blank"
                >
                  <MailOutlined />{" "}
                </a>
                
              </div>
            </div>
          </div> */}
    </div>
    //   </div>
  );
};

export default HowWeWork;
