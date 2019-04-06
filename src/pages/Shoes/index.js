import { connect } from 'react-redux';

import { fetchShoes } from '../../ducks/shoes/actions';
import { getShoes, isLoading } from '../../ducks/shoes/selectors';
import { getHomepage } from '../../ducks/homepage/selectors';
import ShoesPage from './shoes';

function mapStateToProps(state) {
    return {
        popular: getHomepage(state).popular,
        data: getShoes(state),
        isLoading: isLoading(state)
    };
}

const mapDispatchToProps = { fetchShoes };

export default connect(mapStateToProps, mapDispatchToProps)(ShoesPage);
