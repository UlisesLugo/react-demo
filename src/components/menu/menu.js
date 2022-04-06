import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const Menu = (props) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React Demo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Nosotros</Nav.Link>
                        <NavDropdown title="Tic Tac Toe" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Gato</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Cruz</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Tablero</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Historia</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;