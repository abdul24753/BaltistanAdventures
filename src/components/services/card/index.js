import React from "react";
import { Button, Card, Typography } from "antd";
import "./styles.scss";
import { useHistory } from "react-router-dom";
import { MacCommandOutlined } from "@ant-design/icons";
const { Title, Paragraph } = Typography;
const { Meta } = Card;

export const CardContainer = ({ title = "", imgSrc, descritpion = null }) => {
  const history = useHistory();
  return (
    <div class="services-card-container">
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
          </a>,
        ]}
      >
        <Meta
          title={
            <div className="service-title">
              <Title level={3}>{title}</Title>
            </div>
          }
          description={(descritpion || []).map((item) => (
            <Paragraph
              className="card-text-details"
              ellipsis={{
                rows: 7,
                symbol: (
                  <Button
                    ghost
                    type={"primary"}
                    onClick={() => {
                      history && history.push(`/service/${title}`);
                    }}
                  >
                    Read More
                  </Button>
                ),

                expandable: "true",
              }}
            >
              {item}
            </Paragraph>
          ))}
        />
      </Card>
    </div>
  );
};

export default CardContainer;
