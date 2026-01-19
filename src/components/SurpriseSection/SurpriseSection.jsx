import { Container, Button } from "react-bootstrap";
import "./SurpriseSection.css"; // We'll put all the styles here

export default function SurpriseSection() {
  return (
    <section className="surprise-section text-center">
      <Container>
        <h2 className="surprise-title">There’s a Surprise Waiting 🎁</h2>
        <p className="surprise-text">
          Click below to reveal something special 💫
        </p>
        <Button className="surprise-btn" size="lg">
          Open Surprise 💖
        </Button>
      </Container>
    </section>
  );
}
