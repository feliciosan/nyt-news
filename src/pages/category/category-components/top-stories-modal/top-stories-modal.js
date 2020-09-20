import React from 'react';
import PropTypes from 'prop-types';

import { Modal, Button, Row, Col, Image } from 'react-bootstrap';

const TopStoriesModal = ({ show, setShow, post }) => {
    const handleClose = () => {
        setShow(false);
    };

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{post.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col sm={4}>
                        <Image
                            src={post.multimedia && post.multimedia[3].url}
                            thumbnail
                        />
                    </Col>
                    <Col sm={8}>
                        <p className="mt-3">{post.abstract}</p>
                        <strong>{post.byline}</strong>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="info" href={post.short_url} target="_blank">
                    Read more
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

TopStoriesModal.propTypes = {
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
};

export default TopStoriesModal;
