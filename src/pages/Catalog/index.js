import { connect } from 'react-redux';

import { fetchCatalog } from '../../ducks/catalog/actions';
import { getCatalog, isLoading } from '../../ducks/catalog/selectors';
import CatalogPage from './catalog';

function mapStateToProps(state) {
    return {
        data: getCatalog(state),
        isLoading: isLoading(state)
    };
}

const mapDispatchToProps = { fetchCatalog };

export default connect(mapStateToProps, mapDispatchToProps)(CatalogPage);
