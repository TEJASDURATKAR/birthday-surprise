import { Container, Carousel } from "react-bootstrap";
import "./WishesSlider.css";

const wishes = [
  "May your smile shine brighter every year ✨",
  "Wishing you endless joy and happiness 💖",
  "May your day be filled with love and laughter 🎉",
  "Cheers to another year of amazing memories 🥂",
  "Keep shining, keep smiling, and keep sparkling 🌟",
];

export default function WishesSlider() {
  return (
    <section className="wishes-section">
      <Container>
        <h2 className="wishes-title">Birthday Wishes 💬</h2>
        <Carousel
          controls={false}
          indicators={false}
          interval={4000}
          fade
          className="wishes-carousel mt-4"
        >
          {wishes.map((wish, idx) => (
            <Carousel.Item key={idx}>
              <p className="wishes-text">{wish}</p>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
