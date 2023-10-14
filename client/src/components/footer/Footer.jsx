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
            <Link className="link"to="/privacy">
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
            <span>Selling on Protechgig</span>
            <span>Buying on Protechgig</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
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