import React, {useEffect} from "react";
import {Container, Row, Col, Image} from "react-bootstrap";

import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Works from "./Works";
import Contact from "./Contact";
import Footer from "./Footer";

import AOS from "aos";

export default function Home() {
<<<<<<< HEAD
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
                    <img
                        src="./img/soo.jpg"
                        alt="Soo"
                        className="sooImage my-5"></img>
                </div>
            </div>
            <Container fluid className="about-container">
                <Row
                    data-aos="fade-in"
                    data-aos-duration="2000"
                    data-aos-offset="200">
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
                                    Full stack web developer emphasizing in
                                    React. I have designed, developed, and
                                    deployed more than 10 React apps online. I
                                    am passionate about building Full Stack web
                                    applications with great looking design and
                                    UI. My strong graphic design background
                                    allows me to visualize and execute complex
                                    color, typography, and layouts in web apps.
                                    I take great pride in my development work,
                                    and strive on execution and deploying the
                                    application online. I enjoy learning new
                                    language and cutting edge technologies, and
                                    apply them to my projects.
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
                        <p className="fw-bold text-dark mt-3 p-text">
                            Frontend
                        </p>
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
                        <div className="works-container d-flex align-items-center justify-content-center animate__animated animate__bounce">
                            <div>
                                <p className="work-title-text">Cafe</p>
                                <div className="d-flex">
                                    <a
                                        className="text-white me-2"
                                        href="https://cafe.soohwangbo.com">
                                        <p className="link-text">Link</p>
                                    </a>
                                    <a
                                        className="text-white ms-2"
                                        href="https://github.com/shwangbo80/cafe_portfolio">
                                        <p className="link-text">Github</p>
                                    </a>
                                </div>
                            </div>
                        </div>

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
                        <a
                            href="https://pregame.soohwangbo.com/"
                            target="_blank">
                            <div className="works-container d-flex align-items-center justify-content-center">
                                <p className="link-text">Pregame</p>
                            </div>
                        </a>
                    </Col>
                    <Col md={4}>
                        <a
                            href="https://valorant.soohwangbo.com"
                            target="_blank">
                            <div className="works-container d-flex align-items-center justify-content-center">
                                <p className="link-text">Valorant</p>
                            </div>
                        </a>
                        <a href="https://camp.soohwangbo.com" target="_blank">
                            <div className="works-container d-flex align-items-center justify-content-center">
                                <p className="link-text">Campsite</p>
                            </div>
                        </a>
                        <a href="https://marvel.soohwangbo.com" target="_blank">
                            <div className="works-container d-flex align-items-center justify-content-center">
                                <p className="link-text">Marvel Characters</p>
                            </div>
                        </a>
                        <a
                            href="https://bubbles.soohwangbo.com/"
                            target="_blank">
                            <div className="works-container d-flex align-items-center justify-content-center">
                                <p className="link-text">Boba recipe</p>
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
                        <a
                            href="https://simpsons.soohwangbo.com"
                            target="_blank">
                            <div className="works-container d-flex align-items-center justify-content-center">
                                <p className="link-text">
                                    Simpsons Quote Generator
                                </p>
                            </div>
                        </a>
                        <a
                            href="https://netflix.soohwangbo.com"
                            target="_blank">
                            <div className="works-container d-flex align-items-center justify-content-center">
                                <p className="link-text">Netflix clone</p>
                            </div>
                        </a>
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
=======
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <Container fluid className="text-center px-0 mt-5 pt-3">
        <Hero />
        <div id="about"></div>
        <About />
        <Skills />
        <div id="works"></div>
        <Works />
        <Row>
          <Col id="contact">
            <Contact />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
>>>>>>> f35f8a7a5dab1a3e9971c290b5f5427c194c0935
}
