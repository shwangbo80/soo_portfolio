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
                <div id="contact"></div>
                <Contact />
            </Container>
            <Footer />
        </>
    );
}
