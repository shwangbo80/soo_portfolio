import React from "react";
import {Container, Row, Col, Image} from "react-bootstrap";

export default function About() {
  return (
    <Container fluid className="mt-5 about-container">
      <Row data-aos="fade-in" data-aos-duration="2000" data-aos-offset="200">
        <Col></Col>
        <Col md={12} lg={10} xl={10} xxl={8}>
          <h1 className="">"Hi, I’m Soo. Nice to meet you."</h1>
          <Row>
            <Col></Col>
            <Col md={12} lg={10} xl={10} xxl={8}>
              <Image
                src="./img/devStack.png"
                alt="developer tools"
                className="devImage"></Image>
              <p className="px-5 about-text-container p-text">
                Since beginning my journey as a freelance designer nearly 10
                years ago, I've done remote work for agencies, consulted for
                startups, and collaborated with talented people to create
                digital products for both business and consumer use. I'm quietly
                confident, naturally curious, and perpetually working on
                improving my chops one design problem at a time.
              </p>
            </Col>
            <Col></Col>
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
