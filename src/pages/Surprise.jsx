import { Container, Button } from "react-bootstrap";
// import "../styles/Surprise.css";

export default function Surprise() {
  return (
    <section className="surprise-section">
      <Container>
        <div className="surprise-card">
          <h1 className="surprise-title">🎁 A Little Surprise 🎁</h1>

          <p className="surprise-text">
            Something special is waiting just for you 💕
          </p>

          <Button size="lg" className="love-btn">
            💖 I Love You 💖
          </Button>

          {/* floating hearts */}
          <span className="heart h1">💗</span>
          <span className="heart h2">💖</span>
          <span className="heart h3">💜</span>
          <span className="heart h4">💞</span>
        </div>
      </Container>
    </section>
  );
}
