import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/Home';
import UpcomingPage from '../../pages/Upcoming';
import CatalogPage from '../../pages/Catalog';
import ShoesPage from '../../pages/Shoes';
import Header from '../Header';
import Footer from '../Footer';

import './app.css';

export default class App extends Component {
    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <div className="app">
                <Header />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/upcoming" exact component={UpcomingPage} />
                    <Route path="/catalog" exact component={CatalogPage} />
                    <Route path="/shoes/:slug" exact component={ShoesPage} />
                </Switch>
                <Footer />
            </div>
        );
    }
}
