import React from "react";
import TypeAnimation from "react-type-animation";

export default function Hero() {
    return (
        <div className="hero-container align-items-center d-flex justify-content-center">
            <div className="hero-text">
                <h1 className="display-2">Soo Hwangbo</h1>
                <h3 className="mt-2">Fullstack Web Developer</h3>
                <TypeAnimation
                    className="my-3 pt-3"
                    cursor={true}
                    sequence={["I design and build cool stuff", 3000, ""]}
                    wrapper="h3"
                    repeat={Infinity}
                />
                <img
                    src="./img/soo.jpg"
                    alt="Soo"
                    className="sooImage my-3"></img>
                <div className="d-flex justify-content-center mb-5 pb-5">
                    <h4 className="mx-2">
                        <a
                            className="text-light"
                            href="https://github.com/shwangbo80"
                            target="_blank">
                            Github
                        </a>
                    </h4>
                    <h4 className="mx-2">
                        <a
                            className="text-light"
                            href="https://www.linkedin.com/in/soohwangbo/"
                            target="_blank">
                            Linkedin
                        </a>
                    </h4>
                    <h4 className="mx-2">
                        <a
                            className="text-light"
                            href="./assets/Soo_Hwangbo_Resume_062522.pdf"
                            target="_blank">
                            Resume
                        </a>
                    </h4>
                </div>
            </div>
        </div>
    );
}
