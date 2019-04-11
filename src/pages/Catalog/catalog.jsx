import React from 'react';
import PropTypes from 'prop-types';

import Shoes from '../../components/Shoes';
import PageMeta from '../../components/PageMeta';
import { fetchCatalog as fetchPageData } from '../../ducks/catalog/actions';
import CatalogStub from './catalog.stub';

import './catalog.css';

class Catalog extends React.Component {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
        fetchCatalog: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired
    };

    static asyncFetchData({ dispatch }) {
        dispatch(fetchPageData());
    }

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
                <PageMeta
                    title="Catalog page"
                    description="See awesome collection of snickers"
                />
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
