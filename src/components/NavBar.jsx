import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import logo from '../assets/logo.svg'


const NavBar = () => {

    return (
    <Navbar >
        <Container fluid="sm">
          <Navbar.Brand href="#home">
            <img 
            className='logo'
            src={logo}
            width="250"
            height="100"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="d-flex justify-content-end">
            <Navbar.Text>
              <a href="#" id="n-link">¿Conseguimos tu cambio?</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}


export default NavBar;