import React from 'react';
import PropTypes from 'prop-types';

import Shoes from '../../components/Shoes';
import CatalogStub from './catalog.stub';

import './catalog.css';

class Catalog extends React.Component {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
        fetchCatalog: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired
    };

    componentDidMount() {
        const { data, fetchCatalog } = this.props;

        if (!data.length) {
            fetchCatalog();
        }
    }

    render() {
        const { isLoading, data } = this.props;

        if (isLoading) {
            return <CatalogStub />;
        }

        return (
            <div className="page centering">
                <div className="container clear">
                    <h2>Catalog</h2>
                    {data.map(d => (
                        <Shoes key={d.slug} {...d} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Catalog;
