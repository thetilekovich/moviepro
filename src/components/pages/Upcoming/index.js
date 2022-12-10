import React,{useEffect, useState} from 'react';
import { GetFilms } from '../../GetFilms';
import '../style.css'
import Card from '../Card';
import SlideBtn from '../../../assets/btn/SlideBtn';


function Upcoming(props) {
    const {dark} = props
    const [upcoming, setUpcoming] = useState([])
    const [count, setCount] = useState(1)
    useEffect(()=> {
        GetFilms('upcoming', 1)
        .then(({results})=> setUpcoming(results))
    }, [])
    return ( 
        <section id='category'>
            <div className='container'>
                <div className='category'>
                    <div className='cards'>
                    { upcoming.map(e => <Card  dark={dark} key={e.id} e={e}/>) }
                    </div>
                    <div className='cards_btn'>
                        <SlideBtn title='Previous' setCount={setCount} setCategory={setUpcoming} dark={dark} cat='upcoming' count={count}/>
                        <SlideBtn title='Next' setCount={setCount} setCategory={setUpcoming} dark={dark} cat='upcoming' count={count}/>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Upcoming;