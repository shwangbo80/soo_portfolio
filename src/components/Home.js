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
                <Image
                    src="./img/devStack.png"
                    alt="developer tools"
                    className="devImage"></Image>
                <Row>
                    <Col></Col>
                    <Col md={6}>
                        <h4 className="">Hi, I’m Soo. Nice to meet you.</h4>
                        <p className="">
                            Since beginning my journey as a freelance designer
                            nearly 10 years ago, I've done remote work for
                            agencies, consulted for startups, and collaborated
                            with talented people to create digital products for
                            both business and consumer use. I'm quietly
                            confident, naturally curious, and perpetually
                            working on improving my chops one design problem at
                            a time.
                        </p>
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
                        <p>Cafe</p>
                        <p>Airbnb</p>
                        <p>DevTuts</p>
                    </Col>
                    <Col>
                        <p>Valorant</p>
                        <p>Campsite</p>
                        <p>Marvel</p>
                    </Col>
                    <Col>
                        <p>Starbucks</p>
                        <p>McDonalds</p>
                        <p>Adidas</p>
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
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                />
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
