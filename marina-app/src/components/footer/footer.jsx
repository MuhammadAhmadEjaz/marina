import { Layout, Row, Col, Form, Input, Button } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, MailOutlined } from '@ant-design/icons';
import './footer.css';

const { Footer } = Layout;

const AppFooter = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log('Received values:', values);
    // Handle email form submission here
  };

  return (
    <Footer className="footer">
      <div className="footer-content">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <div className="footer-branding">
              <h2>Company Name</h2>
              <p>Your company tagline or description.</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <div className="footer-links">
              <h3>Navigation</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FacebookOutlined />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <TwitterOutlined />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <InstagramOutlined />
                </a>
              </div>
              <h3>Contact Us</h3>
              <Form form={form} onFinish={handleSubmit}>
                <Form.Item
                  name="email"
                  rules={[{ required: true, message: 'Please enter your email' }]}
                >
                  <Input prefix={<MailOutlined />} placeholder="Your email" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default AppFooter;
