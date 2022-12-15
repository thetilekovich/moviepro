import React,{useEffect, useState} from 'react';
import { GetFilms } from '../../GetFilms';
import '../style.css'
import Card from '../Card';
import SlideBtn from '../../../assets/btn/SlideBtn';
import Search from '../../Search';


function Best(props) {
    const {dark, search, setSearch} = props
    const [best, setBest] = useState([])
    const [count, setCount] = useState(1)
    useEffect(()=> {
        GetFilms('top_rated', 1)
        .then(({results})=> setBest(results))
    }, [])
    return ( 
        <section id='category'>
            <div className='container'>
            <Search search={search} setSearch={setSearch}/>
                <div className='category'>
                    <div className='cards'>
                    { best.map(e => <Card  dark={dark} key={e.id} e={e}/>) }
                    </div>
                    <div className='cards_btn'>
                        <SlideBtn title='Previous' setCount={setCount} setCategory={setBest} dark={dark} cat='top_rated' count={count}/>
                        <SlideBtn title='Next' setCount={setCount} setCategory={setBest} dark={dark} cat='top_rated' count={count}/>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Best;