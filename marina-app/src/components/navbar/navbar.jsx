import { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
 const [drawerVisible, setDrawerVisible] = useState(false);
 const navigate = useNavigate();

 const showDrawer = () => {
  setDrawerVisible(true);
 };

 const closeDrawer = () => {
  setDrawerVisible(false);
 };

 return (
  <div className="navbar">
   <div className="navbar-brand">Company Name</div>
   <div className="navbar-links">
    <Menu mode="horizontal" className="menu">
     <Menu.Item key="home" style={{ color: "white" }} onClick={()=> navigate('/')}>
      Home
     </Menu.Item>
     <Menu.Item key="about" style={{ color: "white" }} onClick={()=> navigate('/about')}>
      About
     </Menu.Item>
     <Menu.Item key="services" style={{ color: "white" }} onClick={()=> navigate('/services')}>
      Services
     </Menu.Item>
     <Menu.Item key="contact" style={{ color: "white" }} onClick={()=> navigate('/contact')}>
      Contact
     </Menu.Item>
     <Menu.Item key="blogs" style={{ color: "white" }} onClick={()=> navigate('/blogs')}>
      Blogs
     </Menu.Item>
    </Menu>
   </div>
   <Button
    className="menu-icon"
    type="text"
    icon={<MenuOutlined />}
    onClick={showDrawer}
   />
   <Drawer
    title="Menu"
    placement="right"
    onClose={closeDrawer}
    visible={drawerVisible}
    className="drawer">
    <Menu mode="vertical">
     <Menu.Item key="home">Home</Menu.Item>
     <Menu.Item key="about">About</Menu.Item>
     <Menu.Item key="services">Services</Menu.Item>
     <Menu.Item key="contact">Contact</Menu.Item>
    </Menu>
   </Drawer>
  </div>
 );
};

export default Navbar;
