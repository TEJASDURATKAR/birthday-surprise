import { Container, Button } from "react-bootstrap";
import "./CTASection.css";

export default function CTASection() {
  return (
    <section className="cta-section">
      <Container>
        <div className="cta-box">
          <h2 className="cta-title">
            Create Your Own Birthday Website 🎂
          </h2>

          <p className="cta-text">
            Surprise your loved ones with a beautiful, emotional
            and unforgettable digital experience 💖
          </p>

          <Button className="cta-btn" size="lg">
            Order Now ❤️
          </Button>

          <p className="cta-subtext">
            ✨ 100% Custom • Mobile Friendly • Delivered Fast
          </p>
        </div>
      </Container>
    </section>
  );
}
