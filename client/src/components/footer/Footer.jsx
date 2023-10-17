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
            <Link className="link"to="/About">
              <span>About Us</span>
            </Link>
            <Link className="link"to="/Privacy">
              <span>Privacy Policy</span>
            </Link>
            <Link className="link"to="/Terms">
            <span>Terms of Service</span>
            </Link>
            <Link className="link"to="/Contact">
            <span>Contact Us</span>
            </Link>
          </div>
          <div className="item">
            <h2>Support</h2>
            <Link className="link"to="/Help">
            <span>Help & Support</span>
            </Link>
            <Link className="link"to="/Trust">
            <span>Trust & Safety</span>
            </Link>
            <Link className="link"to="/Selling">
            <span>Selling on ProTechGig</span>
            </Link>
            <Link className="link"to="/Buying">
            <span>Buying on ProTechGig</span>
            </Link>
          </div>
          <div className="item">
            <h2>Community</h2>
            <Link className="link"to="/Story">
            <span>Customer Success Stories</span>
            </Link>
            <Link className="link"to="/Hub">
            <span>Community Hub</span>
            </Link>
            <Link className="link"to="/Standards">
            <span>Community Standards</span>
            </Link>
            <Link className="link"to="/Events">
            <span>Events</span>
            </Link>
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