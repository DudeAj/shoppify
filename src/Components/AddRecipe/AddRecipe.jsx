import React, { useState, useEffect } from 'react';
import classes from './addRecipe.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addCategory, addItemNew, setLoading } from '../../store/actions';
import CancelSave from './cancelSave/cancelSave';
import Status from '../StatusMsg/Status';


const AddRecipe = ({ setShowList }) => {

    const category = useSelector(state => state.data.Categories);
    const msg = useSelector(state => state.data.status);

    const [name, setName] = useState("");
    const [note, setNote] = useState("");
    const [img, setImg] = useState("");
    const [cat, setCat] = useState("");
    const [type, setType] = useState(false);
    const [newCat, setNewCat] = useState("");
    const [message, setMessage] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (category.length > 0) {
            setCat(category[0].id);
            setMessage(msg);
        }
    }, [category]);

    const submitform = () => {

        addNewItem();
    }

    const addNewItem = () => {
        //event.preventDefault();
        if (name === "" || note === "" || img === "" || cat === "") {
            setMessage("Please Fill All the fields carefully")
        }
        else {
            if (type) {
                dispatch(addCategory(newCat, name, img, note))

            } else {
                dispatch(addItemNew(cat, name, img, note))
            }
            setName("");
            setNote("");
            setImg("");
            setCat("");
        }

        setTimeout(() => {
            setMessage(null);
        }, 3000);
    }

    return (
        <div className={classes.container}>
            <div>
                <h1>Add Ingredient</h1>
                <div>
                    <form onSubmit={addNewItem} className={classes.formContainer}>

                        <div className={classes.inputArea}>
                            <label>Name</label>
                            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className={classes.inputArea}>
                            <label>Note</label>
                            <textarea type="text" rows="3" placeholder="Enter Notes" value={note} onChange={(e) => setNote(e.target.value)} ></textarea>
                        </div>

                        <div className={classes.inputArea}>
                            <label>Image</label>
                            <input type="text" placeholder="Image Link" value={img} onChange={(e) => setImg(e.target.value)} />
                        </div>

                        <div className={classes.inputArea}>
                            <label>Category</label>
                            <div className={classes.cat}>
                                {type
                                    ? <input type="text" placeholder="Category" value={newCat} className={classes.newCatInput} onChange={(e) => setNewCat(e.target.value)} />
                                    : <select value={cat} onChange={(e) => setCat(e.target.value)}>
                                        {category.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
                                    </select>
                                }
                                <button type="button" className={classes.catBtn} onClick={() => setType(!type)}>{type ? "-" : "+"}</button>
                            </div>
                        </div>
                        {message && <Status msg={message} type="error" />}
                        {msg && <Status msg={msg} type="success" />}
                    </form>
                </div >
            </div>
            <CancelSave click={submitform} setShowList={setShowList} />
            {/* <button type="submit">Add Item</button> */}
        </div>
    )
}

export default AddRecipe