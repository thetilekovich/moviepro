import React, {useState} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Best from './components/pages/Best';
import Popular from './components/pages/Popular';
import Upcoming from './components/pages/Upcoming';
import Home from './components/Home';
import MoviePage from './components/pages/MoviePage';
import ActorPage from './components/pages/ActorPage';

function App() {
  const [burger, setBurger] = useState(false)
  const [dark, setDark] = useState(true)
  const [search, setSearch] = useState('')
  return (
    <div className='App' style={{background: `${dark ? '#272727' : 'white'}`, color: `${dark ? 'wheat' : 'black'}`}} onClick={(e) => {
      setTimeout(() => {
        
      }, 1000)
}}>
      <Header dark={dark} setDark={setDark} search={search} setSearch={setSearch} burger={burger} setBurger={setBurger}/>
      <Routes>
        <Route path='/' element={<Home dark={dark}/>}/>
        <Route path='/pop' element={<Popular dark={dark}/>}/>
        <Route path='/soon' element={<Upcoming dark={dark}/>}/>
        <Route path='/best' element={<Best dark={dark}/>}/>
        <Route path='/movies/movie-info/:movieId' element={<MoviePage dark={dark}/>}/>
        <Route path='/actors/actor-info/:actorId' element={<ActorPage dark={dark}/>}/>
      </Routes>
      <section id='wellcome'>
            <div className='wellcome_gen'>
            <div className='container'>
                <div className='home'>
                    <div className='home_text'>
                        <h1 className='home_title'>Wellcome to <span className='logo'>Film<span>PRO</span></span> </h1>
                        <p>Million films, TV shows , series and actors datas, enjoy learning!</p>
                        <div className='start_container'>
                          <Link className='lets_start' to='/' onClick={() => {
                            window.scrollY(500)
                          }}>Let's Start</Link>
                      </div>
                    </div>
                   
                </div>
            </div>
            </div>
      </section>        
      <Footer/>
    </div>
  );
}

export default App;