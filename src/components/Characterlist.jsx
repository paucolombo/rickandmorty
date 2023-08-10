import React from 'react'
import { useEffect, useState } from 'react'
import Card from './Card';

const Characterlist = () => {
  const [characterList, setCharacterList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch('https://rickandmortyapi.com/api/character').then((res) => res.json());
      setCharacterList(data.results);
    }
    fetchData();
  }, [])



  return (
    <div className='characterContainer'>
      {characterList.map((character) =>
        <Card key={character.id} character={character} />
      )
      }
    </div>
  )
}

export default Characterlist