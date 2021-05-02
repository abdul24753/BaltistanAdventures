import React from "react-router";
import "./styles.scss";


export const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div
        className="basic-container"
        // style={{ backgroundImage: 'linear-gradient(to right, rgb(45,24,163), rgb(45,208,218))' }}
      >
        <div>
          <h1 style={{fontWeight: 'bolder', fontSize: '38px'}}>About Us</h1>
          <h1 className="details">{`“BALTISTAN ADVENTURES” is an adventure tourism based company based in Skardu, GilgitBaltistan. Our mission is to promote adventure tourism in Gilgit-Baltistan. We believe that apart
from sight seeing tourists must have the facilities to participate in different adventure sports
activities therefore for the first time we are launching different activities like Paramotor Gliding,
ATV quad bikes, Dirt bikes desert jeep safari and other exciting activities in Skardu`}</h1>
        </div>
      </div>
   
    </div>
   
  );
};

export default AboutUs;
