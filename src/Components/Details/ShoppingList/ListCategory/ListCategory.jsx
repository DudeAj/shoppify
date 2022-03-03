import React from 'react'
import ListItems from './listItems/ListItems';
import classes from './listCategory.module.css';

const ListCategory = () => {
  return (
    <div class={classes.list_category}>
      <p>
      Category name
      </p>
      <ListItems/>
      <ListItems/>
    </div>
  )
}

export default ListCategory;