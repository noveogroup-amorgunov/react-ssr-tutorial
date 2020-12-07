import loadable from '@loadable/component';
import { fetchCatalog } from 'store/ducks/catalog/actions';
import { fetchHomepage } from 'store/ducks/homepage/actions';
import { fetchShoes } from 'store/ducks/shoes/actions';
import { RouterFetchDataArgs } from 'types';

const CatalogPage = loadable(() => import('./pages/Catalog/Catalog'));
const UpcomingPage = loadable(() => import('./pages/Upcoming/Upcoming'));
const SneakersPage = loadable(() => import('./pages/Sneakers/Sneakers'));
const HomePage = loadable(() => import('./pages/Home/Home'));
const NotFoundPage = loadable(() => import('./pages/404/404'));

/**
 * Routes are moved to a separate file,
 * so that you can use the asyncFetchData method on the component on the server (by url path)
 * which load all the necessary data for rendering the page.
 */
export default [
    {
        path: '/',
        component: HomePage,
        exact: true,
        fetchData({ dispatch }: RouterFetchDataArgs) {
            dispatch(fetchHomepage());
        },
    },
    {
        path: '/catalog',
        component: CatalogPage,
        exact: true,
        fetchData({ dispatch }: RouterFetchDataArgs) {
            dispatch(fetchCatalog());
        },
    },
    {
        path: '/sneakers/:slug',
        component: SneakersPage,
        exact: true,
        fetchData({ dispatch, match }: RouterFetchDataArgs) {
            dispatch(fetchShoes(match.params.slug));
            dispatch(fetchHomepage());
        },
    },
    {
        path: '/upcoming',
        component: UpcomingPage,
        exact: true,
    },
    {
        path: '*',
        component: NotFoundPage,
        exact: true,
    },
];
