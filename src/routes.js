import loadable from '@loadable/component';

const CatalogPage = loadable(() => import('./pages/Catalog'));
const UpcomingPage = loadable(() => import('./pages/Upcoming'));
const ShoesPage = loadable(() => import('./pages/Shoes'));
const HomePage = loadable(() => import('./pages/Home'));
const NotFoundPage = loadable(() => import('./pages/404'));

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
