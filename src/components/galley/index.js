import React from "react";
import "./styles.scss";
import { Typography, Image, Col } from "antd";
import Images from "./images-config";
const { Title, Text } = Typography;
export const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className={`main-heading`}>
        <Title>{`Gallery`}</Title>
      </div>
      <div className={`details-text`}>
        <Text>
          {`Our mission is to promote adventure tourism in Gilgit-Baltistan. We believe that apart
from sight seeing tourists must have the facilities to participate in different adventure sports
activities therefore for the first time we are launching different activities like Paramotor Gliding,
ATV quad bikes, Dirt bikes desert jeep safari and other exciting activities in Skardu.`}
        </Text>
      </div>

      <div className="images-container">
          
      {Images.map(item=><Col xs={24} sm={24} md={8} lg={8} xl={6}>
          <Image src={item.url} />
      </Col>)}
      </div>
    </div>
  );
};

export default Gallery;
