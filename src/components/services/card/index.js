import React, { useState } from "react";
import { Button, Card } from "antd";
import "./styles.scss";
import {
  MacCommandOutlined,
  RollbackOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

export const CardContainer = ({ title = "", imgSrc, descritpion = null }) => {
  // const [flipped, setFlipped] = useState(false);
  // const flipStyle = {
  //   transform: "rotateY(180deg)",
  // };
  return (
    <div
      class="flip-card"
      // onMouseLeave={() => {
      //   if (flipped) {
      //     setFlipped(!flipped);
      //   }
      // }}
    >
      <div class="flip-card-inner" >
     
          <div
            class="flip-card-front"
            
          >
            <Card
              hoverable
              cover={<img alt="example" src={imgSrc} />}
              actions={[
             
                  <a
                    href="https://docs.google.com/forms/d/15OtVOEj2fBbdfJ6s-C33C9BT6o6llNyNVmvnl2P6vN8"
                    target="_blank"
                  >
                    {" "}
                    <MacCommandOutlined /> Register Yourself
                  </a>
              
              ]}
            >
              <Meta
                title={title}
                description={descritpion || "This is a text"}
              />
              {/* <Button block>
                <MacCommandOutlined /> Interested. Click To Explore
              </Button> */}
            </Card>
          </div>
      
        
      </div>
    </div>
  );
};

export default CardContainer;
