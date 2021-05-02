import React, {useRef} from "react";
import { Carousel, Button } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import "./styles.scss";
import { imagesConfig } from "./images-config";

export const Home = () => {
    const caraouselRef= useRef()
  const onChange = (a, b, c) => {
    console.log(a, b, c);
  };

  const contentStyle = {
    height: "calc(100vh - 70px)",
    color: "#fff",
    // // lineHeight: "160px",
    // textAlign: "center",
    background: "#364d79",
    marginBottom: 0,
  };

  const slideImages = (num) => {
      if (num > 0){
          caraouselRef && caraouselRef.current && caraouselRef.current.next()
      }else{
        caraouselRef && caraouselRef.current && caraouselRef.current.prev()
      }

  }

  const imagesCon = imagesConfig;
  return (
    <div className="caraousel-container">
      <Button className="right-btn" onClick={()=>{slideImages(-1)}}>
        <LeftOutlined />
      </Button>
      <Carousel afterChange={onChange} autoplay ref={caraouselRef}>
        {imagesCon.map((item) => (
          <div className="sliding-image-container" >
            <img src={item.url} key={item.url} alt={item.url} />
          </div>
        ))}
      </Carousel>
      <Button className="left-btn" onClick={()=>{slideImages(1)}}>
        <RightOutlined />
      </Button>
    </div>
  );
};

export default Home;
