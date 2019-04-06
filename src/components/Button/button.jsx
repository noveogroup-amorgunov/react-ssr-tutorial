import React from 'react';
import PropTypes from 'prop-types';
import b from 'b_';

import './button.css';

const class_ = b.with('button');

const Button = (props) => {
    const { size, type, children } = props;

    return (
        // eslint-disable-next-line react/button-has-type
        <button type={type} className={class_({ size })}>
            {children}
        </button>
    );
};

Button.propTypes = {
    size: PropTypes.string,
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
    children: PropTypes.node
};

Button.defaultProps = {
    size: '',
    type: 'button',
    children: null
};

export default Button;
