import React from 'react';
import './Events.scss';

const Events = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', 
  });
  return (
    <div className="events">
      <div className="center-box">
        <div className="about-content">
          <h2>Events</h2>

          <p>
          Contact Us to learn more about our platform and how we can help you achieve your goals in the tech world.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Events;