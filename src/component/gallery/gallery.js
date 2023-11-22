import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import house1 from "../../images/house6.jpg";
import house2 from "../../images/house7.jpg";
import house3 from "../../images/house8.jpg";
import house4 from "../../images/house9.jpg";
import house5 from "../../images/house10.jpg";
import house6 from "../../images/house11.jpg";
import "./gallery.css";

const ImageGallerySection = () => {
  return (
    <Container fluid className='container' style={{marginTop:"7rem"}}>
      {/* Header */}
      <Row>
        <Col className="text-left mx-4">
          <h2>Image Gallery</h2>
        </Col>
      </Row>

      {/* Small Quote */}
      <Row>
        <Col className="text-left mx-4">
          <p>
            Explore our collection of stunning photos showcasing our properties and services.
          </p>
        </Col>
      </Row>

      {/* Image Grid */}
      <Row className='gallery-container px-4 '>
        {/* Row 1 */}
        <Col sm={12} md={4} className="mb-3">
          <img
            src={house1} // Replace with your image URL
            alt="Gallery Image 1"
            className="img-fluid"
           
          />
        </Col>
        <Col sm={12} md={4} className="mb-3">
          <img
            src={house2} // Replace with your image URL
            alt="Gallery Image 2"
            className="img-fluid"
        
          />
        </Col>
        <Col sm={12} md={4} className="mb-3">
          <img
            src={house3} // Replace with your image URL
            alt="Gallery Image 3"
            className="img-fluid"
          />
        </Col>

        {/* Row 2 */}
        <Col sm={12} md={4} className="mb-3">
          <img
            src={house4} // Replace with your image URL
            alt="Gallery Image 4"
            className="img-fluid"
          />
        </Col>
        <Col sm={12} md={4} className="mb-3">
          <img
            src={house5} // Replace with your image URL
            alt="Gallery Image 5"
            className="img-fluid"
          />
        </Col>
        <Col sm={12} md={4} className="mb-3">
          <img
            src={house6} // Replace with your image URL
            alt="Gallery Image 6"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ImageGallerySection;
