import { Row, Col, Card } from "antd";
import "./about.css";

const AboutUs = () => {
  return (
    <div className="about-page">
      <section className="hero">
        <div className="hero-content">
          <h1>About Fashion Store</h1>
          <p>Learn more about our journey and what drives us.</p>
        </div>
      </section>
      <section className="history" id="history">
        <h2>Our History</h2>
        <p>
          Fashion Store was founded in 2010 with the aim of bringing the latest trends in fashion to everyone. Over the years, we have expanded our offerings and established ourselves as a trusted name in the industry. Our journey started with a small boutique and has now grown to multiple locations and an extensive online presence.
        </p>
      </section>
      <section className="mission" id="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide high-quality, stylish clothing and accessories that empower our customers to express their individuality. We are committed to sustainability and ethical practices in all our operations.
        </p>
      </section>
      <section className="team" id="team">
        <h2>Meet Our Team</h2>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="team member 1" src="https://via.placeholder.com/300" />}>
              <Card.Meta title="Jane Doe" description="CEO & Founder" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="team member 2" src="https://via.placeholder.com/300" />}>
              <Card.Meta title="John Smith" description="Head of Design" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="team member 3" src="https://via.placeholder.com/300" />}>
              <Card.Meta title="Alice Johnson" description="Marketing Director" />
            </Card>
          </Col>
        </Row>
      </section>
      <section className="vision" id="vision">
        <h2>Our Vision</h2>
        <p>
          We envision a world where fashion is accessible to everyone and is produced in a way that respects both people and the planet. Our goal is to continue innovating and leading the industry towards a more sustainable future.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
