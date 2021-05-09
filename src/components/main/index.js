import React from "react";
import "./styles.scss";
// import MainImage from "./../../images/IMG_20180905_163413.jpg";
import { Typography, Carousel } from "antd";
import {imagesConfig} from './images-config';
const { Title } = Typography;
export const Main = () => {
  return (
    <div className="main-containerr">
      
      <Carousel autoplay effect={"fade"}>
        {imagesConfig.map((item) => (
          <div className="sliding-image-container">
            <img src={item.url} key={item.url} alt={item.url} />
          </div>
        ))}
      </Carousel>
      <div className="text-container">
        <Title style={{fontFamily: "Playfair Display"}} level={1} className="heading">Baltistan Adventures</Title>
        <div className= "detail-container">
        <Title level={3} className="detail">Plan Your Vacations With Us.</Title>
        <Title level={3} className="detail">We Will Make Your Vacations Memorable.</Title>
        </div>
      
      </div>
    </div>
  );
};

export default Main;
