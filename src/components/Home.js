import React, {useEffect} from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import {Mouse, CodeSlash, Gear} from "react-bootstrap-icons";
import Contact from "./Contact";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <Container fluid className="text-center px-0 mt-5 pt-3">
      <div className="header-container align-items-center d-flex justify-content-center">
        <div>
          <h1 className="pt-5 mt-5 display-3">Soo_Hwangbo</h1>
          <h2 className="mt-3">Fullstack Developer</h2>
          <p className="mt-5 p-text">
            "I design and code beautifully simple things."
          </p>
          <img src="./img/soo.jpg" alt="Soo" className="sooImage my-5"></img>
        </div>
      </div>
      <Container fluid className="about-container">
        <Row data-aos="fade-in" data-aos-duration="2000" data-aos-offset="200">
          <Col></Col>
          <Col md={12} lg={10} xl={10} xxl={8}>
            <h2 className="">"Hi, I’m Soo. Nice to meet you."</h2>
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
                  digital products for both business and consumer use. I'm
                  quietly confident, naturally curious, and perpetually working
                  on improving my chops one design problem at a time.
                </p>
              </Col>
              <Col></Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Container
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
      <Container
        className="mb-5"
        data-aos="fade-in"
        data-aos-duration="2000"
        data-aos-offset="200">
        <h1 className="m-5">My Works</h1>
        <Row>
          <Col md={4}>
            <a href="https://cafe.soohwangbo.com" target="_blank">
              <div className="works-container d-flex align-items-center justify-content-center animate__animated animate__bounce">
                <p className="link-text">Cafe</p>
              </div>
            </a>

            <a href="https://airbnb.soohwangbo.com" target="_blank">
              <div className="works-container d-flex align-items-center justify-content-center">
                <p className="link-text">Airbnb</p>
              </div>
            </a>
            <a href="https://comic.soohwangbo.com" target="_blank">
              <div className="works-container d-flex align-items-center justify-content-center">
                <p className="link-text">Marvel Comics</p>
              </div>
            </a>
            <a href="https://bubbles.soohwangbo.com" target="_blank">
              <div className="works-container d-flex align-items-center justify-content-center">
                <p className="link-text">Bubbles</p>
              </div>
            </a>
          </Col>
          <Col md={4}>
            <a href="https://camp.soohwangbo.com" target="_blank">
              <div className="works-container d-flex align-items-center justify-content-center">
                <p className="link-text">Campsite</p>
              </div>
            </a>
            <a href="https://valorant.soohwangbo.com" target="_blank">
              <div className="works-container d-flex align-items-center justify-content-center">
                <p className="link-text">Valorant</p>
              </div>
            </a>

            <a href="https://marvel.soohwangbo.com" target="_blank">
              <div className="works-container d-flex align-items-center justify-content-center">
                <p className="link-text">Marvel Characters</p>
              </div>
            </a>
          </Col>
          <Col md={4}>
            <a
              className="my-works"
              href="https://weather.soohwangbo.com"
              target="_blank">
              <div className="works-container d-flex align-items-center justify-content-center">
                <p className="link-text">Weather</p>
              </div>
            </a>
            <a href="https://news.soohwangbo.com" target="_blank">
              <div className="works-container d-flex align-items-center justify-content-center">
                <p className="link-text">News</p>
              </div>
            </a>
            <a href="https://simpsons.soohwangbo.com" target="_blank">
              <div className="works-container d-flex align-items-center justify-content-center">
                <p className="link-text">Simpsons Quote Generator</p>
              </div>
            </a>
            {/* <a href="https://github.com/shwangbo80/sooflix" target="_blank">
              <div className="works-container d-flex align-items-center justify-content-center">
                <p className="link-text">Netflix</p>
              </div>
            </a> */}
          </Col>
        </Row>
        <Row>
          <Col>
            <Contact />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
