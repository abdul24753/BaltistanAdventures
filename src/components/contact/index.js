import React, { useEffect, useRef, useState } from "react";
import OnScreen from "./../isInViewport";
import "./styles.scss";
import {
  FacebookOutlined,
  WhatsAppOutlined,
  TwitterOutlined,
  InstagramOutlined,
  MailOutlined,
  ApartmentOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";

const { Title, Paragraph, Link } = Typography;

export const Contact = () => {
  const [visible, setVisible] = useState(false)
  const ref = useRef();
  var isVisible = OnScreen(ref);

  useEffect(()=>{  
    setVisible(isVisible)
  },[isVisible])
  return (
    <div className="contact-us-container">
      <div className={`main-heading ${visible && 'type-writer-effect'}`} ref={ref}>
        <Title>{`Contact Us`}</Title>
      </div>
      <div className="details-text">
        <Paragraph>{` We are here to assist you for exploring bueaty of GILGIT BALTISTAN`}</Paragraph>
      </div>
      <div className="contact-platforms-container">
        <div>
        <div className="platform">
          <Title level={3} className="platform-name" underline>{`Address:`}</Title>
          <ApartmentOutlined className="platform-icon"/>
          <Paragraph className="platform-value">{`Hussainabad Skardu, Pakistan`}</Paragraph>
        </div>
        <div className="platform">
          <Title level={3} className="platform-name" underline>{`Mail:`}</Title>
          <MailOutlined className="platform-icon" />
          <Paragraph className="platform-value">{`baltistanAdventures@gmail.com`}</Paragraph>
        </div>{" "}
        <div className="platform">
          <Title level={3} className="platform-name" underline>{`Facebook:`}</Title>
          <FacebookOutlined  className="platform-icon"/>
          {/* <Paragraph className="platform-value">{`https://www.facebook.com/baltistanadventures/`}</Paragraph> */}
          <Link href="https://www.facebook.com/baltistanadventures"  target="_blank" underline className="platform-value link">
         {`https://www.facebook.com/baltistanadventures`}
    </Link>
        </div>
        <div className="platform">
          <Title level={3} className="platform-name" underline>{`Instagram:`}</Title>
          <InstagramOutlined  className="platform-icon"/>
          <Link href="https://instagram.com/baltistan_adventures?igshid=q3yswgm7jxjc" target="_blank" underline className="platform-value link">
         {`https://instagram.com/baltistan_adventures?igshid=q3yswgm7jxjc`}
    </Link>
          {/* <Paragraph className="platform-value">{`https://instagram.com/baltistan_adventures?igshid=q3yswgm7jxjc`}</Paragraph> */}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
