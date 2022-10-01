import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Characters from './components/Characters';
import Pagination from './components/Pagination';

const App = () => {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const baseUrl = 'https://rickandmortyapi.com/api/character/';

  const fetchCharacters = () => {
    axios.get(baseUrl)
      .then(res => res)
      .then(data => {
        setCharacters(data.data.results);
        setInfo(data.data.info);
        console.log(data);
      })
      .catch(error => console.log(error))
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  }

  const onNext = () => {
    fetchCharacters(info.next);
  }

  useEffect(() => {
    fetchCharacters(baseUrl);
  }, [])

  return (
    <div className='flex flex-col w-full items-center'>
      <Navbar />
      <div>
        <Characters characters={characters} />
      </div>
      <Pagination 
        prev={info.prev} 
        next={info.next} 
        onPrevious={onPrevious} 
        onNext={onNext}
      />
    </div>
  )
}

export default App;