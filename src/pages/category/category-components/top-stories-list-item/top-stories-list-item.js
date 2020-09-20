import React from 'react';
import PropTypes from 'prop-types';

import { Card, Button } from 'react-bootstrap';

const TopStoriesListItem = ({ post, handleClick }) => {
    return (
        <Card>
            <Card.Header data-testid="top-stories-item-byline">
                {post.byline}
            </Card.Header>
            <Card.Body>
                <Card.Title data-testid="top-stories-item-title">
                    {post.title}
                </Card.Title>
                <Card.Text data-testid="top-stories-item-abstract">
                    {post.abstract}
                </Card.Text>
                <Button
                    data-testid="top-stories-item-button"
                    onClick={handleClick}
                    variant="info"
                >
                    Open news
                </Button>
            </Card.Body>
        </Card>
    );
};

TopStoriesListItem.propTypes = {
    post: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default TopStoriesListItem;
