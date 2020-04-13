import * as React from 'react';
import * as bem from 'b_';

import './Button.css';

export enum ButtonSizes {
    L = 'l',
    M = 'm',
    S = 's',
}

type Props = {
    size: ButtonSizes;
    type: 'submit' | 'button' | 'reset';
    children: React.ReactNode;
};

const b = bem.with('button');

const Button = (props: Props) => {
    const { size, type, children } = props;

    return (
        <button type={type} className={b({ size })}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    size: ButtonSizes.M,
    type: 'button',
    children: null,
};

export { Button };
