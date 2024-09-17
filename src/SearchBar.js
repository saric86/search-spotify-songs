import React, { useState } from "react";
import './SearchBar.css';

function SearchBar(props) {

    const [term, setTerm] = useState('');

    const handleTermChange = (event) => {
        event.preventDefault();
        setTerm(event.target.value);
    };

    const search = () => {
        props.onSearch(term);
    };

    return (
        <div>
            <h2>Search your favorite song on Spotify</h2>
            <section className="search">
                <input className='search-bar' type="search" onChange={handleTermChange} placeholder="Type song title here..." />
                <button className="search-button" onClick={search} >Search</button>
            </section>
        </div>
);

};

export default SearchBar;