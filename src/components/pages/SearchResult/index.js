import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Apikey from '../../../assets/Apikey';
import Card from '../Card';
import Search from '../../Search';


function SearchResult({ dark , search, setSearch}) {
    const { movieName } = useParams()
    const [searched, setSearched] = useState([])
    const [count, setCount] = useState(1)
    const [total, setTotal] = useState('')
    const getSearched = async (api_key, movie_searching, page) => {
        try {
            const api = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${movie_searching}&page=${page}`)
            const { data } = await api
            setSearched(data.results)
            setTotal(data.total_pages)

        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getSearched(Apikey, movieName, count)
    }, [movieName, count])
    return (
        <section id='category'>
            <div className='container'>

            <Search search={search} setSearch={setSearch}/>

                <div className='category'>
                    <div className='cards'>
                        {searched.map(e => <Card dark={dark} key={e.id} e={e} />) }
                    </div>

                    <div className='cards_btn'>
                        <button
                            onClick={() => setCount(count - 1)}

                            style={{
                                visibility: count == 1 ? 'hidden' : '',
                                borderColor: `${dark ? 'wheat' : 'black'}`,
                                color: `${dark ? 'wheat' : 'black'}`
                            }}>Previous</button>
                        <button
                            onClick={() => setCount(count + 1)}
                            style={{
                                visibility: total == count ? 'hidden' : '',
                                borderColor: dark ? 'wheat' : 'black',
                                color: `${dark ? 'wheat' : 'black'}`
                            }}>Next</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SearchResult;