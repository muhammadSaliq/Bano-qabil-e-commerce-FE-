import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Cartcontext from '../context/Cartcontext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "../components/header.css"
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import  Badge  from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  const cartcontext = useContext(Cartcontext);
  const { cartitems } = cartcontext;
  const navigate = useNavigate();


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to={"/"}>
          <img src='https://logos-world.net/wp-content/uploads/2022/05/Daraz-Logo.png' alt='img' className='mainimage' />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
     <div>
     </div>
          </Nav>
        </Navbar.Collapse>
        
        <div >

            <IconButton onClick={() => navigate('/cart')} >
              <Badge badgeContent={cartitems.length} color='primary'  >
              <ShoppingCartIcon />
              </Badge>
              </IconButton>
              </div>    
      </Container>
      
    </Navbar>
  );
}

export default Header;