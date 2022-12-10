import React from 'react';
import { Link } from 'react-router-dom';


function Card(props) {
    const {e, dark} = props
    return ( 
        <div className='card'
        style={{transition: '.6s'}}
        onClick={() => {
            window.scroll(0, 0)
        }}>
            <Link to={`/movies/movie-info/${e.id}`}>
                <img style={{
            boxShadow: `${dark ? '0 0 10px 1px white' : '0 0 10px 1px black'}`
        }} className='card_img' src={`https://image.tmdb.org/t/p/w440_and_h660_face/${e.poster_path}` || ''} alt="" />
            </Link>
                <h4>{e.title}</h4>
        </div>
     );
}

export default Card;