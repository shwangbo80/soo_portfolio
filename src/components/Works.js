import React from "react";
import {Container, Row, Col} from "react-bootstrap";

export default function Works() {
  return (
    <Container
      className="py-5 my-5"
      data-aos="fade-in"
      data-aos-duration="2000"
      data-aos-offset="200">
      <h1 className="m-5">My Works</h1>
      <Row>
        <Col md={4}>
          <a href="https://cafe.soohwangbo.com" target="_blank">
            <div className="works-container d-flex align-items-center justify-content-center animate__animated animate__bounce">
              <p className="link-text">Cafe Website</p>
            </div>
          </a>

          <a href="https://airbnb.soohwangbo.com" target="_blank">
            <div className="works-container d-flex align-items-center justify-content-center">
              <p className="link-text">Airbnb Landing Page</p>
            </div>
          </a>
          <a href="https://comic.soohwangbo.com" target="_blank">
            <div className="works-container d-flex align-items-center justify-content-center">
              <p className="link-text">Marvel Comics Library</p>
            </div>
          </a>
          <a href="https://bubbles.soohwangbo.com" target="_blank">
            <div className="works-container d-flex align-items-center justify-content-center">
              <p className="link-text">Boba Recipe Website</p>
            </div>
          </a>
        </Col>
        <Col md={4}>
          <a href="https://camp.soohwangbo.com" target="_blank">
            <div className="works-container d-flex align-items-center justify-content-center">
              <p className="link-text">Campsite Landing Page</p>
            </div>
          </a>
          <a href="https://valorant.soohwangbo.com" target="_blank">
            <div className="works-container d-flex align-items-center justify-content-center">
              <p className="link-text">Valorant Fansite</p>
            </div>
          </a>

          <a href="https://marvel.soohwangbo.com" target="_blank">
            <div className="works-container d-flex align-items-center justify-content-center">
              <p className="link-text">Marvel Characters Search</p>
            </div>
          </a>
          <a href="https://pregame.soohwangbo.com" target="_blank">
            <div className="works-container d-flex align-items-center justify-content-center">
              <p className="link-text">Pregame App</p>
            </div>
          </a>
        </Col>
        <Col md={4}>
          <a
            className="my-works"
            href="https://weather.soohwangbo.com"
            target="_blank">
            <div className="works-container d-flex align-items-center justify-content-center">
              <p className="link-text">Weather App</p>
            </div>
          </a>
          <a href="https://news.soohwangbo.com" target="_blank">
            <div className="works-container d-flex align-items-center justify-content-center">
              <p className="link-text">News App</p>
            </div>
          </a>
          <a href="https://simpsons.soohwangbo.com" target="_blank">
            <div className="works-container d-flex align-items-center justify-content-center">
              <p className="link-text">Simpsons Quote Generator</p>
            </div>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
