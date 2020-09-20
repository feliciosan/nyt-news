import React from 'react';
import TopicService from '../../services/topic';

import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h2 className="mt-4 mb-4">Categories:</h2>
                </Col>
            </Row>
            <Row>
                {TopicService.getTopics().map((topic) => (
                    <Col key={topic.link} sm={6} className="mb-3">
                        <Card className="text-center">
                            <Card.Header>Featured</Card.Header>
                            <Card.Body>
                                <Card.Title>{topic.title}</Card.Title>
                                <Card.Text>
                                    Get the latest {topic.title} News
                                </Card.Text>
                                <Button
                                    as={Link}
                                    to={topic.link}
                                    variant="info"
                                >
                                    Check out the news
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Home;
