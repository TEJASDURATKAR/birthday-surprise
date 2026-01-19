import { Container, Row, Col, Card } from "react-bootstrap";

const images = [
  { src: "https://images.pexels.com/photos/6841402/pexels-photo-6841402.jpeg", caption: "Sweet Moment 💖" },
  { src: "https://images.pexels.com/photos/11783586/pexels-photo-11783586.jpeg", caption: "Best Smile 😊" },
  { src: "https://images.pexels.com/photos/34615133/pexels-photo-34615133.jpeg", caption: "Forever Memory ✨" },
  { src: "https://images.pexels.com/photos/3319900/pexels-photo-3319900.jpeg", caption: "Together Always 💑" },
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
