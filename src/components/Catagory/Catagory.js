import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Catagory/catagory.css"
const Catagory = () => {

  return (
    <>
      <h4 className='heading'>Catagories</h4>
      <Container>
        <Row>
          <Col className='main col-lg-2 col-sm-4 col-6'>
            <div className='categorydiv'>
              <Card >
                <Card.Body>
                  <Card.Text>
                    <img src='https://static-01.daraz.pk/p/3caf1e1d49dd6a8eecf57129660e35f5.jpg' alt='img' className="catimage" />
                    <p className='textdiv'>Milk Powder</p>

                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col className='main col-lg-2 col-sm-4 col-6'>

            <div className='categorydiv'>
              <Card >

                <Card.Body>
                  <Card.Text>
                    <img src='https://static-01.daraz.pk/p/b0459ca64d24b0dc59abfa9393a2dc3e.jpg' alt='img' className="catimage" />
                    <p className='textdiv'>Black tea</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col className='main col-lg-2 col-sm-4 col-6'>
            <div className='categorydiv'>
              <Card >
                <Card.Body>
                  <Card.Text>
                    <img src='https://static-01.daraz.pk/p/0650ab5ccb6314a66f6fa1b7d7035cfd.jpg' alt='img' className="catimage" />
                    <p className='textdiv'>Body soap</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col className='main col-lg-2 col-sm-4 col-6'>

            <div className='categorydiv'>
              <Card >

                <Card.Body>
                  <Card.Text>
                    <img src='https://static-01.daraz.pk/p/1d782791a45f9e701f84b6defbd908e0.jpg' alt='img' className="catimage" />
                    <p className='textdiv'>Shampoo</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col className='main col-lg-2 col-sm-4 col-6'>
            <div className='categorydiv'>
              <Card >
                <Card.Body>
                  <Card.Text>
                    <img src='https://static-01.daraz.pk/p/2cc22cfbd34bf385dc8ffd233dcb5a1d.jpg' alt='img' className="catimage" />
                    <p className='textdiv'>Sneakers</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col className='main col-lg-2 col-sm-4 col-6'>
            <div className='categorydiv'>
              <Card >
                <Card.Body>
                  <Card.Text>
                    <img src='https://static-01.daraz.pk/p/5fbf2f1af339ff0434c26579a50e28e9.jpg' alt='img' className="catimage" />
                    <p className='textdiv'>Hand straightner</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='main col-lg-2 col-sm-4 col-6'>
            <div className='categorydiv'>
              <Card >
                <Card.Body>
                  <Card.Text>
                    <img src='https://static-01.daraz.pk/p/a66830566af7a19bf634e5b2629dcb54.jpg' alt='img' className="catimage" />
                    <p className='textdiv'>storage</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col className='main col-lg-2 col-sm-4 col-6'>
            <div className='categorydiv'>
              <Card >
                <Card.Body>
                  <Card.Text>
                    <img src='https://static-01.daraz.pk/p/959c70084b93e6bd9ebe0dff32e5bd43.jpg' alt='img' className="catimage" />
                    <p className='textdiv'>Rings</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col className='main col-lg-2 col-sm-4 col-6'>
            <div className='categorydiv'>
              <Card >
                <Card.Body>
                  <Card.Text>
                    <img src='https://static-01.daraz.pk/p/66feaa8a68a2efbf7c879c99966ecd8b.jpg' alt='img' className="catimage" />
                    <p className='textdiv'>Wall Decor</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col className='main col-lg-2 col-sm-4 col-6'>
            <div className='categorydiv'>
              <Card >
                <Card.Body>
                  <Card.Text>
                    <img src='https://static-01.daraz.pk/p/33579a96f9cc1ad8127cbc85a78b20d0.jpg' alt='img' className="catimage" />
                    <p className='textdiv'>Coffee Table</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col className='main col-lg-2 col-sm-4 col-6'>
            <div className='categorydiv'>
              <Card >
                <Card.Body>
                  <Card.Text>
                    <img src='https://static-01.daraz.pk/p/aa4b9c005f2a49d328dabf13829d7a53.jpg' alt='img' className="catimage" />
                    <p className='textdiv'>EarBuds</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col className='main col-lg-2 col-sm-4 col-6'>
            <div className='categorydiv'>
              <Card >
                <Card.Body>
                  <Card.Text>
                    <img src='https://static-01.daraz.pk/p/f4c066f5a554d11cb5be3a901b6554fb.jpg' alt='img' className="catimage" />
                    <p className='textdiv'>Smartwatches</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Catagory;