import { Row, Col, Form, Input, Button } from "antd";
import "./contact.css";
import LandingBG from "../../assets/landingBG.jpg";

const { TextArea } = Input;

const ContactUs = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // handle form submission
  };

  return (
    <div className="contact-page">
      <section className="hero" style={{ backgroundImage: `url(${LandingBG})` }}>
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>We would love to hear from you. Get in touch with us for any queries or support.</p>
        </div>
      </section>
      <section className="contact-info" id="contact-info">
        <h2>Our Information</h2>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <div className="info-box">
              <h3>Address</h3>
              <p>123 Fashion Street, Style City, Country</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <div className="info-box">
              <h3>Phone</h3>
              <p>+123 456 7890</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <div className="info-box">
              <h3>Email</h3>
              <p>info@fashionstore.com</p>
            </div>
          </Col>
        </Row>
      </section>
      <section className="contact-form" id="contact-form">
        <h2>Contact Form</h2>
        <Form
          name="contact"
          layout="vertical"
          onFinish={onFinish}
          className="contact-form-container"
        >
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input placeholder="Your Name" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: 'Please enter your email' }, { type: 'email', message: 'Please enter a valid email' }]}
              >
                <Input placeholder="Your Email" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="subject"
            label="Subject"
            rules={[{ required: true, message: 'Please enter a subject' }]}
          >
            <Input placeholder="Subject" />
          </Form.Item>
          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true, message: 'Please enter your message' }]}
          >
            <TextArea rows={4} placeholder="Your Message" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Send Message</Button>
          </Form.Item>
        </Form>
      </section>
      <section className="map" id="map">
        <h2>Find Us Here</h2>
        <div className="map-container">
          {/* Embed a Google Map iframe or similar */}
          <iframe
            title="Fashion Store Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.8449262377457!2d-122.084249584692!3d37.42199977982543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e2df30a9f7%3A0x84f5ef2c6ff3b1a5!2sGoogleplex!5e0!3m2!1sen!2sus!4v1603046871582!5m2!1sen!2sus"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
