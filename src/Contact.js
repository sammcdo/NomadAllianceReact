import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div class="form">
        <center>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdKbeDrv2XBYKc4dH1Xw6RS6tAvZEAQQEqgpXQ1Wnqkgfl7kQ/viewform?embedded=true"
            width="640"
            height="800"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </center>
      </div>
    );
  }
}

export default Contact;
