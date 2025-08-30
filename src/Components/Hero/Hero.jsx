import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resumeFile from '../../assets/Chanuka_Sri_Jeewantha.pdf'; 

const Hero = () => {

   const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'Chanuka_Sri_Jeewantha_CV.pdf';
    link.click();
  };

  return (
    <div className="hero" id="home">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Chanuka Sri Jeewantha ,</span>full stack developer
      </h1>
      <p>
        I'm a full stack developer with a passion for creating innovative and
        user-friendly web applications.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume" onClick={handleDownload} style={{cursor: 'pointer'}}>
        My Resume
      </div>
      </div>
    </div>
  );
};

export default Hero;
