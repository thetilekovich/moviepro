import React, {useState, useEffect} from 'react';
import './home.css'
import { GetFilms } from '../GetFilms';
import Card from '../pages/Card';
import PersonCard from '../pages/PersonCard';
import { Link } from 'react-router-dom';


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
            <div className='container'>
                <div className='home'>
                    <div className='home_text'>
                        <h1 className='home_title'>Wellcome to <span className='logo'>Film<span>PRO</span></span> </h1>
                        <p>Millions films, TV shows , series and actors, enjoy!</p>
                    </div>



                    <div className='home_content'>

                        <div className='popularity content_gen'style={{
                        background: `${dark ? 'black' : 'white'}`,
                    }}>
                            <h1 className='content_title' style={{
                                color: `${dark ? 'aqua' : 'black'}`
                            }}>Top 10 popular movies:</h1>
                            <div className='cinema_gen'>
                                { popularity.map((e, idx) => (
                                 idx < 10 ? <Card key={e.id} e={e}/> : '')
                                )}
                            </div>
                            <Link style={{color: `${dark ? 'white' : 'black'}`}} className='home_link' to='/pop'>See more</Link>
                        </div>


                        <div className=' content_gen'style={{
                        background: `${dark ? 'black' : 'white'}`,
                    }}>
                            <h1 className='content_title' style={{
                                color: `${dark ? 'aqua' : 'black'}`
                            }}>Soon in theatres:</h1>
                            <div className='cinema_gen'>
                                { soon.map((e, idx) => (
                                 idx < 10 ? <Card key={e.id} e={e}/> : '')
                                )}
                            </div>
                            <Link style={{color: `${dark ? 'white' : 'black'}`}}  className='home_link' to='/soon'>See more</Link>
                        </div>


                        <div className='cinema content_gen'style={{
                        background: `${dark ? 'black' : 'white'}`,
                    }}>
                            <h1 className='content_title' style={{
                                color: `${dark ? 'aqua' : 'black'}`
                            }}>Top 5 movies in theatres now:</h1>
                            <div className='cinema_gen'>
                                { inCinema.map((e, idx) => (
                                 idx < 5 ? <Card key={e.id} e={e}/> : '')
                                )}
                            </div>
                            <Link style={{color: `${dark ? 'white' : 'black'}`}} className='home_link'>See more</Link>
                        </div>



                        <div className='tv content_gen'style={{
                        background: `${dark ? 'black' : 'white'}`,
                    }}>
                            <h1 className='content_title' style={{
                                color: `${dark ? 'aqua' : 'black'}`
                            }}>Top 5 popular on TV:</h1>
                            <div className='cinema_gen'>
                                { tv.map((e, idx) => (
                                 idx < 5 ? <Card key={e.id} e={e}/> : '')
                                )}
                            </div>
                            <Link style={{color: `${dark ? 'white' : 'black'}`}} className='home_link' >See more</Link>
                        </div>



                        <div className='actors content_gen'style={{
                        background: `${dark ? 'black' : 'white'}`,
                    }}>
                            <h1 className='content_title' style={{
                                color: `${dark ? 'aqua' : 'black'}`
                            }}>Top 10 popular actors:</h1>
                            <div className='cinema_gen'>
                                { person.map((e, idx) => (
                                 idx < 10 ? <PersonCard key={e.id} e={e}/> : '')
                                )}
                            </div>
                            <Link style={{color: `${dark ? 'white' : 'black'}`}} className='home_link'>See more</Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
     );
}

export default Home;