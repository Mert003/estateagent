import React ,  { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaStar, FaLinkedin } from 'react-icons/fa';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import man1 from "../../images/man1.jpg";
import man2 from "../../images/man2.jpg";
import woman1 from "../../images/woman1.jpg";
import "./clientreviews.css";

const Clientreviews = () => {
 
  const [maxHeight, setMaxHeight] = useState(200);

  useEffect(() => {
    // Find the maximum height among h3 elements
    const heights = Array.from(document.querySelectorAll('.flex-item h3')).map(
      (h3) => h3.offsetHeight
    );
    const maxHeight = Math.max(...heights);

    // Set the maximum height to state
    console.log(maxHeight);
    setMaxHeight(maxHeight);
  }, []); // Run this effect only once when the component mounts


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
      <Row className='d-flex'>
        {/* Column 1 */}
        <Col sm={12} md={4} className="text-center flex-items" style={{flex:1}}>
        <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} color="gold" />
            ))}
          </div>

          <h3 style={{height:`${maxHeight}px` }}>Our experience with this company has been exceptional.</h3>
         
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
        <Col sm={12} md={4} className="text-center flex-items" style={{flex:1}}>
        <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} color="gold" />
            ))}
          </div>

          <h3 style={{height:`${maxHeight}px` }}>Working with this company has been good change for us.</h3>
          
          <img
            src={woman1} // Replace with your image URL
            alt="Client 2"
            className="rounded-circle mt-3"
          />
          <h5>Jane Smith</h5>
          <p>Marketing Manager, XYZ Inc.    </p>
          <FaLinkedin size={36} />
        </Col>

        {/* Column 3 */}
        <Col sm={12} md={4} className="text-center flex-items" style={{flex:1}}>
        <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} color="gold" />
            ))}
          </div>

          <h3 style={{height:`${maxHeight}px` }} >We highly recommend this company for their expertise.</h3>
          
          <img
            src={man2} // Replace with your image URL
            alt="Client 3"
            className="rounded-circle mt-3"
          />
          <h5>David Johnson</h5>
          <p>CFO, 123 Corporation</p>
          <FaLinkedin size={36} />
        </Col>
      </Row>
    </Container>
  );
};

export default Clientreviews;
