import React from 'react'
import ListItems from './listItems/ListItems';
import classes from './listCategory.module.css';

import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';



const ListCategory = ({ id, title, data }) => {

  useEffect(() => {

  }, [])

  return (
    <div className={classes.list_category}>
      <p>
        {title}
      </p>
      {data.map(item => {
        if (item.category === id) {
          if (data.length > 0) {
            return <ListItems key={item.id} data={item} />
          }
        }
      })}


    </div>
  )
}

export default ListCategory;