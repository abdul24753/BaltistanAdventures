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
          // eslint-disable-next-line react/jsx-no-target-blank
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeV2ujo2sA_jp_pHS1_OgtJgumSdKHpbdXuckgJnqyPKQp2bw/viewform"
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
          description={
            <Paragraph
              className="card-text-details"
              ellipsis={{
                rows: 9,
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
              {descritpion}
            </Paragraph>
          }
        />
      </Card>
    </div>
  );
};

export default CardContainer;
