import React, { useState } from "react";
import { Card } from "antd";
import "./styles.scss";
const { Meta } = Card;

export const CardContainer = ({ title = "", imgSrc, descritpion = null }) => {
  const [flipped, setFlipped] = useState(false);
  const flipStyle = {
    transform: "rotateY(180deg)",
  };
  return (
    <div
      class="flip-card"
      onMouseLeave={() => {
        if (flipped) {
          setFlipped(!flipped);
        }
      }}
    >
      <div class="flip-card-inner" style={flipped ? flipStyle : {}}>
        {!flipped && <div
          class="flip-card-front"
          onClick={() => {
            setFlipped(!flipped);
          }}
          style={flipped ? { zIndex: 22 } : { zIndex: 0 }}
        >
          <Card hoverable cover={<img alt="example" src={imgSrc} />}>
            <Meta title={title} description={descritpion || "This is a text"} />
          </Card>
        </div>}
        {flipped && <div
          class="flip-card-back"
          onClick={(e) => {
            e.stopPropagation();
          }}
          style={!flipped ? { zIndex: 22 } : { zIndex: 0 }}
        >
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>}
      </div>
    </div>
  );
};

export default CardContainer;
