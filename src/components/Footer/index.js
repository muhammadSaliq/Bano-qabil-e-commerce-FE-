
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Slider/slider.css"
import "./footer.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {

  return (
    <>
    <div className='footer'>
    <Container  >
      <Row className='contain'>
        <Col><h3>Category</h3></Col>
        <Col><h3>Product</h3></Col>
        <Col><h3>contact us</h3></Col>
      </Row>
      <Row className='contain'>
        <Col>EarBuds</Col>
        <Col>Mobile Stand</Col>
        <Col>Email</Col>
      </Row>
            <Row className='contain'>
        <Col>Wall Decor</Col>
        <Col>Flip-Flop</Col>
        <Col>Phone</Col>
      </Row>
      <Row className='contain'>
        <Col>Shampoo</Col>
        <Col>Bedsheet</Col>
        <Col>address</Col>
      </Row>
      <Row className='contain'>
        <Col className='bottomhead'>Copyright ©2023 All rights reserved | This template is made with by M. Saliq Rafique</Col>
      </Row>
      

    </Container>
    </div>
    </>
  )
}

export default Footer;