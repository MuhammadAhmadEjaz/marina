import { Card } from "antd";
import "./blog.css";
import BlogDetailImage1 from "../../assets/services.jpg"; // Replace with actual image paths
import BlogDetailImage2 from "../../assets/services.jpg";

const BlogDetail = () => {
  return (
    <div className="blog-detail-page">
      <section className="hero">
        <div className="hero-content">
          <h1>The Evolution of Fashion</h1>
          <p>Explore the history and evolution of fashion over the decades.</p>
        </div>
      </section>
      <section className="blog-content">
        <Card className="blog-card">
          <p className="blog-text">
            Fashion has always been a reflection of society and culture. Over the decades, fashion has evolved to mirror the changing times. From the flapper dresses of the 1920s to the bold styles of the 1980s, each era has left its mark on the fashion world.
          </p>
          <img src={BlogDetailImage1} alt="Fashion History" className="blog-image" />
          <p className="blog-text">
            In the 1920s, fashion was all about liberation and freedom. Women embraced shorter hemlines and looser silhouettes, breaking away from the restrictive clothing of the past. The iconic flapper dress became a symbol of this new era.
          </p>
        <p className="blog-text">
            The 1950s brought a return to elegance and femininity. Diors &ldquo;New Look&rdquo; with its cinched waist and full skirt dominated the fashion scene. Women were encouraged to embrace their curves and dress in a ladylike manner.
        </p>
          <img src={BlogDetailImage2} alt="Modern Fashion" className="blog-image" />
          <p className="blog-text">
            Fast forward to the 1980s, and fashion took on a whole new attitude. Bold colors, oversized silhouettes, and power dressing were all the rage. The decade was defined by excess and extravagance, with fashion becoming a statement of individuality and confidence.
          </p>
          <p className="blog-text">
            Today, fashion continues to evolve, embracing sustainability and inclusivity. Designers are focusing on creating clothing that is not only stylish but also eco-friendly. The fashion industry is becoming more diverse, with a greater emphasis on representation and body positivity.
          </p>
          <p className="blog-text">
            Fashion is ever-changing, but its ability to reflect the spirit of the times remains constant. As we look to the future, we can expect fashion to continue to innovate and inspire.
          </p>
        </Card>
      </section>
    </div>
  );
};

export default BlogDetail;
