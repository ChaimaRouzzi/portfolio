import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rouzzi Chaima </span>
            from <span className="purple"> Algeria.</span>
            <br />
            future engineer in computer science and currently a final year
            student at the highest National School of Computer Science (Esi).
            <br />
            <br />a full stack web developer and Androind application developer
            with 3 years of experience in the field.
            <br />
            <br />
            I'm fluent in Classics like
            <i>
              <b className="purple"> C, Javascript and Python. </b>
            </i>
            <br />
            <br />
            My field of Interest's are building new &nbsp;
            <i>
              <b className="purple">Web Technologies and Products </b> and also
              in areas related to{" "}
              <b className="purple">Deep Learning and Machine Learning.</b>
            </i>
            <br />
            <br />
            Whenever possible, I also apply my passion for developing products
            with <b className="purple">Node.js</b> and
            <i>
              <b className="purple">
                {" "}
                Modern Javascript Library and Frameworks
              </b>
            </i>
            &nbsp; like
            <i>
              <b className="purple"> React.js </b>
            </i>
            and Also Android Applications
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
