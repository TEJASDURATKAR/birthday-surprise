import { Container, Button } from "react-bootstrap";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      {/* floating balloons */}
      <div className="balloons">
        <span>🎈</span>
        <span>🎈</span>
        <span>🎉</span>
        <span>🎂</span>
        <span>💖</span>
      </div>

      <Container className="text-center hero-content">
        <h1 className="hero-title">
          Happy Birthday Dear<span>🎉</span>
        </h1>

        <p className="hero-subtitle">
          A little surprise, filled with love, smiles & magic 💖
        </p>

        <Button className="hero-btn mt-4">
          🎁 Explore the Surprise
        </Button>

        <p className="scroll-hint mt-4">
          Scroll to feel the magic ✨
        </p>
      </Container>
    </section>
  );
}
