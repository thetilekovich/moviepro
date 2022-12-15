import React,{useEffect, useState} from 'react';
import { GetFilms } from '../../GetFilms';
import '../style.css'
import Card from '../Card';
import SlideBtn from '../../../assets/btn/SlideBtn';
import Search from '../../Search';


function Popular(props) {
    const {dark,  search, setSearch} = props
    const [popular, setPopular] = useState([])
    const [count, setCount] = useState(1)
    useEffect(()=> {
        GetFilms('popular', count)
        .then(({results}) => setPopular(results))
    }, [])
    return ( 
        <section id='category'>
            
            <div className='container'>
            <Search search={search} setSearch={setSearch}/>

                <div className='category'>
                    <div className='cards'>
                    { popular.map(e => <Card dark={dark} key={e.id} e={e}/>) }
                    
                    </div>
                    <div className='cards_btn'>
                        <SlideBtn title='Previous' setCount={setCount} setCategory={setPopular} dark={dark} cat='popular' count={count}/>
                        <SlideBtn title='Next' setCount={setCount} setCategory={setPopular} dark={dark} cat='popular' count={count}/>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Popular; 