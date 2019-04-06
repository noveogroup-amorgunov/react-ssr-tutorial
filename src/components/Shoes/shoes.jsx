import React from 'react';
import PropTypes from 'prop-types';
import b from 'b_';

import { Link } from 'react-router-dom';

import './shoes.css';

const class_ = b.with('shoes');

const Shoes = (props) => {
    const {
        title,
        image,
        subtitle,
        price,
        url
    } = props;

    return (
        <div className={class_()}>
            <Link to={url}>
                <div
                    className={class_('image')}
                    style={{ backgroundImage: `url(${image})` }}
                />
            </Link>
            <div className={class_('title')}>
                <Link to={url}>{title}</Link>
            </div>
            <div className={class_('category')}>
                {subtitle}
                ,&nbsp;
                <strong>{price}</strong>
            </div>
        </div>
    );
};

Shoes.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default Shoes;
