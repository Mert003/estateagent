import React from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import featureImage from "../../images/house2.jpg";

const Featuresection = () => {
  return (
    <Container fluid className='container mt-5' id='about'>
      <Row>
        {/* First Column */}
        <Col sm={12} md={6} className='align-self-center'>
          <div className="text-center">
            <h6 className="text-muted">Discover</h6>
            <h1>Find Your Dream Home with Us</h1>
            <p>
            We offer a wide range of services for property buying, selling, renting, and property management. Our team of experienced agents will guide you through the process and help you find the perfect property for your needs.
            </p>
            <Button variant="primary" className="mx-2">
              Get Started
            </Button>
            <Button variant="outline-primary">Learn More</Button>
          </div>
        </Col>

        {/* Second Column */}
        <Col sm={12} md={6} className='d-none d-md-flex '>
          <img
            src={featureImage} // Replace with your image URL
            alt="Dream Home"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Featuresection;
