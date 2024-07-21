import { Row, Col, Card } from "antd";
import "./blogs.css";
import Blog1Image from "../../assets/services.jpg"; // Replace with actual image paths
import Blog2Image from "../../assets/services.jpg";
import Blog3Image from "../../assets/services.jpg";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
    const navigate = useNavigate();
  return (
    <div className="blogs-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Our Blog</h1>
          <p>Stay updated with the latest trends and insights from the fashion world.</p>
        </div>
      </section>
      <section className="recent-blogs" id="recent-blogs">
        <h2>Recent Posts</h2>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="blog post 1" src={Blog1Image} />}
              onClick={()=>navigate('/blogs/1')}
            >
              <Card.Meta
                title="Latest Summer Trends"
                description="Discover the hottest trends this summer. Stay stylish and cool with our top picks."
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="blog post 2" src={Blog2Image} />}
              onClick={()=>navigate('/blogs/1')}
            >
              <Card.Meta
                title="Sustainable Fashion"
                description="Learn about sustainable fashion and how you can make eco-friendly choices."
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="blog post 3" src={Blog3Image} />}
              onClick={()=>navigate('/blogs/1')}
            >
              <Card.Meta
                title="Winter Wardrobe Essentials"
                description="Prepare for the winter season with our must-have wardrobe essentials."
              />
            </Card>
          </Col>
        </Row>
      </section>
      <section className="featured-blogs" id="featured-blogs">
        <h2>Featured Articles</h2>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="featured blog 1" src={Blog1Image} />}
              onClick={()=>navigate('/blogs/1')}
            >
              <Card.Meta
                title="The Evolution of Fashion"
                description="Explore the history and evolution of fashion over the decades."
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="featured blog 2" src={Blog2Image} />}
              onClick={()=>navigate('/blogs/1')}
            >
              <Card.Meta
                title="Fashion Tips for Men"
                description="Get the best fashion advice and tips to elevate your style game."
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="featured blog 3" src={Blog3Image} />}
              onClick={()=>navigate('/blogs/1')}
            >
              <Card.Meta
                title="Accessorizing Like a Pro"
                description="Learn how to accessorize like a pro and make your outfits stand out."
              />
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Blogs;
