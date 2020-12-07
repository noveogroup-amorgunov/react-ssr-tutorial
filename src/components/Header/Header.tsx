import * as React from 'react';
import { NavLink } from 'react-router-dom';
import loadable from '@loadable/component';
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

const preloadPage = (pageName: string) =>
    loadable(() => import(`../../pages/${pageName}/${pageName}`));

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
                        onMouseMove={() => preloadPage(data.page).preload()}
                    >
                        {data.page}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}
