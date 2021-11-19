import { Navbar, Nav, NavDropdown, Container, FormControl, Form, Button} from 'react-bootstrap'; 
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
import { Link } from 'react-router-dom'
import imgLogo from './Logo.png'



const NavBar = () => {
    return (
        <Navbar className='navbarHeader'>
            <h2><img id='Logo' src={imgLogo} alt="logo" /></h2>
                <Container className="navClass">
                    <Navbar.Brand href="#">BioPacha</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Nav.Link href="Home">Home</Nav.Link>
                            <NavDropdown title="Productos" id="navbarScrollingDropdown">
                                <Link to='/catalogo' className='linkClass'>
                                    <NavDropdown.Item href="#Catalogo">Catalogo</NavDropdown.Item>
                                </Link>
                                <Link to='/categoria/Frutos secos' className='linkClass'>
                                    <NavDropdown.Item href="#action3">Frutos Secos</NavDropdown.Item>
                                </Link>
                                <Link to='/categoria/Semillas' className='linkClass'>
                                    <NavDropdown.Item href="#action4">Semillas</NavDropdown.Item>
                                </Link>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" >
                        Redes
                        </Nav.Link>
                        <Link to='/Cart'>
                            <CartWidget />
                        </Link>
                    </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
