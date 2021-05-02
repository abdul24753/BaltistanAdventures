import React from "react-router";
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
import ContactUs from "./../../images/contact.PNG";

export const Contact = () => {
  return (
    <div className="contact-us-container">
      <div
        className="basic-container"
        style={{ backgroundImage: `url(${ContactUs})` }}
      >
        <div>
          <h1>Contact Us</h1>
          <h3>
            We are here to assist you for exploring bueaty of GILGIT BALTISTAN
          </h3>
        </div>
      </div>
      <div className="information-container">
        <div className="basic-information">
          <div className="contact-information-item">
            <h3 className="label">Address</h3>
            <ApartmentOutlined />

            <h3 className="value">Desert Glamping Near Sam Sand Dunes Jaisalmer-345001</h3>
          </div>
          <div className="contact-information-item">
            <h3 className="label">Phone</h3>
            <PhoneOutlined />

            <h3 className="value">+91 9828034521 / 9214434521</h3>
          </div>
          <div className="platforms-container">
            <div>
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/baltistanadventures/"
                target="_blank"
              >
                <FacebookOutlined />
              </a>
            </div>
            <div>
              <a
                rel="noopener noreferrer"
                href="https://instagram.com/baltistan_adventures?igshid=q3yswgm7jxjc"
                target="_blank"
              >
                <InstagramOutlined />
              </a>
            </div>
            {/* <div>
              <a
                rel="noopener noreferrer"
                href="https://twitter.com/mubasherlucman"
                target="_blank"
              >
                <TwitterOutlined />
              </a>
            </div> */}
            {/* <div>
              <a
                rel="noopener noreferrer"
                href="http://wa.link/uw9ry2"
                target="_blank"
              >
                <WhatsAppOutlined />
              </a>
             
            </div> */}
            {/* <div>
              <a
                rel="noopener noreferrer"
                href="mailto:wadood816892@gmail.com"
                target="_blank"
              >
                <MailOutlined />{" "}
              </a>
              
            </div> */}
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Contact;
