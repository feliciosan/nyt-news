import React, { useContext } from 'react';
import TopStoriesList from './category-components/top-stories-list/top-stories-list';

import {
    CategoryContext,
    CategoryProvider,
} from '../../contexts/category/category';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

const CategoryPage = () => {
    const { currentCategory, categoryTitle, categoryIsLoading } = useContext(
        CategoryContext
    );

    if (!currentCategory) {
        return <Redirect to="/not-found" />;
    }

    return (
        <Container>
            {categoryIsLoading && (
                <div className="text-center">
                    <Badge variant="secondary" className="mt-4">
                        Loading...
                    </Badge>
                </div>
            )}

            {!categoryIsLoading && currentCategory && (
                <>
                    <Row>
                        <Col>
                            <h2 className="mt-4 mb-4">{categoryTitle}:</h2>
                        </Col>
                    </Row>
                    <TopStoriesList />
                </>
            )}
        </Container>
    );
};

const Category = () => (
    <CategoryProvider>
        <CategoryPage />
    </CategoryProvider>
);

export default Category;
