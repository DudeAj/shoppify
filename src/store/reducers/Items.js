import types from '../actions/actionTypes';
const initialState = {
    Categories: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_ITEMS:
            return {
                ...state,

            }
        default:
            return state;
    }
}

export default reducer;