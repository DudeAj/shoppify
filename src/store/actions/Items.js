import * as types from './actionTypes';

export const setCategories = (data) => {
    return {
        type: types.SET_CATEGORIES,
        payload: data
    }
}

export const setItems = (data) => {
    return {
        type: types.LOAD_ITEMS,
        payload: data
    }
}

export const setCart = (data) => {
    return {
        type: types.SET_CART,
        payload: data
    }
}

export const setError = (error) => {
    return {
        type: types.SET_ERROR,
        payload: error
    }
}

export const setStatus = (msg) => {
    return {
        type: types.SET_STATUS,
        payload: msg
    }
}
