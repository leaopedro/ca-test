import Config from './../config'
import axios from 'axios';

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export function receiveItems(items, setDefault) {
    const st = {
        type: RECEIVE_ITEMS,
        items,
    };
    if (setDefault) {
        st.defaultItems = items;
    }
    return st;
}

export const SET_SELECTED_ITEMS = 'SET_SELECTED_ITEMS';
export function setSelectedItems(items) {
    return {
        type: SET_SELECTED_ITEMS,
        items,
    };
}

//export const SET_LOADER = 'SET_LOADER';
//export function setLoader(status) {
//    return {
//        type: SET_LOADER,
//        status,
//    };
//}

export function toggleSelected(itemId) {
    return (dispatch, getState) => {
        const state = Object.assign({}, getState());
        const items = state.table.selectedItems
        if (state.table.selectedItems.indexOf(itemId) !== -1) { // ja esta selecionado
            items.splice(state.table.selectedItems.indexOf(itemId), 1);
            dispatch(setSelectedItems(items));
        } else {
            items.push(itemId);
            dispatch(setSelectedItems(items));
        }
    }
}
export function toggleSelectAll() {
    return (dispatch, getState) => {
        const state = Object.assign({}, getState());
        let items = state.table.selectedItems;
        if (items.length === state.table.items.length) {
            items = [];
        } else {
            items = state.table.items.map((item) => {
                return item.id;
            });
        }
        dispatch(setSelectedItems(items));
    }
}
export function triggerSearch(query) {
    return (dispatch, getState) => {
        query = query.toLowerCase();
        const state = Object.assign({}, getState());
        const newItems = state.table.defaultItems.filter((item) => {
            return ((item.marca.toLowerCase().indexOf(query) !== -1) ||
                (item.modelo.toLowerCase().indexOf(query) !== -1) ||
                (item.placa.toLowerCase().indexOf(query) !== -1) ||
                (item.valor.toLowerCase().indexOf(query) !== -1) ||
                (item.combustivel.toLowerCase().indexOf(query) !== -1))
        });
        dispatch(setSelectedItems([]));
        dispatch(receiveItems(newItems, false));
    }
}
export function resetItems() {
    return (dispatch, getState) => {
        const state = Object.assign({}, getState());
        let items = state.table.defaultItems;
        dispatch(receiveItems(items));
    }
}
export function fetchItems() {
    return (dispatch) => {
//        dispatch(setLoader(true));
        axios.get(Config.dataUrl)
            .then((response) => {
                dispatch(receiveItems(response.data.data, true));
//                dispatch(setLoader(false));
            })
            .catch((error) => {
//                dispatch(setLoader(false));
                console.error(error);
            });
    };
}
