import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";

import {Card , Row , Col, Container} from 'react-bootstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function ContactInfo() {
  return (
    <Container className='mt-5 text-center'>
    <Row >
      <Col md={4}>
        <Card className=" border-0">
          <Card.Body>
            <FaEnvelope size={40} />
            <Card.Title>Email</Card.Title>
            <Card.Text>
              <strong>Please use the form below to send us a message or inquire about our services.</strong>
            </Card.Text>
            <Card.Text>info@example.com</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className=" border-0">
          <Card.Body>
            <FaPhone size={40} />
            <Card.Title>Phone</Card.Title>
            <Card.Text>
              <strong>You can reach us at the phone number provided below.</strong>
            </Card.Text>
            <Card.Text>(123) 456-7890</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="border-0">
          <Card.Body>
            <FaLocationDot size={40} />
            <Card.Title>Office</Card.Title>
            <Card.Text>
              <strong>Visit our office during business hours for any inquiries or assistance.</strong>
            </Card.Text>
            <Card.Text>123 Main Street, Cityville</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </Container>
  );
}

export default ContactInfo;
