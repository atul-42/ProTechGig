import React from 'react';
import './Hub.scss';

const Hub = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', 
  });
  return (
    <div className="events">
      <div className="center-box">
        <div className="about-content">
          <h2>Community Hub</h2>

          <p>
          Join the ProTechGig community today and experience a freelancing platform that is as passionate about technology as you are.
          <br />Whether you are a freelancer looking to take your career to the next level or a business seeking tech solutions, ProTechGig has you covered.
          <br />
          Contact Us to learn more about our platform and how we can help you achieve your goals in the tech world.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hub;