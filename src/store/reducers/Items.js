import * as types from '../actions/actionTypes';

const initialState = {
    Categories: [],
    items: [],
    cart: [],
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
        default:
            return state;
    }
}

export default reducer;