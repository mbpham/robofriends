import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {
  const cardComponent = robots.map((rb, i) => {
    return <Card key={i} id={rb.id} name={rb.name} email={rb.email} /> } )

  return (
    <div> {cardComponent} </div>
  )
}

export default CardList;
