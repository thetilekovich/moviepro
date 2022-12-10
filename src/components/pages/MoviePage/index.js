import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './moviepage.css'
import Apikey from '../../../assets/Apikey';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {MdPlayCircleOutline} from 'react-icons/md'
import Starrings from './cmp/Starrings';
import bgImage from '../../../assets/img/bg.jpg'
import YoutubeVideo from '../Video';


function MoviePage({dark}) {
    const {movieId} = useParams()
    const [details, setDetails] = useState({})
    const [release, setRelease] = useState('')
    const [releaseCountry, setReleaseCountry] = useState('')
    const [certification, setCertification] = useState('')
    const [genres, setGenres] = useState([])
    const [prod, setProd] = useState([])
    const [video,setVideo] = useState([])

    async function getDetail(id){
        try{
            const api = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${Apikey}&language=en-US`)
            const {data} = await api
            const result = await data.genres
            const production = await data.production_companies
            setDetails(data)
            setGenres(result)
            setProd(production)
        }
        catch(e){
            console.log(e)
        }
    }
    async function getTrailer(id){
        try{
            const api =  axios(` https://api.themoviedb.org/3/movie/${id}/videos?api_key=${Apikey}&language=en-US`)
            const {data: results} = await api
            setVideo(results.results[0])
        }
        catch(e) {
            console.log(e)
        }
    }
    // https://api.themoviedb.org/3/movie/436270/credits?api_key=6b661c440c72e43e50d8b011d23cf882&language=en-US


    async function releaseFunc(id){
        try{
            const api = await axios(` https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${Apikey}`)
            const {results} = await api.data
            setReleaseCountry(results[2].iso_3166_1 || results[0].iso_3166_1)    
            setRelease(results[2].release_dates[0].release_date.slice(0,10) || results[0].release_dates[0].release_date.slice(0,10))
            setCertification(results[2].release_dates[0].certification || results[0].release_dates[0].certification)            

        }catch(e){
            console.log(e)
        }
    }


    useEffect(()=> {
        getDetail(movieId)
        releaseFunc(movieId)
        getTrailer(movieId)
    }, movieId)

    let rating = details.vote_average || 5
    rating = Math.round(rating * 10)
    return(
        <section id='movie'>

            <section id='movie_header' style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${details.backdrop_path || bgImage}')`,
            backgroundSize: '100vw',
            backgroundRepeat: 'no-repeat'
        }}>
                <div className='movie_header_gen'>
                    <div className='container'>
                        <div className='movie_header'>
                            <div className='movie_header_content'>
                                <div className='movie_header_image'>
                                    <img className='movie_img' src={`https://image.tmdb.org/t/p/w440_and_h660_face/${details.poster_path}`} alt="" />
                                </div>
                                <div className='movie_header_info'>
                                    <h1 className='movie_title'>{details.original_title}</h1>
                                    <div className='movie_info_1'>
                                        <div className='movie_info_1_item'>
                                            <li className='movie_certif'>{certification}</li>
                                            <li className='release_data'>{release}({releaseCountry}) </li>
                                        </div>
                                        <div className='movie_genres_gen'>
                                            {
                                            genres.map((e, idx) => (<li key={idx} className='movie_genres'>{e.name}</li> ))
                                            }
                                        </div>
                                        
                                    </div>
                                   
                                    <div className='movie_info_2'>
                                        <div className={`movie_circle`}>
                                            <CircularProgressbar value={rating} text={`${rating}%`} styles={buildStyles({
                                                rotation: 1,
                                                textSize: '24px',
                                                pathTransitionDuration: 4,

                                                pathColor: `${rating > 70 ? 'green' : rating > 30 ? 'yellow' : 'rgb(224, 71, 0)'}`,
                                                textColor: `${rating > 70 ? 'green' : rating > 30 ? 'yellow' : 'rgb(224, 71, 0)'}`,
                                                trailColor: `${rating > 70 ? 'yellow' : rating > 30 ? 'rgb(224, 71, 0)' : 'rgb(224, 71, 0)'}`,
                                            })}/>

                                        </div>
                                        <div className='movie_trailer'>
                                            <button className='movie_trailer_btn'><MdPlayCircleOutline style={{fontSize: '2rem', margin: '0 5px'}}/>
                                            <a href='#movie_trailer' >Watch a trailer</a>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='movie_link'>
                                        <a className='movie_link' href={details.homepage || ''} rel="noreferrer"  target="_blank">Official site: &nbsp;{details.homepage || 'Not specified'}</a>
                                              
                                    </div>
                                    <div className='movie_tagline'>
                                        <h1>{`${details.tagline}`}</h1>
                                    </div>
                                    <div className='movie_overview'>
                                        <h4>Overview:</h4>
                                        <p>{details.overview || ''}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Starrings movieId={movieId} dark={dark} />
            <section id='movie_body'>
                <div className='container'>
                    <div className='movie_body'>
                         <div className='movie_info' style={{
                            color: `${dark ? 'white' : 'black'}`
                         }}>
                            <div className='movie_info_item'>
                                <h3>Original name:</h3>
                                <h2 style={{
                                    color: 'green'
                                }}>{details.original_title || ''}</h2>
                            </div>
                            <div className='movie_info_item'>
                                <h3>Original language:</h3>
                                <h2>"{details.original_language || ''}"</h2>
                            </div>
                            <div className='movie_info_item'>
                                <h3>Status:</h3>
                                <h2 style={{
                                    color: `${details.status === "Released" ? 'green' : 'red'}`
                                }}>{details.status || ''}</h2>
                            </div>
                            <div className='movie_info_item'>
                                <h3>Budget:</h3>
                                <h2 >{details.budget || ''}</h2>
                                <h3>Revenue:</h3>
                                <h2 style={{
                                    color: `${details.revenue > details.budget ? 'green' : 'orange'}`
                                }}>{details.revenue || ''}</h2>
                            </div>
                            <div className='movie_info_item'>
                                <h3>Prodaction Companies:</h3>
                                {
                                    prod.map((e, idx) => (
                                        <li key={idx} >
                                            {e.name || ''}
                                        </li>
                                    ))
                                }
                            </div>
                        </div>  
                        <div className='movie_trailer' id='movie_trailer'>
                            <h1 className='trailer_title'>Videos:</h1>
                           <YoutubeVideo video={video} />
                        </div>                  
                    </div>
                </div>
            </section>
    </section>
    )
}
export default MoviePage;