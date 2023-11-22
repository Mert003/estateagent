import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import man1 from "../../images/mansm.jpg";
import man2 from "../../images/mansm2.jpg";
import woman1 from "../../images/girlsm.jpg";

const MeetOurTeam = () => {
  const teamMembers = [
    {
      image: man1, // Replace with the image URL of the team member
      name: 'John Doe',
      role: 'CEO',
      expertise: 'Leadership',
      description: 'Passionate about driving innovation and leading the team to achieve great success. John brings years of experience in strategic planning and business development.',
    },
    {
      image: woman1, // Replace with the image URL of the team member
      name: 'Jane Smith',
      role: 'Marketing Specialist',
      expertise: 'Digital Marketing',
      description: 'With a creative mindset and a deep understanding of digital marketing trends, Jane crafts compelling campaigns that resonate with our audience and drive engagement.',
    },
    {
      image: man2, // Replace with the image URL of the team member
      name: 'Bob Johnson',
      role: 'Developer',
      expertise: 'Web Development',
      description: 'As a dedicated developer, Bob brings technical expertise to the team. His passion for coding and problem-solving ensures the delivery of high-quality and scalable solutions.',
    },
  ];

  return (
    <Container className='mt-4'>
      {/* Header */}
      <Row>
        <Col className="text-center">
          <h2>Meet Our Team</h2>
        </Col>
      </Row>

      {/* Small Quote */}
      <Row>
        <Col className="text-center">
          <p>Discover the talented individuals who make our team exceptional.</p>
        </Col>
      </Row>

      {/* Team Members */}
      <Row>
        {teamMembers.map((member, index) => (
          <Col key={index} sm={12} md={4} className="text-center mb-4">
            <img
              src={member.image} // Replace with the image URL of the team member
              alt={member.name}
              className="rounded-circle mb-3"
              style={{ width: '150px', height: '150px' , objectFit:"cover" , objectPosition:"center" }}
            />
            <h4>{member.name}</h4>
            <h6>{member.role}</h6>
            <h6>{member.expertise}</h6>
            <p>{member.description}</p>
            <div>
              <a href="#linkedin">
                <FaLinkedin size={24} className="mx-1" />
              </a>
              <a href="#twitter">
                <FaTwitter size={24} className="mx-1" />
              </a>
              <a href='#mail' className='mx-1'>
                <FaEnvelope size={24} />
              </a>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MeetOurTeam;
