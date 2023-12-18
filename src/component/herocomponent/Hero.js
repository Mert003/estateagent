// Hero.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";

const Hero = () => {
  

  return (
    <div className='hero d-flex justify-content-center align-items-center' id='home'>
    <Container fluid className="container pt-5 text-center " >
      <Row className='Row  '>
        <Col md={6} className='col'>
          <h1>Discover Your Dream Home Today</h1>
          <p>
          Welcome to our estate agency, where we make finding your dream home a breeze. With our extensive listings and expert agents, we'll help you find the perfect property for you.
          </p>
          <div>
            <Button variant="primary">Search</Button>{' '}
            <Button variant="secondary">Content</Button>
          </div>
        </Col>
        
      </Row>
    </Container>
    </div>
  );
};

export default Hero;
