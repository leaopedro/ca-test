import { connect } from 'react-redux';
import Table from '../components/Table/index.jsx';
import { fetchItems, toggleSelected, toggleSelectAll } from '../actions';


function mapStateToProps(state) {
    return {
        items: state.table.items,
        length: state.table.length,
        selectedItems: state.table.selectedItems,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchItems: () => {
            dispatch(fetchItems());
        },
        toggleSelected: (id) => {
            dispatch(toggleSelected(id));
        },
        toggleSelectAll: () => {
            dispatch(toggleSelectAll());
        },
    }
}

const TableContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Table);

export default TableContainer
