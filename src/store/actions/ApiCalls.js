import * as apiCalls from './Items';
import axios from 'axios';

export const getCategory = () => {
    return async dispatch => {
        try {
            const response = await axios.get('Categories.json');
            const responseData = response.data

            const dataset = [];
            for (const category in responseData) {
                dataset.push({
                    id: category,
                    title: responseData[category].title,
                });
            }
            dispatch(apiCalls.setCategories(dataset));

        } catch (err) {
            dispatch(apiCalls.setError(err.message));
        }
    }
}

export const LoadItems = () => {
    return async dispatch => {
        try {
            const response = await axios.get('items.json');
            const responseData = response.data
            const dataset = [];
            for (const item in responseData) {
                dataset.push({
                    id: item,
                    name: responseData[item].name,
                    icon: responseData[item].icon,
                    category: responseData[item].categorty,
                    notes: responseData[item].notes
                });
            }

            dispatch(apiCalls.setItems(dataset));
            dispatch(apiCalls.setLoading(false));
        } catch (err) {
            dispatch(apiCalls.setError(err.message));
            dispatch(apiCalls.setLoading(false));
        }
    }
}
export const addCategory = (cat, name, icon, note) => {
    return async dispatch => {
        try {
            const response = await axios.post('Categories.json',
                {
                    title: cat
                }
            );

            dispatch(addItemNew(response.data.name, name, icon, note))
            dispatch(getCategory())


        } catch (err) {
            dispatch(apiCalls.setError(err.message));
        }
    }
}

export const addItemNew = (id, name, icon, note) => {

    return async dispatch => {
        dispatch(apiCalls.setLoading(true));
        try {

            const response = await axios.post(`items.json`,
                {
                    name: name,
                    icon: icon,
                    notes: note,
                    categorty: id
                }
            );
            dispatch(apiCalls.setStatus("Item Added"));
            dispatch(LoadItems());
            setTimeout(() => {
                dispatch(apiCalls.setStatus(null));
            }, 5000);

        }
        catch (err) {
            dispatch(apiCalls.setError(err.message));
            dispatch(apiCalls.setLoading(false));
        }
    }
}

export const OrderNow = (OrderData, cartName, status) => {
    return async dispatch => {
        try {
            dispatch(apiCalls.setLoading(true));
            const response = await axios.post(`Orders.json`,
                {
                    title: cartName,
                    Items: { ...OrderData },
                    time: new Date(),
                    status: status
                }
            );
            dispatch(apiCalls.setStatus("Order Placed SuccessFully"));
            dispatch(apiCalls.setLoading(false));
            dispatch(apiCalls.setCart([]));
            dispatch(LoadItems());
            setTimeout(() => {
                dispatch(apiCalls.setStatus(null))
            }, 5000);

        }
        catch (err) {
            dispatch(apiCalls.setError(err.message));
            dispatch(apiCalls.setLoading(false));
        }
    }
}

export const FetchOrders = () => {
    return async dispatch => {
        dispatch(apiCalls.setLoading(true));
        try {
            const response = await axios.get(`Orders.json`);

            // dispatch(apiCalls.setOrders())

            const responseData = response.data
            const dataset = [];
            for (const item in responseData) {
                dataset.push({
                    id: item,
                    info: responseData[item].Items,
                    time: responseData[item].time,
                    title: responseData[item].title,
                    status: responseData[item].status
                });
            }
            dispatch(apiCalls.setOrders(dataset))
            dispatch(apiCalls.setLoading(false));

        }
        catch (err) {
            dispatch(apiCalls.setError(err.message));
            dispatch(apiCalls.setLoading(false));
        }
    }
}

export const setCartItems = (cartItems, itemdata) => {
    return async (dispatch) => {
        const filtered = cartItems.filter(item => item.id === itemdata.id).length > 0 ? true : false;

        if (!filtered) {
            const faq = { ...itemdata, amount: 1 }
            const newCart = [...cartItems, faq];
            dispatch(apiCalls.setCart(newCart));
        }
        else {
            const newArr = cartItems.map(obj => {
                if (obj.id === itemdata.id) {
                    const objAmount = obj.amount + 1;
                    return { ...obj, amount: objAmount };
                }
                return obj;
            });
            dispatch(apiCalls.setCart(newArr));

        }
    }
}

export const deleteItem = (itemId) => {
    return async (dispatch) => {
        try {
            dispatch(apiCalls.setLoading(true));
            const response = axios.delete(`items/${itemId}.json`)
            dispatch(apiCalls.setStatus("Item Removed"))
            setTimeout(() => {
                dispatch(LoadItems());
                dispatch(apiCalls.setStatus(null))
            }, 2000);

        }
        catch (err) {
            dispatch(apiCalls.setError(err.message));
            dispatch(apiCalls.setLoading(false));
        }
    }
}


