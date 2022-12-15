import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Best from './components/pages/Best';
import Popular from './components/pages/Popular';
import Upcoming from './components/pages/Upcoming';
import Home from './components/Home';
import MoviePage from './components/pages/MoviePage';
import ActorPage from './components/pages/ActorPage';
import SearchResult from './components/pages/SearchResult';

function App() {
  const [burger, setBurger] = useState(false)
  const [dark, setDark] = useState(true)
  const [search, setSearch] = useState('')


  return (
    <div className='App' style={{ background: `${dark ? '#272727' : 'white'}`, color: `${dark ? 'wheat' : 'black'}` }}>
      <Header dark={dark} setDark={setDark} search={search} setSearch={setSearch} burger={burger} setBurger={setBurger} />
      <Routes>
        <Route path='/moviepro' element={<Home dark={dark} search={search} setSearch={setSearch}/>} />
        <Route path='/pop' element={<Popular dark={dark} />}  search={search} setSearch={setSearch}/>
        <Route path='/soon' element={<Upcoming dark={dark} search={search} setSearch={setSearch}/>} />
        <Route path='/best' element={<Best dark={dark} />} search={search} setSearch={setSearch}/>
        <Route path='/movies/movie-info/:movieId' element={<MoviePage dark={dark} />} />
        <Route path='/actors/actor-info/:actorId' element={<ActorPage dark={dark} />} />
        <Route path='/search/:movieName' element={<SearchResult dark={dark} search={search} setSearch={setSearch}/>} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;