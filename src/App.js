import React, { useState, useCallback } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Spotify from './Spotify';


function App() {

  const [searchResults, setSearchResults] = useState('');

  // performs search on spotify through api with useCallback //

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);


  return (
    <div className='background'>
      <header>
        <h1>JA<span>MMM</span>ING!</h1>
      </header>
      <main>
        <SearchBar onSearch={search} />
        <section className='results'>
          <SearchResults result={searchResults} />
        </section>
      </main>
    </div>
  );
};

export default App;
