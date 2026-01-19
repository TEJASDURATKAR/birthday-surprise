import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-top">
          <Col md={4} className="footer-brand">
            <h3>🎂 Birthday Bliss</h3>
            <p>
              We create beautiful, emotional birthday websites that
              turn special moments into unforgettable memories 💜
            </p>
          </Col>

          <Col md={4} className="footer-links">
            <h5>Quick Links</h5>
            <ul>
              <li>Home</li>
              <li>Gallery</li>
              <li>Wishes</li>
              <li>Contact</li>
            </ul>
          </Col>

          <Col md={4} className="footer-contact">
            <h5>Contact</h5>
            <p>📧 support@birthdaybliss.com</p>
            <p>📱 +91 9XXXXXXXXX</p>
            <p>📍 India</p>
          </Col>
        </Row>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Birthday Bliss • Made with 💜 for
            beautiful memories
          </p>
        </div>
      </Container>
    </footer>
  );
}
