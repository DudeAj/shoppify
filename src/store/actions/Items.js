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

export const setCartName = (name) => {
    return {
        type: types.SET_CART_NAME,
        payload: name
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


export const remove = (id) => {
    return {
        type: types.REMOVE_ITEM,
        payload: id
    }
}

export const add = (id) => {
    return {
        type: types.ADD_ITEM,
        payload: id
    }
}

export const setOrders = (data) => {
    return {
        type: types.SET_ORDER,
        payload: data
    }
}