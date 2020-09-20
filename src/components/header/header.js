import React from 'react';

import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Nyt News
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/technology">
                        Technology
                    </Nav.Link>
                    <Nav.Link as={Link} to="/science">
                        Science
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
