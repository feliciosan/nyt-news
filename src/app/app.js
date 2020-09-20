import React from 'react';
import AppRoutes from '../routes/routes';
import Header from '../components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <>
            <Header />
            <AppRoutes />
        </>
    );
};

export default App;
