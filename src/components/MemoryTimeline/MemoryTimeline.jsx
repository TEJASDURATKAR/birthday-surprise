import { Container } from "react-bootstrap";
import "./MemoryTimeline.css";

export default function MemoryTimeline() {
  return (
    <section className="timeline-section">
      <Container>
        <h2 className="timeline-title">
          Our Beautiful Journey 💕
        </h2>

        <div className="timeline">
          <TimelineItem
            icon="🌸"
            title="The Day We Met"
            text="A simple hello turned into something magical."
          />

          <TimelineItem
            icon="🎈"
            title="First Birthday Together"
            text="Laughs, cake, and memories that stay forever."
          />

          <TimelineItem
            icon="📸"
            title="Endless Memories"
            text="Captured moments that make us smile every day."
          />

          <TimelineItem
            icon="❤️"
            title="Forever To Go"
            text="A journey still unfolding, hand in hand."
          />
        </div>
      </Container>
    </section>
  );
}

function TimelineItem({ icon, title, text }) {
  return (
    <div className="timeline-item">
      <div className="timeline-icon">{icon}</div>
      <div className="timeline-card">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}
