import { Container, Row, Col, Card } from "react-bootstrap";

const images = [
  { src: "https://picsum.photos/300/400?1", caption: "Sweet Moment 💖" },
  { src: "https://picsum.photos/300/400?2", caption: "Best Smile 😊" },
  { src: "https://picsum.photos/300/400?3", caption: "Forever Memory ✨" },
  { src: "https://picsum.photos/300/400?4", caption: "Together Always 💑" },
];

export default function Gallery() {
  return (
    <section className="py-5 mt-5">
      <Container>
        <h2 className="text-center mb-4">📸 Beautiful Memories</h2>
        <Row>
          {images.map((img, i) => (
            <Col md={3} sm={6} key={i}>
              <Card className="shadow mb-4">
                <Card.Img src={img.src} />
                <Card.Body className="text-center">
                  {img.caption}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
