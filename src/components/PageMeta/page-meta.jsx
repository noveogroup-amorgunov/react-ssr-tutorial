import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const cutTags = (text) => {
    return text ? text.replace(/<\/?.+?>/ig, '') : '';
};

class PageMeta extends Component {
    static propTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string
    };

    static defaultProps = {
        title: 'Site',
        description: null,
        image: null
    };

    prepareData() {
        const { title, description, image } = this.props;

        return {
            title: cutTags(title),
            description: cutTags(description).substr(0, 250),
            image
        };
    }

    render() {
        const { title, description, image } = this.prepareData();

        return (
            <Helmet>
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta property="twitter:title" content={title} />
                {Boolean(description) && <meta name="description" content={description} />}
                {Boolean(description) && <meta property="og:description" content={description} />}
                {Boolean(description) && <meta property="twitter:description" content={description} />}
                {Boolean(image) && <meta property="og:image" content={image} />}
            </Helmet>
        );
    }
}

export default PageMeta;
