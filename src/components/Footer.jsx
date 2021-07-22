import React from "react";
import "./css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer(props) {
  //render the App footer
  const date = new Date();
  return (
    <div className="Footer">
      <p>created by Vasileios Vrachoritis</p>
      <p>
        <a href="https://www.linkedin.com/in/v-vrachoritis">
          <FontAwesomeIcon className="fas fa-camera fa-2x" icon={faLinkedin} />
        </a>
        <a href="https://www.github.com/vasilis-vra">
          <FontAwesomeIcon className="fas fa-camera fa-2x" icon={faGithub} />
        </a>
      </p>
      <p> &copy; Pomo {date.getFullYear()}</p>
    </div>
  );
}
