import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./subheader.css";

const Subheader = () => {
  return (
    <Container className='subContainer'>
    <Row>
    <Col md={6} className='subContainerCols'>
      <h1>Find Your Dream Home</h1>
    </Col>
    <Col md={6} className='subContainerCols'>
      <p>
      Welcome to our estate agent company, where we help you find the perfect home that suits your needs and preferences. With our expertise and personalized service, we make the process of buying or renting a property easy and enjoyable.
      </p>
    </Col>
  </Row>
  </Container>
  );
};

export default Subheader;