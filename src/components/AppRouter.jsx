import React, { useContext } from 'react';
import { Route, Routes } from 'react-router';
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes } from '../routes';
import Loader from './UI/loader/Loader';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader />
    }

    return (
        <div>
            <Routes>
                {isAuth
                    ? privateRoutes.map(route =>
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.component}
                            exact={route.exact} />)
                    : publicRoutes.map(route =>
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.component}
                            exact={route.exact} />)
                }
            </Routes>
        </div>
    );
}

export default AppRouter;
