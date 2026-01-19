import { Container } from "react-bootstrap";
import "./PhotoGallery.css";

const photos = [
  {
    src: "https://images.pexels.com/photos/4044169/pexels-photo-4044169.jpeg",
    caption: "Our first smile together 💕",
  },
  {
    src: "https://images.pexels.com/photos/4044170/pexels-photo-4044170.jpeg",
    caption: "A moment to remember ✨",
  },
  {
    src: "https://images.pexels.com/photos/15533023/pexels-photo-15533023.jpeg",
    caption: "Captured forever 📸",
  },
  {
    src: "https://images.pexels.com/photos/3684780/pexels-photo-3684780.jpeg",
    caption: "Love in every frame 💜",
  },
];

export default function PhotoGallery() {
  return (
    <section className="polaroid-section">
      <Container>
        <h2 className="polaroid-title">
          Sweet Memories 📸
        </h2>

        <div className="polaroid-wall">
          {photos.map((photo, index) => (
            <div
              className={`polaroid-card tilt-${index}`}
              key={index}
            >
              <img src={photo.src} alt="memory" />
              <p>{photo.caption}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
