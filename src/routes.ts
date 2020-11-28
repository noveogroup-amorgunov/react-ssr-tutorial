import { fetchCatalog } from 'store/ducks/catalog/actions';
import { fetchHomepage } from 'store/ducks/homepage/actions';
import { fetchShoes } from 'store/ducks/shoes/actions';
import { RouterFetchDataArgs } from 'types';

import CatalogPage from 'pages/Catalog/Catalog';
import UpcomingPage from 'pages/Upcoming/Upcoming';
import SneakersPage from 'pages/Sneakers/Sneakers';
import HomePage from 'pages/Home/Home';
import NotFoundPage from 'pages/404/404';

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
