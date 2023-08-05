import React from 'react'
import { useEffect, useState } from 'react'
import Card from './Card';

const Characterlist = () => {
  console.log("characters");
  const [characterList, setCharacterList] = useState([]);

  /*useEffect(() => {
    const fetchData = async () => {
      let data = await fetch('https://rickandmortyapi.com/api/character').then((res) => res.json());

      setCharacterList(data.results);
    }
    fetchData();
  }, [])*/

  const getCharacters = async () => {
    const data = await fetch('https://rickandmortyapi.com/api/character').then((res) => res.json());
    setCharacterList(data.results);
  }

  return (
    <div className='characterContainer'>
      {characterList.length < 1 && <div className='buttonsContainer'><button onClick={getCharacters}>Show Characters</button></div>}
      {characterList.map((character) =>
        <Card key={character.id} character={character} />

      )
      }
    </div>
  )
}

export default Characterlist