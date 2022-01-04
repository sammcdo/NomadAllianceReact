import "./About.css";
import React from "react";
import fullsendgif from "./fullsend.gif";

class About extends React.Component {
  render() {
    return (
      <div>
        <center>
          <p>
            The NOMAD Alliance is co-developed by Ben and Sam, both passionate
            students and leaders on FRC 6995 NOMAD.
          </p>
          <br />
          <img
            src={fullsendgif}
            alt=""
            height="315px"
            style={{ borderRadius: "20px" }}
          />
          <br />
          <p>(the closest we will ever get to swerve)</p>
        </center>
        <center className="footer">
          <p>
            The NOMAD Alliance © 2020. Any questions, comments, or concerns?
            Email
            <a href="emailUs.html">Sam and Ben</a>.
          </p>
        </center>
      </div>
    );
  }
}

export default About;
