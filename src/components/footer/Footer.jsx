import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <p>
        Made with <FontAwesomeIcon icon={faHeart} /> by WebDev Hasnat | Sylhet |
        Bangladesh
      </p>
    </footer>
  );
};

export default Footer;
