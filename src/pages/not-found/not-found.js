import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="mt-4 mb-3">Page not found!</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;
