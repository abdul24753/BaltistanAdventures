import React, { useRef } from "react";
import { Carousel } from "antd";
import {
  LeftCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import "./styles.scss";
import { imagesConfig } from "./images-config";

export const Home = () => {
  const caraouselRef = useRef();
  const slideImages = (num) => {
    if (num > 0) {
      caraouselRef && caraouselRef.current && caraouselRef.current.next();
    } else {
      caraouselRef && caraouselRef.current && caraouselRef.current.prev();
    }
  };

  const imagesCon = imagesConfig;
  return (
    <div className="caraousel-container">
      <LeftCircleOutlined
        onClick={() => {
          slideImages(-1);
        }}
        className="right-btn"
      />
      <Carousel autoplay ref={caraouselRef}>
        {imagesCon.map((item) => (
          <div className="sliding-image-container">
            <img src={item.url} key={item.url} alt={item.url} />
          </div>
        ))}
      </Carousel>
      <RightCircleOutlined
        onClick={() => {
          slideImages(1);
        }}
        className="left-btn"
      />
    </div>
  );
};

export default Home;
