import React from 'react';
import { Link } from 'react-router-dom';

function PersonCard(props) {
    let e = props.e
    return ( 
        <div className='card'>
            <Link to={`${e.id}`}>
                <img className='card_img' src={`https://image.tmdb.org/t/p/w440_and_h660_face/${e.profile_path}` || ''} alt="" />
            </Link>
            <h4>{e.name}</h4>
        </div>
     );
}

export default PersonCard;