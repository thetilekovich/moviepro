import React, {useState, useEffect} from 'react';
import './home.css'
import { GetFilms } from '../GetFilms';
import Card from '../pages/Card';
import PersonCard from '../pages/PersonCard';
import { Link } from 'react-router-dom';
import Section from './cmp/Section';


function Home(props) {
    const {dark} = props
    const [inCinema, setInCinema] = useState([])
    const [tv, setTv] = useState([])
    const [person, setPerson] = useState([])
    const [popularity, setPopularity] = useState([])
    const [soon, setSoon] = useState([])


    useEffect(()=> {
        GetFilms('now_playing')
        .then(({results}) => setInCinema(results))
        GetFilms('popular', 1, 'tv')
        .then(({results}) => setTv(results))
        GetFilms('popular', 1, 'person')
        .then(({results}) => setPerson(results))
        GetFilms('popular', 1)
        .then(({results}) => setPopularity(results))
        GetFilms('upcoming', 1)
        .then(({results}) => setSoon(results))
    }, [])


    return ( 
        <section id='home' style={{
            background: `${dark ? 'rgb(36, 5, 0)' : 'rgb(231, 132, 117)'}`
        }}>
            <div className='home_gen'>
            <div className='container'>
                <div className='home'>
                    <div className='home_text'>
                        <h1 className='home_title'>Wellcome to <span className='logo'>Film<span>PRO</span></span> </h1>
                        <p>Information and trailers of million films, TV shows , series and actors, enjoy!</p>
                    </div>


                    <div className='home_content'>

                    <Section dark={dark} title='Top 10 popular movies:' data={popularity} count={10} typeOfCard='movie'/>

                    <Section dark={dark} title='Soon in theatres:' data={soon} count={10} typeOfCard='movie'/>

                    <Section dark={dark} title='Top 5 movies in theatres now:' data={inCinema} count={5} typeOfCard='movie'/>

                    <Section dark={dark} title='Top popular on TV:' data={tv} count={5} typeOfCard='movie'/>
 

                    <Section dark={dark} title='Top 10 popular actors:' data={person} count={10} typeOfCard='person'/>


        

                    </div>
                </div>
                </div>
            </div>
        </section>
     );
}

export default Home;