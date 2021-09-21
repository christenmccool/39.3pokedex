import React from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard.js';


const defaultPokeArr = [
  {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
  {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
  {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
  {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
  {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
  {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
  {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
  {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
];

const Pokedex = ( {pokeArr = defaultPokeArr, title = "Pokedex", total, isWinner, delay} ) => {
  // const winnerMessage = isWinner ? <h1 className="Pokedex-winner">This hand wins!</h1> : null;
  return (
    <div className="Pokedex">
      <h2 className="Pokedex-title">{title}</h2>
      <div className="Pokedex-body">
        {pokeArr.map(ele => (
          <Pokecard 
            delay={delay}
            id={ele.id}
            name={ele.name}
            type={ele.type}
            exp={ele.base_experience}
          />
        ))}
      </div>
      <h3 className="Pokedex-total" style={{animationDelay: `${delay+3}s`}}>Total: {total}</h3>

      {/* {winnerMessage} */}
      <h1 className="Pokedex-winner">{isWinner ? "This hand wins!" : ""}</h1>
    </div>
  )
};

  export default Pokedex;