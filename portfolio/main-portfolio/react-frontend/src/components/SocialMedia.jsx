import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com/in/shubhamkamble89/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <FaLinkedinIn />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/shubhamkamble89/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <BsTwitter />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/shubhamkamble89/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <BsInstagram />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
