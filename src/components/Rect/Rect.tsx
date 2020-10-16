import * as React from 'react';
import * as bem from 'b_';

import './Rect.css';

type Props = {
    type?: string;
    width?: string;
    height?: string;
    className?: string;
};

const b = bem.with('rect');

function Rect({ width, height, type, className }: Props) {
    const classes = className ? `${b({ type })} ${className}` : b({ type });

    return <div style={{ width, height }} className={classes} />;
}

Rect.defaultProps = {
    type: 'default',
    width: null,
    height: null,
    className: null,
};

export { Rect };
