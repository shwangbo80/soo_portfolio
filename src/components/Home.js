import React from "react"
import {Container, Row, Col, Image, Form} from "react-bootstrap"
import {Mouse, CodeSlash, Gear} from "react-bootstrap-icons"

export default function Home() {
  return (
    <div className="text-center mt-5 pt-3">
      <h1 className="pt-5 mt-5">Designer, Fullstack Developer</h1>
      <p className="">I design and code beautifully simple things.</p>
      <img src="./img/soo.jpg" alt="Soo" className="sooImage my-5"></img>
      <Container fluid className="devImgContainer py-5">
        <Row>
          <Col></Col>
          <Col lg={6}>
            <h4 className="">Hi, I’m Soo. Nice to meet you.</h4>
            <Row>
              <Col></Col>
              <Col xl={10}>
                <Image
                  src="./img/devStack.png"
                  alt="developer tools"
                  className="devImage"></Image>
                <p className="px-5 about-text-container">
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
      <Container className="my-5">
        <h1 className="m-5">My Skills</h1>
        <Row>
          <Col>
            <Mouse className="skillIcons" />
            <p className="fw-bold text-dark mt-3">Design</p>
            <p>Adobe Photoshop</p>
            <p>Adobe Illustrator</p>
            <p>Adobe XD</p>
            <p>Figma</p>
            <p>Sketch</p>
          </Col>
          <Col>
            <CodeSlash className="skillIcons" />
            <p className="fw-bold text-dark mt-3">Frontend</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>bootstrap</p>
            <p>Javascript</p>
            <p>React JS</p>
          </Col>
          <Col>
            <Gear className="skillIcons" />
            <p className="fw-bold text-dark mt-3">Backend</p>
            <p>Node JS</p>
            <p>Express</p>
            <p>MongoDB</p>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <h1 className="m-5">My Works</h1>
        <Row>
          <Col>
            <a href="https://cafe.soohwangbo.com" target="_blank">
              <p>Cafe</p>
            </a>
            <a href="https://airbnb.soohwangbo.com" target="_blank">
              <p>Airbnb</p>
            </a>
            <a href="https://comic.soohwangbo.com" target="_blank">
              <p>Marvel Comics</p>
            </a>
          </Col>
          <Col>
            <a href="https://valorant.soohwangbo.com" target="_blank">
              <p>Valorant</p>
            </a>
            <a href="https://camp.soohwangbo.com" target="_blank">
              <p>Campsite</p>
            </a>
            <a href="https://marvel.soohwangbo.com" target="_blank">
              <p>Marvel Characters</p>
            </a>
          </Col>
          <Col>
            <a href="https://sb.soohwangbo.com" target="_blank">
              <p>Starbucks</p>
            </a>
            <a href="https://nytimes.soohwangbo.com" target="_blank">
              <p>NY Times</p>
            </a>
            <a href="https://simpsons.soohwangbo.com" target="_blank">
              <p>Simpsons Quote Generator</p>
            </a>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <h1 className="m-5">Lets Talk</h1>
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1">
                <Form.Label>Emai</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </div>
  )
}
