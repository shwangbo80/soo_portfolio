import React from "react";
import {Container, Row, Col, Image, Button} from "react-bootstrap";

export default function About() {
  return (
    <Container fluid className="mt-5 about-container">
      <Container>
        <Row data-aos="fade-in" data-aos-duration="2000" data-aos-offset="200">
          <Col></Col>
          <Col md={8}>
            <h1 className="">"Hi, I’m Soo. Nice to meet you."</h1>
            <Image
              src="./img/devStack.png"
              alt="developer tools"
              className="devImage"></Image>
            <p className="px-5 about-text-container">
              Full stack web developer emphasizing in React. I have designed,
              developed, and deployed more than 10 React apps online. I am
              passionate about building Full Stack web applications with great
              looking design and UI. My strong graphic design background allows
              me to visualize and execute complex color, typography, and layouts
              in web apps. I take great pride in my development work, and strive
              on execution and deploying the application online. I enjoy
              learning new language and cutting edge technologies, and apply
              them to my projects.
            </p>
            <Button
              className="btn-lg mt-5"
              href="./assets/Soo_Hwangbo_Resume_062522.pdf"
              target="_blank"
              rel="noreferrer">
              My Resume
            </Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Container>
  );
}
