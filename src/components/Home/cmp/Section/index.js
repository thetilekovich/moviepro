import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../pages/Card';
import PersonCard from '../../../pages/PersonCard';


function Section(props) {
    const {dark, title, data, count, typeOfCard} = props
    if(typeOfCard === 'person'){
       return (
        <div className='movie content_gen'
        
        style={{
            background: `${dark ? 'black' : 'white'}`,
        }}>
            <h1 className='content_title' style={{
                color: `${dark ? 'aqua' : 'black'}`
            }}>{title}</h1>
            <div className='cinema_gen'>
                {  
                data.map((e, idx) => (
                 idx < count ? <PersonCard dark={dark} key={e.id} e={e}/> : '')
                )}
            </div>
            <Link style={{color: `${dark ? 'white' : 'black'}`}} className='home_link'>See more</Link>
        </div>
       ) 
    }
    if(typeOfCard === 'movie') { 
        return(
            <div className='actors content_gen'
            onClick={() => {
                window.scrollTo(0, 0)
            }}
            style={{
                background: `${dark ? 'black' : 'white'}`,
            }}>
                <h1 className='content_title' style={{
                    color: `${dark ? 'aqua' : 'black'}`
                }}>{title}</h1>
                <div className='cinema_gen'>
                    {  
                    data.map((e, idx) => (
                     idx < count ? <Card dark={dark} key={e.id} e={e}/> : '')
                    )}
                </div>
                <Link style={{color: `${dark ? 'white' : 'black'}`}} className='home_link'>See more</Link>
            </div>
        )
            
    }
}

export default Section;