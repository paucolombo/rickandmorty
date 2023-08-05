import React from 'react'

const Card = ({ character }) => {
  return (
    <div className='characterCard'>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Specie: {character.species}</p>
    </div>
  )
}

export default Card