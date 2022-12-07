import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Best from './components/pages/Best';
import Popular from './components/pages/Popular';
import Upcoming from './components/pages/Upcoming';
import Home from './components/Home';

function App() {
  const [dark, setDark] = useState(true)
  const [search, setSearch] = useState('')
  return (
    <div className='App' style={{background: `${dark ? '#272727' : 'wheat'}`, color: `${dark ? 'wheat' : 'black'}`}}>
      <Header dark={dark} setDark={setDark} search={search} setSearch={setSearch}/>
      <Routes>
        <Route path='/moviepro' element={<Home dark={dark}/>}/>
        <Route path='/moviepro/pop' element={<Popular dark={dark}/>}/>
        <Route path='/moviepro/soon' element={<Upcoming dark={dark}/>}/>
        <Route path='/moviepro/best' element={<Best dark={dark}/>}/>
        {/* <Route path='/movie/:id' element={<PageGen dark={dark} cat='top_rated'/>}/> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;