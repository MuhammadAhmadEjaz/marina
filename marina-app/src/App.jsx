import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import AppFooter from "./components/footer/footer";
import Homepage from "./pages/home/home";
import ContactUs from "./pages/contact/contact";
import AboutUs from "./pages/about/about";
import Services from "./pages/services/services";
import Blogs from "./pages/blogs/blogs";
import BlogDetail from "./pages/blog/blog";

function App() {
 return (
  <Router>
   <Navbar />
   <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/contact" element={<ContactUs />} />
    <Route path="/about" element={<AboutUs />}/>
    <Route path="/services" element={<Services />}/>
    <Route path="/blogs" element={<Blogs />}/>
    <Route path="/blogs/:id" element={<BlogDetail />}/>
    <Route />
   </Routes>
   <AppFooter />
  </Router>
 );
}

export default App;
