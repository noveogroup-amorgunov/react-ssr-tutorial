import { Dispatch } from 'react';
import { match } from 'react-router';
import { State, AppStore, ReduxAction } from './redux';
import { Sneakers } from './models';

export type RouterFetchDataArgs = {
    dispatch: Dispatch<ReduxAction>;
    match: match<{ slug: string }>;
};

export { Sneakers, State, AppStore, ReduxAction };
