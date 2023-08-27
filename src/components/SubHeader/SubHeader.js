import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../SubHeader/Subheader.css';

const SubHeader = () => {

  return (
    <Container>
      <Row>
        <Col className='main col-lg-3 col-sm-6 col-12'>
          <div className='subheaderdiv'>
            <Card >
              <Card.Body>
                <Card.Text>
                  <img src='https://icms-image.slatic.net/images/ims-web/dd27eb9b-9dae-4bf9-ba1e-dd6eef36b678.png' alt='img' className='headimage' />
                  <span>Mart</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col className='main col-lg-3 col-sm-6 col-12'>
          <div className='subheaderdiv'>
            <Card>
              <Card.Body>
                <Card.Text>
                  <img src='https://icms-image.slatic.net/images/ims-web/4f250051-aac7-46bd-9bea-c5b836dea844.png' alt='img' className='headimage' />
                  <span>Fashion</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col className='main col-lg-3 col-sm-6 col-12'>
          <div className='subheaderdiv'>
            <Card>
              <Card.Body>
                <Card.Text>
                  <img src='https://icms-image.slatic.net/images/ims-web/0ed92f69-d596-458b-bcd6-8d2bb69ef911.png' alt='img' className='headimage' />
                  <span>Beauty</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col className='main col-lg-3 col-sm-6 col-12'>
          <div className='subheaderdiv'>
            <Card>
              <Card.Body>
                <Card.Text>
                  <img src='https://icms-image.slatic.net/images/ims-web/d85f0ced-6459-455a-8504-150655bf948c.png' alt='img' className='headimage' />
                  <span>Home & Decor</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>

  )
}

export default SubHeader;