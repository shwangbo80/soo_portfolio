import React, {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import {FormControl, Button, InputGroup, Col, Row, Form} from "react-bootstrap";

export default function Contact() {
  const form = useRef();

  const [emailSent, setEmailSent] = useState(false);
  const [validated, setValidated] = useState(false);

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
          setEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const RenderEmail = () => {
    if (emailSent === false) {
      return <EmailForm />;
    } else if (emailSent === true) {
      return (
        <div className="email-response">
          <h2>Thank you for reaching out. I will get back to you shortly.</h2>
        </div>
      );
    }
  };

  const EmailForm = () => {
    return (
      <Row>
        <Col md={3}></Col>
        <Col md={6} className="contact-container px-5 mb-5">
          <h1 className="m-5">Lets chat</h1>
          <form ref={form} onSubmit={sendEmail}>
            <Form.Group controlId="validationCustomUsername">
              <InputGroup className="mb-3" hasValidation>
                <Form.Control
                  className="info-field"
                  placeholder="Name"
                  aria-label="Name"
                  aria-describedby="inputGroupPrepend"
                  type="text"
                  name="user_name"
                  size="lg"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please submit a name.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="validationEmail">
              <InputGroup className="mb-3">
                <FormControl
                  className=" info-field"
                  placeholder="Email"
                  aria-label="Email"
                  type="email"
                  name="user_email"
                  size="lg"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please submit a email.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="validationMessage">
              <InputGroup>
                <FormControl
                  className=" text-field"
                  placeholder="Message"
                  aria-label="Message"
                  as="textarea"
                  size="lg"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please submit a message.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
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
    );
  };

  return <RenderEmail />;
}
