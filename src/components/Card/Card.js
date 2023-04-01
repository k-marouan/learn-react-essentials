import React from 'react'
import myStyles from './Card.module.css'

const Card = ({id, name, age, adress, phone, type, deleteName}) => {
  return (
        <div 
            className={myStyles.cardWrapper}
            style={{ backgroundColor: type === "family" ? "gold" : "green" }}
            >
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Adress: {adress}</div>
            <div>Phone: {phone}</div>
            <div>Type: {type}</div>
            <div
             className={myStyles.deleteBtn}
             onClick={(event) => deleteName(event, id)}
             >
              x
             </div>
        </div>
  );
};

export default Card