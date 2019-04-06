import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import b from 'b_';

import './header.css';

const class_ = b.with('header');

const Header = () => (
    <div className={class_()}>
        <div className={class_('logo')} />
        <nav className={class_('nav')}>
            <NavLink exact activeClassName="header__nav-item_active" to="/" className={class_('nav-item')}>Home</NavLink>
            <NavLink activeClassName="header__nav-item_active" to="/catalog" className={class_('nav-item')}>Catalog</NavLink>
            <NavLink activeClassName="header__nav-item_active" to="/upcoming" className={class_('nav-item')}>Upcoming</NavLink>
        </nav>
    </div>
);

export default withRouter(Header);
