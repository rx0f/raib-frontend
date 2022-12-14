import React from "react";
import { Link } from "react-router-dom";
import "./VideoStyles.css";

import spaceVideo from "../assets/space.mp4";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={spaceVideo} type="video/mp4" />
      </video>
      <div className="content">
        <div>
          <h1>Kerberos</h1>
          <p >Let's explore Jupiter planet.</p>
          <div>
            <Link to="/try" className="btn btn-light">
              Try it
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
