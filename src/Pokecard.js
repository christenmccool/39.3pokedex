import React from 'react';
import './Pokecard.css';

const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

const Pokecard = (props) => {
  return (
    <div className="Pokecard">
      <h4>{props.name}</h4>
      <img src={`${imgUrl}/${props.id}.png`} alt={`{props.name}`} />
      <p>Type: {props.type}</p>
      <p>EXP: {props.exp}</p>
    </div>
  )
};

export default Pokecard;