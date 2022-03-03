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
                    Items: responseData[category].items
                });
            }
            //console.log(dataset);
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
                    category: responseData[item].categorty
                });
            }

            dispatch(apiCalls.setItems(dataset));
        } catch (err) {
            dispatch(apiCalls.setError(err.message));
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

            dispatch(addItem(response.data.name, name, icon, note))
            console.log(response.data);

        } catch (err) {
            dispatch(apiCalls.setError(err.message));
        }
    }
}

export const addItemNew = (id, name, icon, note) => {
    console.log("its called", id)
    return async dispatch => {
        try {
            const response = await axios.post(`items.json`,
                {
                    name: name,
                    icon: icon,
                    notes: note,
                    categorty: id
                }
            );
            dispatch(apiCalls.setStatus("Item Added"))
            console.log("Item Added", response.data);
        }
        catch (err) {
            dispatch(apiCalls.setError(err.message));
        }
    }
}


export const addItem = (id, name, icon, note) => {
    console.log("its called", id)
    return async dispatch => {
        try {
            const response = await axios.post(`Categories/${id}/items.json`,
                {
                    name: name,
                    icon: icon,
                    notes: note,
                }
            );
            dispatch(apiCalls.setStatus("Item Added"))
            console.log("Item Added", response.data);
        }
        catch (err) {
            dispatch(apiCalls.setError(err.message));
        }
    }
}
