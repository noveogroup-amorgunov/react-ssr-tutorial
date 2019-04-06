import { connect } from 'react-redux';

import { fetchHomepage } from '../../ducks/homepage/actions';
import { getHomepage, isLoading } from '../../ducks/homepage/selectors';
import HomePage from './home';

function mapStateToProps(state) {
    return {
        data: getHomepage(state),
        isLoading: isLoading(state)
    };
}

const mapDispatchToProps = { fetchHomepage };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
