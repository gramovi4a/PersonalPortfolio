import { Col, Container, Row } from "react-bootstrap"
import logo from "../../assets/img/logo.png"
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.png";


import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="d-flex justify-content-center justify-content-sm-start mt-3 mt-sm-0">
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/julija-gramovica/" target="_blank"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.facebook.com/julja2003" target="_blank"><img src={navIcon2} alt="Facebook" /></a>
              <a href="https://github.com/gramovi4a" target="_blank"><img src={navIcon3} alt="GitHub" /></a>
            </div>
          </Col>
          {/* <Col size={12} sm={6}>
          <p>jgramovica@gmail.com</p>
          </Col> */}
        </Row>
      </Container>
    </footer>
    )
}