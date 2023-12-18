import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaHome, FaBuilding, FaCity } from 'react-icons/fa';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import house1 from "../../images/house3.jpg";
import house2 from "../../images/house4.jpg";
import house3 from "../../images/house5.jpg";

const Howitworks = () => {
  return (
    <Container fluid className='container mt-5' id='services'>
      {/* Header */}
      <Row>
        <Col className="text-center">
          <h2>Discover the Perfect Home for You</h2>
        </Col>
      </Row>

      {/* Three Columns */}
      <Row className="text-center mt-2 d-flex " >
        {/* Column 1 */}
        <Col sm={12} md={4} className='my-3 my-md-0 d-flex'>
          <Card >
            <Card.Img
              variant="top"
              src={house1} // Replace with your image URL
              alt="Feature 1"
            />
            <Card.Body className='d-flex flex-column'>
              <Card.Title>Sell Your Property with Ease</Card.Title>
              <Card.Text>
              Whether you're buying, selling, or renting, our team is here to guide you through the process.
              </Card.Text>
              <div className='col-4 col-md-9 col-lg-5 mt-auto mx-auto'>   <Button variant="primary" className='p-0 w-100 text-center'>Learn More</Button></div>
             </Card.Body>
          </Card>
        </Col>

        {/* Column 2 */}
        <Col sm={12} md={4} className='my-3 my-md-0 d-flex  '>
          <Card >
            <Card.Img
              variant="top"
              src={house2} // Replace with your image URL
              alt="Feature 2"
            />
            <Card.Body className='d-flex flex-column'>
              <Card.Title>Find Your Dream Rental</Card.Title>
              <Card.Text>
              Looking for a place to rent? We have a wide selection of properties to choose from.
             
              </Card.Text>
              <div className='col-4 col-md-9 col-lg-5 mt-auto mx-auto'>   <Button variant="primary" className='p-0 w-100 text-center'>Learn More</Button></div>
          </Card.Body>
          </Card>
        </Col>

        {/* Column 3 */}
        <Col sm={12} md={4} className='my-3 my-md-0 d-flex'>
          <Card>
            <Card.Img
              variant="top"
              src={house3} // Replace with your image URL
              alt="Feature 3"
            />
            <Card.Body className='d-flex flex-column'>
              <Card.Title>Invest in Real Estate</Card.Title>
              <Card.Text>
                Ready to invest in real estate? Our experienced agents will help you find the perfect opportunity.
              </Card.Text>
           <div className='col-4 col-md-9 col-lg-5 mt-auto mx-auto'>   <Button variant="primary" className='p-0 w-100 text-center'>Learn More</Button></div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Howitworks;
