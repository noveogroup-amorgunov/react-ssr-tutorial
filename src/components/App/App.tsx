import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { Header, Footer } from 'components';

import CatalogPage from '../../pages/Catalog/Catalog';
import UpcomingPage from '../../pages/Upcoming/Upcoming';
import SneakersPage from '../../pages/Sneakers/Sneakers';
import HomePage from '../../pages/Home/Home';
import NotFoundPage from '../../pages/404/404';

import './App.css';

function App() {
    return (
        <div className="app">
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/catalog" component={CatalogPage} exact />
                <Route path="/sneakers/:slug" component={SneakersPage} exact />
                <Route path="/upcoming" component={UpcomingPage} exact />
                <Route path="*" component={NotFoundPage} exact />
            </Switch>
            <Footer />
        </div>
    );
}

const Component = hot(App);

export { Component as App };
