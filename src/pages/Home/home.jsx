import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Shoes from '../../components/Shoes';
import HomeStub from './home.stub';

import './home.css';

class Home extends React.Component {
    static propTypes = {
        data: PropTypes.shape({
            popular: PropTypes.arrayOf(PropTypes.object),
            newest: PropTypes.arrayOf(PropTypes.object)
        }).isRequired,
        fetchHomepage: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired
    };

    componentDidMount() {
        const { data, fetchHomepage } = this.props;

        if (!data.popular.length) {
            fetchHomepage();
        }
    }

    render() {
        const { isLoading, data } = this.props;

        if (isLoading) {
            return <HomeStub />;
        }

        return (
            <div className="page centering">
                <div className="container clear">
                    <h2>Popular</h2>
                    {data.popular.map(d => (
                        <Shoes key={d.slug} {...d} />
                    ))}
                </div>

                <div className="container">
                    <h2>Newest</h2>
                    <div className="clear">
                        {data.newest.map(d => (
                            <Shoes key={d.slug} {...d} />
                        ))}
                    </div>
                    <div className="container__more">
                        <Link to="/catalog"><Button>See more</Button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
