import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../../routes';
import Header from '../Header';
import Footer from '../Footer';

import './app.css';

export default class App extends Component {
    shouldComponentUpdate() {
        return true;
    }

    static renderRoutes() {
        return routes.map(route => <Route key={route.path} {...route} />);
    }

    render() {
        return (
            <div className="app">
                <Header />
                <Switch>
                    {App.renderRoutes()}
                </Switch>
                <Footer />
            </div>
        );
    }
}
