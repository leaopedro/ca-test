import { connect } from 'react-redux';
import Table from '../components/Table/index.jsx';
import { fetchItems, toggleSelected, toggleSelectAll, resetItems, triggerSearch } from '../actions';


function mapStateToProps(state) {
    return {
        items: state.table.items,
        updated: state.table.updated,
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
        triggerSearch: (id) => {
            dispatch(triggerSearch(id));
        },
        resetItems: () => {
            dispatch(resetItems());
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
