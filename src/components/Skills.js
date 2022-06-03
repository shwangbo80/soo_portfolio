import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Mouse, CodeSlash, Gear} from "react-bootstrap-icons";

export default function Skills() {
  return (
    <Container
      fluid
      className="skills-container"
      data-aos="fade-in"
      data-aos-duration="2000"
      data-aos-offset="200">
      <h1 className="m-5">My Skills</h1>
      <Row>
        <Col md={4} className="p-3">
          <Mouse className="skillIcons" />
          <p className="fw-bold text-dark mt-3 p-text">Design</p>
          <p>Adobe Photoshop</p>
          <p>Adobe Illustrator</p>
          <p>Adobe XD</p>
          <p>Figma</p>
        </Col>
        <Col md={4} className="p-3">
          <CodeSlash className="skillIcons" />
          <p className="fw-bold text-dark mt-3 p-text">Frontend</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>bootstrap</p>
          <p>React</p>
          <p>React Native</p>
        </Col>
        <Col md={4} className="p-3">
          <Gear className="skillIcons" />
          <p className="fw-bold text-dark mt-3 p-text">Backend</p>
          <p>Node JS</p>
          <p>Express</p>
          <p>MongoDB</p>
          <p>Python</p>
          <p>Django</p>
          <p>Flask</p>
          <p>Postgres</p>
        </Col>
      </Row>
    </Container>
  );
}
