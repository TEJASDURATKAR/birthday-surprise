import { Container } from "react-bootstrap";
import "../styles/Message.css";

export default function Message() {
  return (
    <section className="message-section">
      <Container>
        <div className="message-card">
          <h2 className="message-title">💌 A Special Message</h2>

          <p className="message-text">
            You are the reason for so many smiles. <br />
            May your life be filled with happiness, love, and success 🎉
          </p>
        </div>
      </Container>
    </section>
  );
}
