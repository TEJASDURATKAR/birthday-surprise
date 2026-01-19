import { Container, Button } from "react-bootstrap";
import { useState } from "react";
import "./BirthdayMessage.css";

export default function BirthdayMessage() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="birthday-message-section">
      <Container>
        <div className="birthday-card fade-in">
          <span className="floating-heart">💜</span>

          <h2 className="birthday-title">
            A Special Message
            <span> 💖</span>
          </h2>

          <p className="birthday-text">
            Today is not just your birthday, it’s a celebration of the
            beautiful soul you are.
          </p>

          {showMore && (
            <p className="birthday-text extra">
              This website is a small gift filled with love, memories,
              smiles, and surprises 🎂✨  
              May your life always be surrounded by happiness,
              laughter, and endless love 💕
            </p>
          )}

          <Button
            className="lavender-btn mt-3"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Hide Message 💫" : "Read Full Message 💌"}
          </Button>
        </div>
      </Container>
    </section>
  );
}
