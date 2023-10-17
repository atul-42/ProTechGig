import React from "react";
import "./Footer.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";


function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>About</h2>
            <Link to="/privacy" className="link">About Us</Link>
            <Link to="/privacy" className="link">Privacy Policy</Link>
            <Link className="link"to="/Terms">Terms of Service</Link>
            <Link className="link"to="/Contact">Contact Us</Link>    
          </div>
          <div className="item">
            <h2>Support</h2>
            <Link className="link"to="/Help">Help & Support</Link>
            <Link className="link"to="/Trust">Trust & Safety</Link>
            <span>Selling on Protechgig</span>
            <span>Buying on Protechgig</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <Link className="link"to="/ss">Customer Success Stories</Link>
            <Link className="link"to="/communityhub">Community Hub</Link>
            <span>Events</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Protechgig</h2>
            <span>© Protechgig BCA 2023.</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>INR</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;