import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./statistic.css";

const Statictic = () => {
  return (
    <Container fluid className='stat-container container text-center'>
      {/* Two Columns */}
      <Row>
        {/* Left Column */}
        <Col sm={12} md={6} className='align-self-center'>
          <h2>Impressive Company Statistics</h2>
        </Col>

        {/* Right Column */}
        <Col sm={12} md={6} className='align-self-center'>
          <p>
          With years of experience and a high number of satisfied clients, we are the top choice for all your real estate needs.
          </p>

          {/* Sub-Columns */}
          <Row>
            {/* Sub-Column 1 */}
            <Col sm={6}>
              <h4>132+</h4>
              <p>Homes sold</p>
            </Col>

            {/* Sub-Column 2 */}
            <Col sm={6}>
              <h4>%97</h4>
              <p>Satisfied client</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Statictic;
