import { Row, Col, Card, Button } from "antd";
import "./home.css";
import LandingBG from "../../assets/landingBG.jpg";

const Homepage = () => {
  return (
    <div className="main-content">
      <section className="hero" style={{ backgroundImage: `url(${LandingBG})` }}>
        <div className="hero-content">
          <h1>Welcome to Fashion Store</h1>
          <p>Your ultimate destination for trendy clothing and accessories.</p>
          <Button type="primary" size="large">Shop Now</Button>
        </div>
      </section>
      <section className="about" id="about">
        <h2>About Us</h2>
        <p>Fashion Store is your one-stop shop for the latest fashion trends. We offer a wide variety of clothing and accessories to suit your style.</p>
      </section>
      <section className="featured-products" id="featured-products">
        <h2>Featured Products</h2>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="product1" src="https://via.placeholder.com/300" />}>
              <Card.Meta title="Product 1" description="$50.00" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="product2" src="https://via.placeholder.com/300" />}>
              <Card.Meta title="Product 2" description="$70.00" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="product3" src="https://via.placeholder.com/300" />}>
              <Card.Meta title="Product 3" description="$40.00" />
            </Card>
          </Col>
        </Row>
      </section>
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <p>For more information, please contact us at info@fashionstore.com.</p>
      </section>
    </div>
  );
};

export default Homepage;
