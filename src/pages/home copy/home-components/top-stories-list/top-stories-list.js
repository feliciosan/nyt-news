import React, { useContext } from 'react';
import TopStoriesListItem from '../top-stories-list-item/top-stories-list-item';

import { CategoryContext } from '../../../../contexts/category/category';
import { Loading } from '../../../../styleskk/default/default';
import { StoriesList } from './top-stories-list.styles';

const TopStoriesList = () => {
    const { categoryList, categoryIsLoading } = useContext(CategoryContext);

    return (
        <div>
            {categoryIsLoading ? (
                <Loading />
            ) : (
                <StoriesList>
                    {categoryList.length &&
                        categoryList.map((post) => (
                            <TopStoriesListItem key={post.uri} post={post} />
                        ))}
                </StoriesList>
            )}
        </div>
    );
};

export default TopStoriesList;
