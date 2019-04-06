import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { withRouter } from 'react-router-dom';
import b from 'b_';

import Button from '../../components/Button';
import Shoes from '../../components/Shoes';
import ShoesStub from './shoes.stub';

import './shoes.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const class_ = b.with('shoes-page');
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    className: 'shoes-page__slider',
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
            }
        }
    ]
};

class ShoesPage extends React.Component {
    static propTypes = {
        data: PropTypes.shape({
            title: PropTypes.string,
            category: PropTypes.string,
            price: PropTypes.string,
            images: PropTypes.arrayOf(PropTypes.string),
            description: PropTypes.string
        }).isRequired,
        fetchShoes: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
        popular: PropTypes.arrayOf(PropTypes.object).isRequired,
        match: PropTypes.object.isRequired // todo
    };

    componentDidMount() {
        const { fetchShoes, match, data } = this.props;

        if (data.slug !== match.params.slug) {
            fetchShoes(match.params.slug);
        }
    }

    componentDidUpdate() {
        const { fetchShoes, match, data } = this.props;

        if (data.slug !== match.params.slug) {
            fetchShoes(match.params.slug);
        }
    }

    render() {
        const { data, popular, isLoading } = this.props;
        const {
            title,
            category,
            price,
            images,
            description
        } = data;

        if (isLoading || !data.title) {
            return (<ShoesStub />);
        }

        return (
            <div className={`page centering ${class_()}`}>
                <div className="container clear">
                    <div className={class_('category')}>{category}</div>
                    <h1>{title}</h1>
                    <strong>{price}</strong>
                    <Slider {...settings}>
                        {images.map(url => (
                            <div key={url}>
                                <img alt="" className={class_('image')} src={url} />
                            </div>
                        ))}
                    </Slider>
                    <div className={class_('description')}>{description}</div>
                    <Button size="xl">Buy</Button>
                </div>
                {Boolean(popular.length) && (
                    <div className="container clear">
                        <h2>See also</h2>
                        {popular.map(d => (
                            <Shoes key={d.slug} {...d} />
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(ShoesPage);
