import * as React from 'react';
import Slider from 'react-slick';
import * as bem from 'b_';
import {
    Page,
    Button,
    ButtonSizes,
    PageMeta,
    SneakersList,
    PageContainer,
} from 'components';
import { SneakersStub } from './Sneakers.stub';
import { useSneakers } from './Sneakers.hook';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Sneakers.css';

const b = bem.with('sneakers-page');

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    className: 'sneakers-page__slider',
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            },
        },
    ],
};

function SneakersPage() {
    const {
        match,
        popular,
        isLoading,
        data,
        fetchShoes,
        fetchHomepage,
    } = useSneakers();

    React.useEffect(() => {
        if (!data || data.slug !== match.params.slug) {
            fetchShoes(match.params.slug);
        }
    }, [match]);

    React.useEffect(() => {
        if (!popular.length) {
            fetchHomepage();
        }
    }, []);

    if (isLoading || !data) {
        return <SneakersStub />;
    }

    const { title, category, price, images, description } = data;

    return (
        <Page mix={b()}>
            <PageMeta
                title={title}
                description={description}
                image={images[0]}
            />

            <PageContainer>
                <div className={b('category')}>{category}</div>
                <h1>{title}</h1>
                <strong>{price}</strong>
                <Slider {...settings}>
                    {images.map(url => (
                        <div key={url}>
                            <img alt="" className={b('image')} src={url} />
                        </div>
                    ))}
                </Slider>
                <div className={b('description')}>{description}</div>
                <Button size={ButtonSizes.L}>Buy</Button>
            </PageContainer>
            {Boolean(popular.length) && (
                <PageContainer>
                    <h2>See also</h2>
                    <SneakersList items={popular} />
                </PageContainer>
            )}
        </Page>
    );
}

export default SneakersPage;
