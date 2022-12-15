import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Apikey from '../../../../assets/Apikey';

function Starrings({ movieId, dark }) {
    const [credits, setCredits] = useState([])
    const settings = {
    dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2.8,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.8,
            slidesToScroll: 1   ,
            initialSlide: 2
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1
          }
        }
      ]
    };

    async function getCredits(movieid, apikey) {
        try {
            const api = await axios(`https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=${apikey}&language=en-US`)
            const { data } = await api
            setCredits(data.cast)
        }
        catch (e) {
            console.log(e)
        }
    }


    useEffect(() => {
        getCredits(movieId, Apikey)
    }, [])
    return (
        <div className='container'>
            <h1 className='movie_starring_title'>Starrings</h1>
            <div className='movie_starrings_gen'>
                <Slider {...settings}>
                    {
                        credits.map((e, idx) => (
                            <div className='movie_starrings_item'>
                                <Link to={`/actors/actor-info/${e.id}`}>
                                    <img className='starrings_img' src={`https://image.tmdb.org/t/p/w440_and_h660_face/${e.profile_path}`} alt="" />
                                </Link>
                                <h1 className='starrings_name'>{e.name}</h1>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
}

export default Starrings;