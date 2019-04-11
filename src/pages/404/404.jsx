import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// Component is used for passing http status for server side rendering;
// For example, if page isn't found, client give page with 404 status code
const Status = ({ code, children }) => {
    const render = ({ staticContext }) => {
        if (staticContext) {
            // eslint-disable-next-line no-param-reassign
            staticContext.status = code;
        }

        return children;
    };

    return (
        <Route render={render} />
    );
};

Status.propTypes = {
    code: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired
};

const NotFoundPage = () => {
    return (
        <Status code={404}>
            <div className="page centering">
                <div className="container clear">
                    <h1>Page not found</h1>
                </div>
            </div>
        </Status>
    );
};

export default NotFoundPage;
