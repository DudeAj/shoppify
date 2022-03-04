import { OtherHousesTwoTone } from '@mui/icons-material';
import * as types from '../actions/actionTypes';

const initialState = {
    Categories: [],
    items: [],
    cart: [],
    orders: [],
    error: null,
    status: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CATEGORIES:
            return {
                ...state,
                Categories: action.payload
            }

        case types.SET_ERROR:
            return {
                ...state,
                error: action.payload
            }

        case types.SET_CART:
            return {
                ...state,
                cart: action.payload
            }

        case types.LOAD_ITEMS:
            return {
                ...state,
                items: action.payload
            }

        case types.SET_STATUS:
            return {
                ...state,
                status: action.payload
            }

        case types.SET_ORDER:
            return {
                ...state,
                orders: action.payload
            }

        case types.REMOVE_ITEM:
            let items = state.cart;
            const updatedItems = items.map(item => item.id === action.payload ? { ...item, amount: item.amount - 1 } : item);
            console.log(updatedItems)
            return {
                ...state,
                cart: updatedItems
            }

        case types.ADD_ITEM:
            let additems = state.cart;
            const updatedItemsnew = additems.map(item => item.id === action.payload ? { ...item, amount: item.amount + 1 } : item);

            return {
                ...state,
                cart: updatedItemsnew
            }
        default:
            return state;
    }
}

export default reducer;