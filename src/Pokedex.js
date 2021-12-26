import React from 'react'
import Pokecard from './Pokecard'

const Pokedex = ({pokemon, exp, isWinner}) => {
    // let pokemon = [
    //     {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    //     {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    //     {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    //     {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    //     {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    //     {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    //     {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    //     {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
    //   ]

      const idLength = (id) => {
          let str = id.toString().length
          if (str > 2) {
              return id
          } else if (str === 2) {
              let newId = `0${id}` 
              return newId
          } else if (str < 2) {
             let newId = `00${id}` 
              return newId
          }
      }

    return (
        <div>
            <h1>{isWinner ? 'Winner!' : 'Loser!'}</h1>
            <p>Total experience {exp}</p>
        <div className="container">
           
           {
               
               pokemon.map(poke => (
                   <Pokecard 
                   key={poke.id} 
                   pokename={poke.name} 
                   pokeimg={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idLength(poke.id)}.png`} 
                   type={poke.type} 
                   exp={poke.base_experience} 
                   />
               ))
           }
        </div>
        </div>
    )
}

export default Pokedex
