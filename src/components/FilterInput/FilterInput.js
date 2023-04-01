import React, { useState } from 'react'
import styles from './FilterInput.module.css'

const FilterInput = ({ filteration }) => {

  const [filter, setFilter] = useState("");
  
  const filterHandler = (evt) => {
    const name = evt.target.value;
    setFilter(name);
    filteration(name);
  }

  return (
    <div className={ styles.mp }>
        <input 
            type="text"
            placeholder="for test useRef" 
            value={filter}
            onChange={filterHandler}
         />
    </div>
  )
}

export default FilterInput