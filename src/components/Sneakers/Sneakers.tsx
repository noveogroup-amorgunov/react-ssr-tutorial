import * as React from 'react';
import * as bem from 'b_';
import { Link } from 'react-router-dom';

import './Sneakers.css';

const b = bem.with('sneakers');

type Props = {
    title: string;
    image: string;
    subtitle: string;
    price: string;
    url: string;
};

export function Sneakers(props: Props) {
    const { title, image, subtitle, price, url } = props;

    return (
        <div className={b()}>
            <Link to={url}>
                <div
                    className={b('image')}
                    style={{ backgroundImage: `url(${image})` }}
                />
            </Link>
            <div className={b('title')}>
                <Link to={url}>{title}</Link>
            </div>
            <div className={b('category')}>
                {subtitle}
                ,&nbsp;
                <strong>{price}</strong>
            </div>
        </div>
    );
}
