import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import mylogo from "../../assets/img/logo.png"
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.png";
import { Link } from "react-scroll";

import './NavBar.css';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // when scrolling, depending on the state, the colour of the background will be changed
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  // https://react-bootstrap.netlify.app/docs/components/navbar/
  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""} collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">
          <img src={mylogo} alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink == "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={
                activeLink == "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink == "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink == "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/julija-gramovica/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a
                href="https://www.facebook.com/julja2003"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="" />
              </a>
              <a
                href="https://github.com/gramovi4a"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="GitHub" />
              </a>
            </div>
            <Link to="contact" spy={true} >
              <button
                className="vvd"
              >
                <span>Contact me</span>
              </button>
            </Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
