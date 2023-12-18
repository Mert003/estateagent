import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-scroll";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import logo from "../../images/logo.png";

function Footer() {
  return (
    <footer className="footer mt-2 bg-light w-100 text-center">
      <Row className="py-3">
        <Col md={2}>
          {/* Logo Column */}
          <img src={logo} alt="Logo" className="footer-logo img-fluid " width={100} />
        </Col>
        <Col md={2}>
          {/* About Us Column */}
          <h5>Menu</h5>
          <ul className="list-unstyled">
            <Link activeClass="active" to="home" offset={50}><li>Home</li></Link>

            <Link activeClass="active" to="services" offset={50}><li>Services</li></Link>
            <Link activeClass="active" to="gallery" offset={50}><li>Gallery</li></Link>
          </ul>
        </Col>
        <Col md={2}>
          {/* Privacy Policy Column */}
          <h5>Privacy Policy</h5>
          <ul className="list-unstyled">
            <li><a href="/terms" className="text-decoration-none">Terms of Service</a></li>
            <li><a href="/cookies" className="text-decoration-none">Cookie Policy</a></li>
            <li><a href="/support" className="text-decoration-none">Support</a></li>
          </ul>
        </Col>
        <Col md={2}>
          {/* Social Media Column */}
          <h5>Social Media</h5>
          <ul className="list-unstyled">
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none"><FaTwitter /> Twitter</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none"><FaLinkedin /> LinkedIn</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none"><FaFacebook /> Facebook</a></li>
          </ul>
        </Col>
        <Col md={4}>
          {/* Send Email Column */}
          <h5>Send Email</h5>
          <p>Contact us at: <a href="mailto:info@example.com" className="text-decoration-none">info@example.com</a></p>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
