import React, { useContext } from 'react';
import TopStoriesList from './home-components/top-stories-list/top-stories-list';

import {
    Container,
    PageHeader,
    PageTitle,
} from '../../styleskk/default/default';
import { PageContent } from './home-styles';
import { CategoryContext } from '../../contexts/category/category';

const Home = () => {
    const { currentCategory, categoryTitle } = useContext(CategoryContext);

    return (
        <Container>
            <PageHeader>
                <div>
                    {currentCategory ? (
                        <PageTitle>Section: {categoryTitle}</PageTitle>
                    ) : (
                        <PageTitle>Categories:</PageTitle>
                    )}
                </div>
            </PageHeader>
            <PageContent>
                {currentCategory ? <TopStoriesList /> : <h1>Selc</h1>}
            </PageContent>
        </Container>
    );
};

export default Home;
