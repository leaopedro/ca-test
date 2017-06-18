
import { RECEIVE_ITEMS, SET_SELECTED_ITEMS } from '../actions';

const defaultState = {
    length: 0,
    items: [],
    selectedItems: [],
    defaultItems: [],
};

export default function table(state = defaultState, action) {
    switch (action.type) {
        case RECEIVE_ITEMS:
            const newSt = Object.assign({}, state);
            newSt.items =  action.items;
            newSt.length =  action.items.length;
            if (action.defaultItems) {
                newSt.defaultItems = action.defaultItems;
            }
            return newSt;
        case SET_SELECTED_ITEMS:
            const nst = Object.assign({}, state);
            nst.selectedItems = action.items;
            nst.length = action.items.length;
            return nst;
        default:
            return state;
    }
}
