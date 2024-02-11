import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa6";

import "./Contact.css";

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

    if (
      !formDetails.user_name ||
      !formDetails.user_email ||
      !formDetails.message
    ) {
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
        <Row className="align-items-start text-center-left">
          <Col size={12} md={6} className="firstcol">
            <h3>Let's connect</h3>
            <p>
              I'm currently looking for new job opportunities and ways for
              applying my knowledge. Do not hesitate to reach out to me. Your
              feedback is always welcomed!{" "}
            </p>
            <div className="mt-5">
            <h5 className="mb-3">
              {" "}
              <FaPaperPlane />{" "}
              <span style={{ marginLeft: "0.5rem" }}>jgramovica@gmail.com</span>
            </h5>
            <h5 className="mb-3">
              {" "}
              <FaPhoneAlt />{" "}
              <span style={{ marginLeft: "0.5rem" }}>50 19 32 64</span>
            </h5>
            </div>
          </Col>
          <Col size={12} md={6} className="text-center">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-2">
                <input
                  type="text"
                  name="user_name"
                  className="user"
                  placeholder="Name"
                  value={formDetails.user_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-2">
                <input
                  type="email"
                  name="user_email"
                  className="user"
                  placeholder="Email"
                  value={formDetails.user_email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-2">
                <textarea
                  rows="5"
                  name="message"
                  className="user"
                  placeholder="Message"
                  value={formDetails.message}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-2">
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
