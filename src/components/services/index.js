import React from "react-router";
import { Row, Col } from "antd";
import ServiceImage from "./../../images/Services.png";
import CardContainer from "./card";
import jeep from "./../../images/jeep-service.jpg";
import quad from "./../../images/quad-service.jpg";
import paragliding from "./../../images/paragliding-service.jpg";
import Dirt from "./../../images/a-spin-to-the-desert.jpg";

import "./styles.scss";

export const Services = () => {
  return (
    <div className="services-container">
      {/* <img
        src={ServiceImage}
        className="main-image"
        // style={{ width: "100%", height: "400px", objectFir: "contain" }}
        alt="services"
      /> */}

      <div className="label">
        <h1>Our Services</h1><br />
        <h3>We have Some Exciting Offfers for you</h3>
        <h3>So What are you waiting for</h3>
      </div>
      {/* <Row gutter={[16, 20]} type={"flex"}> */}
        <div className="card-container">
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <CardContainer
            title={"Jeep Drive In Sarfaranga Dessert"}
            imgSrc={jeep}
            descritpion={`Sarfaranga Cold Desert Skardu contains large sand dunes that are sometimes covered in snow
            during winter. Situated at an elevation of 2,226 metres (7,303 ft) above sea level, the Cold
            Desert is one of the highest deserts in the world.
            
            Baltistan Adventures offers jeep safari for tourist to explore the beauty of
Sarfaranga cold desert.`}
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <CardContainer
            title={"ATV Quad Drive In Sarfaranga Dessert"}
            imgSrc={quad}
            descritpion={`ATV is a vehicle that travels on low-pressure tires, with a seat that is straddled by the operator,
            along with handlebars for steering control. It is designed to handle a wider variety of terrain
            than most other vehicles.
            
            Baltistan Adventures brings you the facility to enjoy this ride at Sarfaranga Cold
Desert Skardu. Quad bikes are available on self drive so that the rider can enjoy a
thrilling dessert safari of Sarfaranga Cold Desert.`}
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <CardContainer
            title={"Paramotorgliding In Himaliya Mountains"}
            imgSrc={paragliding}
            descritpion={
              <div>
                Paramount gliding, also called a motorized parachute or
                paraplane, is a type of aircraft that consists of a parafoil
                with a motor and wheels. The aircraft's airspeed is toperate
                safely at heights ranging from. Paramotor Gliding operate safely
                at heights ranging between 500 and 1500 feet above ground level.
                {/* <br />A trained pilot will operate the glider and a rider can
                enjoy the flight on a seat next to the pilot. Paramotor ride is
                a safe and excitement activity. Now all the tourist can enjoy
                the thrilling ride of Paramotor and spectate airial view of
                Skardu under the services of Baltistan Adventures. */}
              </div>
            }
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <CardContainer
            title={"Dirt Bike In Sarfaranga"}
            imgSrc={Dirt}
            descritpion={
              <div>
                Dirt bikes are specially designed for off-road events. Compared
                to road-going motorcycles, off-road motor cycles are lighter and
                more flexible, having long suspension travel and high ground
                clearance.
                <br />
                It is a dream of every biker to fell the excitement of driving a
                dirt bike for a dessert safari. So Baltistan Adventures is
                offering the riders to enjoy dirt bike dessert safari at
                Sarfaranga Cold Desert Skardu
              </div>
            }
          />
        </Col>
        </div>
      {/* </Row> */}
    </div>
  );
};

export default Services;
