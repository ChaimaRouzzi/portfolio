import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./CertifCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import c1 from "../../Assets/c1.PNG";
import c2 from "../../Assets/c2.PNG";
import c3 from "../../Assets/c3.PNG";
import c4 from "../../Assets/c4.PNG";
import c5 from "../../Assets/c5.PNG";
import c6 from "../../Assets/c6.PNG";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificats </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={c1}
              isBlog={false}
              link="https://coursera.org/verify/66Y2G4TJKMV9"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={c2}
              isBlog={false}
              link="https://www.coursera.org/account/accomplishments/specialization/VMQXBRMS9LKB"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={c3}
              isBlog={false}
              link="https://coursera.org/share/ee89722bde2974befa379da78a896fa9"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={c4}
              isBlog={false}
              link="https://coursera.org/share/1bb9b84464c8e95408c1b976361cdfb6"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={c5}
              isBlog={false}
              link="https://coursera.org/share/b7b7f5d646aa7cd036a786a49eaa5b56"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={c6}
              isBlog={false}
              link="https://simpli-web.app.link/e/VRWoC9xsOsb"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
