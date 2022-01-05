import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <center>
          <div id="demo">
            <p>
              Welcome to The NOMAD Alliance, an frc research site based off{" "}
              <a href="https://www.thebluealliance.com">The Blue Alliance</a>{" "}
              API. Enter a team number in the search bar above to gain insight
              for that team.
            </p>
          </div>
        </center>

        <div class="row">
          <div class="column">
            <center>
              <u>
                <h2>Video Of The Week</h2>
              </u>
              <iframe
                width="560"
                height="315"
                src="https://clips.twitch.tv/embed?clip=BloodyWanderingPuddingTebowing-QH8wNCgV7tq0Zhcg"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h2>OC Robotics</h2>
            </center>
          </div>
          <div class="column">
            <center>
              <u>
                <h2>Picture Of The Week</h2>
              </u>
              <img
                src="https://www.chiefdelphi.com/uploads/default/original/3X/a/6/a664eb06d564d909c5951f6b35748065780156fb.jpeg"
                height="315"
              />
              <h2>FRC 1690</h2>
            </center>
          </div>

          <center>
            <h4>
              {" "}
              Wanna be featured on the main page? Send us a link to a robot
              video/picture{" "}
              <a href="https://forms.gle/4fqmM2osLWWVo8cQA"> here </a>
            </h4>
          </center>
        </div>
      </div>
    );
  }
}

export default App;
