import React from 'react'

const Pokecard = ({pokename, pokeimg, type, exp}) => {

    return (
        <div className="card-container">
            <h1>{pokename}</h1>
            <img src={pokeimg} alt="pokemon"/>
            <h2>{type}</h2>
            <h3>{exp}</h3>
        </div>
    )
}

export default Pokecard
