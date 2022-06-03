import React from "react";
import {Container} from "react-bootstrap";

export default function Footer() {
    return (
        <div className="bg-dark text-light text-center footer-container">
            <Container>{`Copyright ${new Date().getFullYear()} Soo Hwangbo`}</Container>
        </div>
    );
}
