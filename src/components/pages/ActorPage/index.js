import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import Apikey from '../../../assets/Apikey';
import './actorpage.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {MdPlayCircleOutline} from 'react-icons/md'
import bgImage from '../../../assets/img/bg.jpg'
import { GetFilms } from '../../GetFilms';
import Section from '../../Home/cmp/Section';


function ActorPage({dark}) {
    const {actorId} = useParams()
    const [actorInfo, setActorInfo] = useState({})
    const [names, setNames] = useState([])
    const [person, setPerson] = useState([])


    async function getActor(id, key){
        try {
            const api = await axios(`https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=en-US`)
            const {data: results} = await api
            const anotherNames = await results.also_known_as
            setActorInfo(results)
            setNames(anotherNames)
        } catch (error) {
            console.log(error)
        }
       
    }

    const rating = Math.round(actorInfo.popularity)

    useEffect(() => {
        getActor(actorId, Apikey)
        GetFilms('popular', 1, 'person')
        .then(({results}) => setPerson(results))
    }, actorId)
    return(
        <section id='movie'>

            <section id='movie_header' style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${actorInfo.profile_path || bgImage}')`,
            backgroundSize: '100vw',
            backgroundRepeat: 'no-repeat'
        }}>
                <div className='actor_header_gen'>
                    <div className='container'>
                        <div className='actor_header'>
                            <div className='actor_header_content'>
                                <div className='actor_header_image'>
                                    <img className='actor_img' src={`https://image.tmdb.org/t/p/w440_and_h660_face/${actorInfo.profile_path}`} alt="" />
                                </div>
                                <div className='actor_header_info'>
                                    <h1 className='actor_name'>{actorInfo.name}</h1>
                                    <div className='actor_info_1'>
                                        <div className={`actor_circle`}>
                                            <CircularProgressbar value={rating} text={`${rating}%`} styles={buildStyles({
                                                rotation: 1,
                                                textSize: '24px',
                                                pathTransitionDuration: 4,
                                                pathColor: `${rating > 70 ? 'green' : rating > 30 ? 'yellow' : 'rgb(224, 71, 0)'}`,
                                                textColor: `${rating > 70 ? 'green' : rating > 30 ? 'yellow' : 'rgb(224, 71, 0)'}`,
                                                trailColor: `${rating > 70 ? 'yellow' : rating   > 30 ? 'rgb(224, 71, 0)' : 'rgb(224, 71, 0)'}`,
                                            })}/>

                                        </div>
                                        <div className='actor_interview'>
                                            <button className='actor_interview_btn'><MdPlayCircleOutline style={{fontSize: '2rem', margin: '0 5px'}}/>
                                                Play some interview
                                            </button>
                                        </div>
                                    </div>
                                    <div className='actor_info_2'>
                                        <div className='actor_info_2_item'>
                                            <h1>Also known as:</h1>
                                            <div className='actor_names'>
                                                
                                                    {
                                                        
                                                        names.map((e, idx) => (
                                                            <li className='another_name'>{e}</li>
                                                        ))
                                                        
                                                    }
                                            </div>
                                        </div>
                                        <div className='actor_info_2_item'>
                                            <h1>Birthday:</h1>
                                            <h3>{actorInfo.birthday}</h3>
                                            {
                                                actorInfo.deathday ? <div><h1>Deathday:</h1><h3>{actorInfo.deathday}</h3></div> : ''
                                            }
                                        </div>
                                        <div className='actor_info_2_item'>
                                            <h1>Place of bith:</h1>
                                            <h3>{actorInfo.place_of_birth || ''}</h3>
                                        </div>
                                    </div>
                                    
                                    <div className='actor_bio_gen'>
                                        <h4>Biography:</h4>
                                        <div className='actor_biography'>
                                            <p>{actorInfo.biography || ''}</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Section dark={dark} title='' data={person} count={8} typeOfCard='person'/>
            
    </section>
    )
}

export default ActorPage;