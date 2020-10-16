import * as React from 'react';
import { NavLink } from 'react-router-dom';
import * as bem from 'b_';

import './Header.css';

enum PageName {
    Home = 'Home',
    Catalog = 'Catalog',
    Upcoming = 'Upcoming',
}

const menu = [
    { to: '/', exact: true, page: PageName.Home },
    { to: '/catalog', exact: true, page: PageName.Catalog },
    { to: '/upcoming', exact: true, page: PageName.Upcoming },
];

const b = bem.with('header');

export function Header() {
    return (
        <div className={b()}>
            <div className={b('logo')} />
            <nav className={b('nav')}>
                {menu.map(data => (
                    <NavLink
                        key={data.to}
                        exact={data.exact}
                        activeClassName="header__nav-item_active"
                        to={data.to}
                        className={b('nav-item')}
                    >
                        {data.page}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}
