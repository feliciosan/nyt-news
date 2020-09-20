import React, { useContext, useState } from 'react';
import TopStoriesListItem from '../top-stories-list-item/top-stories-list-item';
import TopStoriesModal from '../top-stories-modal/top-stories-modal';

import { Row, Col } from 'react-bootstrap';
import { CategoryContext } from '../../../../contexts/category/category';

const TopStoriesList = () => {
    const { categoryList } = useContext(CategoryContext);
    const [show, setShow] = useState(false);
    const [currentPost, setCurrentPost] = useState({});

    const handleShow = (post) => {
        setCurrentPost(post);
        setShow(true);
    };

    return (
        <>
            <Row>
                {categoryList.length &&
                    categoryList.map((post) => (
                        <Col key={post.uri} sm={12} className="mb-4">
                            <TopStoriesListItem
                                post={post}
                                handleClick={() => handleShow(post)}
                            />
                        </Col>
                    ))}
            </Row>
            <TopStoriesModal show={show} setShow={setShow} post={currentPost} />
        </>
    );
};

export default TopStoriesList;
