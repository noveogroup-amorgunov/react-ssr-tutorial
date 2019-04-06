import React from 'react';
import PropTypes from 'prop-types';
import b from 'b_';

import './rect.css';


const class_ = b.with('rect');

const Rect = ({ width, height, type, className }) => {
    const classes = className ? `${class_({ type })} ${className}` : class_({ type });

    return (
        <div style={{ width, height }} className={classes} />
    );
};

Rect.propTypes = {
    type: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string
};

Rect.defaultProps = {
    type: 'default',
    width: null,
    height: null,
    className: null
};

export default Rect;
