import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ScienceService from '../../services/science';
import TechnologyService from '../../services/technology';

import { useParams } from 'react-router-dom';

const CategoryContext = createContext();

const serviceActions = {
    technology: TechnologyService.getTopStories,
    science: ScienceService.getTopStories,
};

const CategoryProvider = ({ children }) => {
    const { category } = useParams();
    const [currentCategory, setCurrentCategory] = useState(category);
    const [categoryIsLoading, setCategoryIsLoading] = useState(true);
    const [categoryTitle, setCategoryTitle] = useState('');
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        let unmounted = false;

        (async () => {
            if (!serviceActions[category]) {
                setCurrentCategory(null);
                setCategoryIsLoading(false);
                return;
            }

            const { data } = await serviceActions[category]();

            if (!unmounted) {
                setCategoryList(data.results);
                setCategoryTitle(data.section);
                setCategoryIsLoading(false);
            }
        })();

        return () => (unmounted = true);
    }, [category]);

    return (
        <CategoryContext.Provider
            value={{
                categoryList,
                categoryTitle,
                currentCategory,
                categoryIsLoading,
                setCurrentCategory,
            }}
        >
            {children}
        </CategoryContext.Provider>
    );
};

CategoryProvider.propTypes = {
    children: PropTypes.element.isRequired,
};

export { CategoryContext, CategoryProvider };
