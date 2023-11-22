import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaStar, FaLinkedin } from 'react-icons/fa';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import man1 from "../../images/man1.jpg";
import man2 from "../../images/man2.jpg";
import woman1 from "../../images/woman1.jpg";
import "./clientreviews.css";

const Clientreviews = () => {
 


  return (
    <Container fluid className='client-container container my-5'>
      {/* Header and Paragraph */}
      <Row>
        <Col className="text-left m-4">
          <h2>Client Reviews</h2>
          <p>
            Read what our clients have to say about their experiences with our services.
          </p>
        </Col>
      </Row>

      {/* Three Columns */}
      <Row>
        {/* Column 1 */}
        <Col md={12} lg={4} className="text-center " >
         <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} color="gold" />
            ))}
          </div>

          <h4>Our experience with this company has been exceptional.</h4>
         
          <img
            src={man1} // Replace with your image URL
            alt="Client 1"
            className="rounded-circle mt-3"
          />
          <h5>John Doe</h5>
          <p>CEO, ABC Company</p>
          <FaLinkedin size={36} />
        
        </Col>

        {/* Column 2 */}
        <Col md={12} lg={4} className="text-center container-column" >
        <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} color="gold" />
            ))}
          </div>

          <h4>Working with this company has been good change for us.</h4>

          <div className='client-elements'>
          <img
            src={woman1} // Replace with your image URL
            alt="Client 2"
            className="rounded-circle mt-3"
          />
          <h5>Jane Smith</h5>
          <p>Marketing Manager, XYZ Inc.    </p>
          <FaLinkedin size={36} />
          </div>
        </Col>

        {/* Column 3 */}
        <Col md={12} lg={4} className="col-md-6 text-center container-column" >
        <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} color="gold" />
            ))}
          </div>

          <h4>We highly recommend this company for their expertise.</h4>

          <div className='client-elements'>
          <img
            src={man2} // Replace with your image URL
            alt="Client 3"
            className="rounded-circle mt-3"
          />
          <h5>David Johnson</h5>
          <p>CFO, 123 Corporation</p>
          <FaLinkedin size={36} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Clientreviews;
