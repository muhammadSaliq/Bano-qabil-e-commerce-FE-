import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { products } from '../data/products';
import "../pages/Home/home.css"
import { Link } from "react-router-dom";

function Example() {
  return (
    <Container>
      <Row>
      <Col className='main col-lg-3 col-sm-6 col-12'>
        
        <div>
            <div className="wrapper">
                {products.map((item, index) => {
                    return (
                        <Link to={`/product/${item.productname}`}>
                            <div key={index} className="productcard">
                                <img src={item.imamge} alt="image" />
                                <div className="carding">
                                    <h2>{item.productname}</h2>
                                    <p>{item.price}</p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>

        </Col>
        
      </Row>
      
    </Container>
  );
}

export default Example;