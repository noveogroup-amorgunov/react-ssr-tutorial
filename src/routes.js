import CatalogPage from './pages/Catalog';
import UpcomingPage from './pages/Upcoming';
import ShoesPage from './pages/Shoes';
import HomePage from './pages/Home';
import NotFoundPage from './pages/404';

/**
 * Routes are moved to a separate file,
 * so that you can use the asyncFetchData method on the component on the server (by path)
 * which loads all the necessary data for rendering the page.
 */
export default [
    {
        path: '/',
        component: HomePage,
        exact: true
    },
    {
        path: '/catalog',
        component: CatalogPage,
        exact: true
    },
    {
        path: '/shoes/:slug',
        component: ShoesPage,
        exact: true
    },
    {
        path: '/upcoming',
        component: UpcomingPage,
        exact: true
    },
    {
        path: '*',
        component: NotFoundPage,
        exact: true
    }
];
