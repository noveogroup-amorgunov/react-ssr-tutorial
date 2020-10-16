import { useRouteMatch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import {
    getShoes,
    isLoading as isLoadingSelector,
} from 'store/ducks/shoes/selectors';
import { getHomepage } from 'store/ducks/homepage/selectors';
import { fetchShoes as fetchShoesActionCreator } from 'store/ducks/shoes/actions';
import { fetchHomepage as fetchHomepageActionCreator } from 'store/ducks/homepage/actions';

export function useSneakers() {
    const match = useRouteMatch<{ slug: string }>();

    const { popular } = useSelector(getHomepage);
    const isLoading = useSelector(isLoadingSelector);
    const data = useSelector(getShoes);
    const dispatch = useDispatch();
    const fetchShoes = React.useCallback(
        (slug: string) => dispatch(fetchShoesActionCreator(slug)),
        [dispatch]
    );
    const fetchHomepage = React.useCallback(
        () => dispatch(fetchHomepageActionCreator()),
        [dispatch]
    );

    return {
        match,
        popular,
        isLoading,
        data,
        fetchShoes,
        fetchHomepage,
    };
}
