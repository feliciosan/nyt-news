import React from 'react';
import Home from '../pages/home/home';
import Category from '../pages/category/category';
import NotFound from '../pages/not-found/not-found';

import { Redirect, Route, Switch } from 'react-router-dom';

const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exat path="/not-found" component={NotFound} />
            <Route exact path="/:category" component={Category} />
            <Redirect to="not-found" />
        </Switch>
    );
};

export default AppRoutes;
