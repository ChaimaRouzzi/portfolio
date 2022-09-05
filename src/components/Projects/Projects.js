import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import p1 from "../../Assets/p1.png";
import p2 from "../../Assets/p2.png";
import p3 from "../../Assets/p3.png";
import p4 from "../../Assets/p4.png";
import p5 from "../../Assets/p5.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p1}
              isBlog={false}
              title="VTC web site for the transport of goods"
              description="The site offers an application to manage the relationship of customers with drivers of different types of vehicles to transport materials or packages at a predetermined price with  an admin part to manage the system 
               It is made with PHP,HTML,CSS,JAVASCRIPT,MYSQL  "
              ghLink="https://github.com/Rouzzi/VTC.git"
              demoLink="https://vtcapp.000webhostapp.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p2}
              isBlog={false}
              title="Dooby admin"
              description="React+Nodejs application to mannage A car rental system without a driver. Through the site, administrators can follow up on customer registrations, as well as car rental requests. They can also track the path of cars on the map, in addition to several.login information (admin@admin.fr,motpass)"
              demoLink="https://gleeful-dasik-c40f20.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p3}
              isBlog={false}
              title="Dooby Decideur"
              description="React+Nodejs Bi application to illustrate the different statistics related to customer registrations ,car rental requests and financial informations in the car rental system without a driver . login information (decideur@esi.dz,test)"
              demoLink="https://aesthetic-torte-d2eec0.netlify.app/Dooby/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p4}
              isBlog={false}
              title="CHM Store"
              description="An ecommerce web site build with react js,next js,stripe and sanity platforme "
              ghLink="https://github.com/Rouzzi/ecommenrce-react_nextjs.git"
              demoLink="https://chm-store.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p5}
              isBlog={false}
              title="Chat-with-Chaima "
              description="A realtime chat application with SMS notifications sending  build with react js,node js, Streame  and twilio API "
              ghLink="https://github.com/Rouzzi/chat-app-front"
              demoLink="https://chat-with-chaima.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
