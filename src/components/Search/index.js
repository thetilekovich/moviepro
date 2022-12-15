import React from 'react';
import { useNavigate } from 'react-router-dom';

function Search(props) {
    const {search, setSearch} = props
    const navigate = useNavigate()
    return (
        <div className='home_search'>
            <input onChange={(e) => setSearch(e.target.value)} placeholder='Search movie' className='search_input' type="search" />
            <button onClick={(e) => navigate(`/search/${search}`)}
                className='search_btn'>Search</button>
        </div>
    );
}

export default Search;