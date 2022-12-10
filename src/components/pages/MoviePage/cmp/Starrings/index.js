import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Apikey from '../../../../../assets/Apikey';
import { Link } from 'react-router-dom';

function Starrings({movieId, dark}) {
 const [credits, setCredits] = useState([])


 async function getStarrings(id){
    const api = await axios(` https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Apikey}&language=en-US`)
    const {data} = await api
    setCredits(data.cast)
}

    useEffect(() => {
        getStarrings(movieId)
    }, [])

    return ( 
        <section id='movie_body'>
                <div className='container'>
                    <div className='movie_body'>
                        <div className='movie_starrings'>
                            <h1 className='movie_starring_title'>Starring:</h1>
                            <div className='movie_starrings_gen'>
                                {
                                    credits.map((e, idx) => (
                                        idx < 12 ? 
                                        <div key={idx} className='movie_starrings_item' 
                                        style={{transition: '.6s'}}
                                        onClick={() => {
                                            window.scroll(0, 0)
                                        }}>
                                            <Link  to={`/actors/actor-info/${e.id}`}>
                                            <img src={`https://image.tmdb.org/t/p/w138_and_h175_face/${e.profile_path}`} alt="" />
                                            </Link>
                                            <div className='profile_text'>
                                                <h1 className='starrings_name' style={{
                                                    color: `${dark ? 'white' : 'black'}`
                                                }}>{e.name}</h1>
                                                <p>{e.character}</p>
                                            </div>
                                        </div> : ''
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
     );
}

export default Starrings;