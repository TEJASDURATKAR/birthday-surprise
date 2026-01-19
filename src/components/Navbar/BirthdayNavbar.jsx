import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BirthdayNavbar.css";
import { useEffect } from "react";

export default function BirthdayNavbar() {

  useEffect(() => {
  const handleScroll = () => {
    const navbar = document.querySelector(".birthday-navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <Navbar expand="lg" fixed="top" className="birthday-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">🎂 Birthday</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Memories</Nav.Link>
            <Nav.Link as={Link} to="/message">Message</Nav.Link>
            <Nav.Link as={Link} to="/nav-surprise">Surprise 🎁</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
