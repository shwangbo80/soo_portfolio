import React from "react"
import {Navbar, Container, Nav} from "react-bootstrap"

export default function NavbarTop() {
    return (
        <div>
            <Navbar
                fixed="top"
                collapseOnSelect
                expand="lg"
                bg="primary"
                variant="dark">
                <Container>
                    <Nav.Link href="/" className="boldText">
                        SOO
                    </Nav.Link>
                    {/* <Navbar.Brand href="/">
                        <p className="boldText">SOO HWANGBO</p>
                    </Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/works">Works</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
