import * as React from 'react';
import { connect } from 'react-redux';
import { State, Sneakers } from 'types';
import { fetchCatalog } from 'store/ducks/catalog/actions';
import { getCatalog, isLoading } from 'store/ducks/catalog/selectors';
import { SneakersList, PageMeta, PageContainer, Page } from 'components';
import { CatalogStub } from './Catalog.stub';

type Props = {
    data: Sneakers[];
    fetchCatalog: () => void;
    isLoading: boolean;
};

function Catalog(props: Props) {
    const { isLoading, data, fetchCatalog } = props;

    React.useEffect(() => {
        if (!data.length) {
            fetchCatalog();
        }
    }, []);

    if (isLoading || !data.length) {
        return <CatalogStub />;
    }

    return (
        <Page>
            <PageMeta
                title="Catalog page"
                description="See awesome collection of snickers"
            />
            <PageContainer>
                <h2>Catalog</h2>
                <SneakersList items={data} />
            </PageContainer>
        </Page>
    );
}

const mapStateToProps = (state: State) => ({
    data: getCatalog(state),
    isLoading: isLoading(state),
});
const mapDispatchToProps = { fetchCatalog };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Catalog) as React.ComponentType;
