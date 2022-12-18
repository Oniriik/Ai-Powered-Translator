import { Fragment } from 'react';
import { Routes as Switch, RouteObject, Route } from 'react-router-dom';

import { routesConfig } from './routesConfig';

const routeRender = (route: RouteObject) => (
    <Fragment key={route.path}>
        {route.index && (
            <Route index element={route.element} />
        )}
        {!route.children && (
            <Route path={route.path} element={route.element} />
        )}
        {route.children && (
            <Route path={route.path} element={route.element} >
                {route.children.map((child) => routeRender(child))}
            </Route>
        )}
    </Fragment>
);

export const Routes = () => {
    return (
        <Switch>
            {routesConfig.map(routeRender)}
        </Switch>
    );
};
