import * as React from 'react';
import { connect } from 'react-redux';
import * as bem from 'b_';
import { State, Sneakers as SneakersType } from 'types';
import { PageMeta, SneakersList, Page, PageContainer } from 'components';
import { fetchHomepage } from 'store/ducks/homepage/actions';
import { getHomepage, isLoading } from 'store/ducks/homepage/selectors';
import { HomeStub } from './Home.stub';

type Props = {
    data: {
        popular: SneakersType[];
        newest: SneakersType[];
    };
    fetchHomepage: () => void;
    isLoading: boolean;
};

const b = bem.with('page');

function Home(props: Props) {
    const { isLoading, data, fetchHomepage } = props;

    React.useEffect(() => {
        if (!data.popular.length) {
            fetchHomepage();
        }
    }, []);

    if (isLoading) {
        return <HomeStub />;
    }

    return (
        <Page>
            <PageMeta title="Home page" description="Buy awesome snickers" />
            <PageContainer>
                <h2>Popular</h2>
                <SneakersList items={data.popular} />
            </PageContainer>
            <PageContainer btn={{ to: '/catalog', text: 'See more' }}>
                <h2>Newest</h2>
                <SneakersList items={data.newest} />
            </PageContainer>
        </Page>
    );
}

const mapStateToProps = (state: State) => ({
    data: getHomepage(state),
    isLoading: isLoading(state),
});
const mapDispatchToProps = { fetchHomepage };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home) as React.ComponentType<Props>;
