import { Dispatch } from 'react';
import { match } from 'react-router';

// global redeclared types
declare global {
    interface Window {
        __INITIAL_STATE__: object;
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
    }

    interface NodeModule {
        hot: any;
    }
}

export type AppRouterProps = {
    dispatch: Dispatch<any>;
    match: match<{ slug: string }>;
};
