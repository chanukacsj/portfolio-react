import React, { useState } from 'react'; // ✅ import useState
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className='services' id='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p className={expandedIndex === index ? "expanded" : "collapsed"}>
              {service.s_desc}
            </p>
            <div className="services-readmore" onClick={() => handleReadMore(index)}>
              <p>{expandedIndex === index ? "Show Less" : "Read More"}</p>
              <img src={arrow_icon} alt="arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services;
