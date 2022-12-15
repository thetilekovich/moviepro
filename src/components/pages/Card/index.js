import React from 'react';
import { Link } from 'react-router-dom';
import movieImage from '../../../assets/img/profile.jpg'

function Card(props) {
    const winWidth = window.innerWidth
    const {e, dark} = props
    const title = e.title || '' 
    return ( 
        <div className='card'
        style={{transition: '.6s'}}
        onClick={() => {
            window.scroll(0, 0)
        }}>
            <Link to={`/movies/movie-info/${e.id}`}>
                <img style={{
            boxShadow: `${dark ? '0 0 10px 1px white' : '0 0 10px 1px black'}`
        }} className='card_img' src={`https://image.tmdb.org/t/p/w440_and_h660_face/${e.poster_path}` || movieImage} alt="" />
            </Link>
                <h4 style={{
                    fontSize: `${title.length < 10 && winWidth < 700 ? '17px' : title.length <  20 && winWidth < 700 ? '14px' : title.length > 20 && winWidth < 700 ? '10px' : 
                    title.length > 20 && winWidth > 700 ? '15px' : '20px'}`
                }}>{title}</h4>
        </div>
     );
}

export default Card;