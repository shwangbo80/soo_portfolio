import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import {Mouse, CodeSlash, Gear} from "react-bootstrap-icons"

export default function Home() {
    return (
        <div className="text-center my-5">
            <h1>Designer, Frontend Developer</h1>
            <p className="">I design and code beautifully simple things.</p>
            <img src="./img/soo.jpg" alt="Soo" className="sooImage my-5"></img>
            <Container fluid className="devImgContainer py-5">
                <img
                    src="./img/devStack.png"
                    alt="developer tools"
                    className="devImage"></img>
                <Row>
                    <Col></Col>
                    <Col md={6}>
                        <h4 className="text-light">
                            Hi, I’m Soo. Nice to meet you.
                        </h4>
                        <p className="text-light">
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
            <Container className="">
                <Row>
                    <Col>
                        <Mouse className="skillIcons" />
                        <p className="fw-bold text-dark">Designer</p>
                    </Col>
                    <Col>
                        <CodeSlash className="skillIcons" />
                        <p className="fw-bold text-dark">Front-end Developer</p>
                    </Col>
                    <Col>
                        <Gear className="skillIcons" />
                        <p className="fw-bold text-dark">Back-end Developer</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
