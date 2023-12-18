import React from 'react';
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";




const faqData = [
    {
      question: 'How can I list my property with your agency?',
      answer: 'To list your property with us, please visit our website and fill out the property listing form. Our team will contact you to discuss the details.',
    },
    {
      question: 'What types of properties do you deal with?',
      answer: 'We deal with a variety of properties, including residential homes, commercial spaces, and land. Whether you want to buy, sell, or rent, we have you covered.',
    },
    {
      question: 'How can I schedule a property viewing?',
      answer: 'To schedule a property viewing, you can contact our office through phone or email. Our agents will arrange a convenient time for you to visit the property.',
    },
    {
      question: 'What documents do I need to provide to sell my property?',
      answer: 'To sell your property, you will need to provide essential documents such as property deeds, recent utility bills, and identification. Our team will guide you through the process.',
    },
    {
      question: 'Do you offer property management services?',
      answer: 'Yes, we offer property management services. Our team can help you with tenant screening, rent collection, maintenance, and other aspects of property management.',
    },
  ];
  

function FAQSection() {
  return (
    <div className='container my-5' id='qa'>
      <h2>Frequently Asked Questions</h2>
      <p>Here are some common questions about our services. If you have additional inquiries, feel free to contact us.</p>
      <Accordion defaultActiveKey="0">
        {faqData.map((item, index) => (
          <Accordion.Item key={index} eventKey={index.toString()}>
            <Accordion.Header>
              <strong>{`Q: ${item.question}`}</strong>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <strong>A:</strong> {item.answer}
              </p>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default FAQSection;
