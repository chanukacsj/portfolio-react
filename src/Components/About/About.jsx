import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.jpeg";
import {
  SiSpringboot,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiHibernate,
  SiMysql,
  SiHtml5
} from "react-icons/si";
import { DiHtml5, DiJava, DiJavascript } from "react-icons/di";

const About = () => {
  const skillIcons = [
  <SiSpringboot key="springboot" />,
  <SiBootstrap key="bootstrap" />,
  <SiTailwindcss key="tailwind" />,
    <SiHtml5 key="html" />,
  <SiReact key="react" />,
  <SiHibernate key="hibernate" />,
  <SiMysql key="mysql" />,
  <DiJava key="java" />,
  <DiJavascript key="javascript" />,
];
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt=""></img>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a full stack developer with a passion for creating innovative
              and user-friendly web applications.
            </p>
            <p>
              With expertise in both front-end and back-end technologies, I have
              a proven track record of delivering high-quality solutions that
              meet the needs of clients and users.
            </p>
          </div>
          {/* <div className="about-skills">
             <div className="about-skill">
              <p>React</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Node Js</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div> */}
          <div className="about-skills">
            {skillIcons.map((icon) => (
              <div className="about-skill" key={icon.key}>
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="about-achievments">
        <div className="about-achievment">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
