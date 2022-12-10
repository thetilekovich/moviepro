import React from 'react';
import { Link } from 'react-router-dom';




function PersonCard(props) {
    const {e, dark} = props
    return ( 
        <div className='card' >
            <Link  to={`/actors/actor-info/${e.id}`}>
                <img
                onClick={() => {
                    window.scrollTo(0, 0)
                }}
                style={{
                    boxShadow: `${dark ? '0 0 10px 1px white' : '0 0 10px 1px black'}`
                 }} className='card_img' src={`https://image.tmdb.org/t/p/w440_and_h660_face/${e.profile_path}`} alt='' />
            </Link> 
            <h4>{e.name}</h4>
        </div>
     );
}

export default PersonCard;