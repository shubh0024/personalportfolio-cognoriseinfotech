import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shubham kumar </span>
            from <span className="purple"> Roorkee,Uttarakhand, India.</span>
            <br />
            I am currently upskilling myself to become a Full Stack Developer.
            <br />
            I am currently persuing a bachelor of technology in computer science engineering .
            <br />
            <br />
            Apart from coding, some other activities that I love to do like !
          </p>
          <ul>
            <li className="about-activity ">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Surfing Browser for the update about new technology
            </li>
            <li className="about-activity">
              <ImPointRight />Mountain tour!
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Curious to make changes and development in our Society!"{" "}
          </p>
          <footer className="blockquote-footer">krShubham!</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
