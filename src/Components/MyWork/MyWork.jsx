import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
const MyWork = () => {
  return (
    <div className="mywork" id="mywork">
      <div className="mywork-title">
        <h1>My Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-continer">
        {mywork_data.map((work, index) => (
          <a
            key={index}
            href={work.w_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={work.w_img} alt={`project-${index}`} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
