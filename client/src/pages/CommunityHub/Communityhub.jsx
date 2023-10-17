import React from 'react';
import './CommunityHub.scss';

const CommunityHub = () => {
  return (
    <div className="community-hub">
      <div className="community-image">
        <img src="./img/godd.jpeg" alt="Community Landscape" />
      </div>
      <div className="advantages">
        <h2>Advantages of Connecting to Our Community</h2>
        <ul>
          <li>Access to exclusive tech events and webinars.</li>
          <li>Networking opportunities with industry experts.</li>
          <li>Resource sharing and collaborative projects.</li>
          <li>Stay updated on the latest tech trends and innovations.</li>
        </ul>
      </div>
      <div className="social-media">
        <h2>Connect With Us</h2>
        <ul className="social-media-list">
          <li>
            <a href="https://twitter.com/GoddTechHub">Twitter</a>
          </li>
          <li>
            <a href="https://facebook.com/godd_tech_hub">Instagram</a>
          </li>
          <li>
            <a href="https://linkedin.com/company/godd-tech-hub">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CommunityHub;
