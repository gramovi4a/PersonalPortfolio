import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg"
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import './Contact.css';

export const Contact = () => {
  const [done, setDone] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  // initial form details
  const [formDetails, setFormDetails] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  // https://www.emailjs.com/docs/examples/reactjs/

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formDetails.user_name || !formDetails.user_email || !formDetails.message) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    emailjs
      .sendForm("service_t8d7z78", "template_e35ck3t", form.current, {
        publicKey: "XfuHzN7hF42-OG3LQ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setDone(true);
          //clear the from details after sending
          setFormDetails({
            user_name: "",
            user_email: "",
            message: "",
          });
          setErrorMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevFormDetails) => ({
      ...prevFormDetails,
      [name]: value,
    }));
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="Contact Me"></img>
          </Col>
          <Col size={12} md={6} className="text-center">
            <h2>Contact me</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <input
                  type="text"
                  name="user_name"
                  className="user"
                  placeholder="Name"
                  value={formDetails.user_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="user_email"
                  className="user"
                  placeholder="Email"
                  value={formDetails.user_email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <textarea
                  rows="6"
                  name="message"
                  className="user"
                  placeholder="Message"
                  value={formDetails.message}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <button type="submit">
                  <span>Send</span>
                </button>
                <div className="mt-2" style={{ minHeight: "25px" }}>
                  {/* minHeight: "25px" This will ensure that the space below the button is always there, preventing the image from moving. */}
                  <span style={{ color: "red" }}>{errorMessage}</span>
                  <span>{done && "Thanks for contacting me!"}</span>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
