import React, {useRef} from "react";
import emailjs from "@emailjs/browser";
import {FormControl, Button, InputGroup, Col, Row} from "react-bootstrap";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_av0taoo",
        "template_inrgrtl",
        form.current,
        "user_hOmJlqzbHwXojyMErG9VS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Row>
        <Col md={3}></Col>
        <Col md={6} className="contact-container px-5">
          <h1 className="m-5">Lets chat</h1>
          <form ref={form} onSubmit={sendEmail}>
            <InputGroup className="mb-3">
              <FormControl
                className=" info-field"
                placeholder="Name"
                aria-label="Name"
                aria-describedby="basic-addon2"
                type="text"
                name="user_name"
                size="lg"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                className=" info-field"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon2"
                type="email"
                name="user_email"
                size="lg"
              />
            </InputGroup>
            <InputGroup>
              <FormControl
                className=" text-field"
                placeholder="Message"
                aria-label="Message"
                as="textarea"
                size="lg"
              />
            </InputGroup>
            <Button
              className="mt-4 btn-lg p-3 px-5"
              variant="primary"
              type="submit"
              value="Send">
              Submit
            </Button>
          </form>
        </Col>
        <Col md={3}></Col>
      </Row>
    </>
  );
}
