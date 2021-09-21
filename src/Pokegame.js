import Pokedex from './Pokedex.js';
import {choose, total} from './helper.js'

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

const Pokegame = ( {pokeArr = defaultPokeArr }) => {
  const [hand1, hand2] = choose(pokeArr, 4);

  const total1 = total(hand1, 'base_experience');
  const total2 = total(hand2, 'base_experience');

  const winner = (total1 > total2) ? 1 : 2;

  return (
    <>
     <div>      
       <Pokedex 
        delay={0}
        pokeArr={hand1} 
        title="Hand 1" 
        total={total1} 
        isWinner={winner===1 ? true : false}
      />
    </div>
    <div>   
      <Pokedex 
        delay={4}
        pokeArr={hand2} 
        title="Hand 2" 
        total={total2}
        isWinner={winner===2 ? true : false}
      />
    </div>
  </>
  )
};

export default Pokegame;