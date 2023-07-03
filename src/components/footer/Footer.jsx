import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">
            <Link to="/terms-of-use" target="_blank">
              Terms Of Use
            </Link>
          </li>
          <li className="menuItem">
            <Link to="/privacy-policy" target="_blank">
              Privacy Policy
            </Link>
          </li>
          <li className="menuItem">
            <Link to="/about" target="_blank">
              About
            </Link>
          </li>
          <li className="menuItem">
            <Link to="/blog" target="_blank">
              Blog
            </Link>
          </li>
          <li className="menuItem">
            <Link to="/faq" target="_blank">
              FAQ
            </Link>
          </li>
        </ul>
        <div className="infoText">
          <p>
            Welcome to our movie website! Discover and explore a wide range of
            movies and TV shows. Enjoy a seamless experience with our intuitive
            interface and extensive collection of content. Stay connected with
            us to receive updates on new releases, exclusive content, and
            exciting promotions. Join our community and dive into the world of
            entertainment.
          </p>
        </div>
        <div className="socialIcons">
          <a
            href="https://www.facebook.com/gkchavan2611"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <FaFacebookF />
            </span>
          </a>
          <a
            href="https://instagram.com/govind_0126?igshid=ZDc4ODBmNjlmNQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <FaInstagram />
            </span>
          </a>
          <a
            href="https://twitter.com/Govindsing94865?t=1Js7ITX0f_TBNqYIKKKX8A&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <FaTwitter />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/govindsing-chavan-3a827b178"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <FaLinkedin />
            </span>
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
