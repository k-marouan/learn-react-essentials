import React from 'react'
import Card from '../Card/Card';

const CardList = ({namesList, deleteName}) => {
  console.log(namesList);
    const cards = namesList.map(({id, ...otherProps}) => 
      <Card key={id} {...otherProps} id={id} deleteName={deleteName} />
    );
  return (
    <div>{cards}</div>
  )
}

export default CardList