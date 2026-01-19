import { Container, Button } from "react-bootstrap";

export default function Surprise() {
  return (
    <Container className="mt-5 pt-5 text-center">
      <h1>🎁 Surprise 🎁</h1>
      <p className="mt-3">Click below to reveal your surprise!</p>
      <Button size="lg" className="glow-btn mt-3">
        💖 I Love You 💖
      </Button>
    </Container>
  );
}
