import { Row, Col, Card } from "antd";
import "./services.css";
import Service1Image from "../../assets/services.jpg"; // Replace with actual image paths
import Service2Image from "../../assets/services.jpg";
import Service3Image from "../../assets/services.jpg";

const Services = () => {
  return (
    <div className="services-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Our Services</h1>
          <p>Discover the wide range of services we offer to enhance your shopping experience.</p>
        </div>
      </section>
      <section className="service-details" id="service-details">
        <h2>What We Offer</h2>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="Personal Styling" src={Service1Image} />}
            >
              <Card.Meta title="Personal Styling" description="Get personalized fashion advice from our expert stylists." />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="Custom Tailoring" src={Service2Image} />}
            >
              <Card.Meta title="Custom Tailoring" description="Enjoy our custom tailoring service for a perfect fit." />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="Home Delivery" src={Service3Image} />}
            >
              <Card.Meta title="Home Delivery" description="Experience the convenience of home delivery with every purchase." />
            </Card>
          </Col>
        </Row>
      </section>
      <section className="why-choose-us" id="why-choose-us">
        <h2>Why Choose Us</h2>
        <p>We are committed to providing the best shopping experience with our top-notch services. Here’s why you should choose us:</p>
        <ul>
          <li>High-quality products</li>
          <li>Expert fashion advice</li>
          <li>Custom fitting options</li>
          <li>Convenient home delivery</li>
          <li>Excellent customer support</li>
        </ul>
      </section>
      <section className="customer-reviews" id="customer-reviews">
        <h2>Customer Reviews</h2>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <Card.Meta 
                title="Jane Doe" 
                description="Amazing service! The personal styling advice was spot on." 
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <Card.Meta 
                title="John Smith" 
                description="The custom tailoring service is fantastic. I love my new suit!" 
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <Card.Meta 
                title="Alice Johnson" 
                description="Home delivery was quick and the products were well-packaged." 
              />
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Services;
