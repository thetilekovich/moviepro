import React from 'react';
import { GetFilms } from '../../../components/GetFilms';

function SlideBtn(props) {
    const {title, setCount, count, cat, setCategory, dark} = props
    return ( 
        <button  onClick={() => {
        setCount(count+1)
        GetFilms(`${cat}`, count)
        .then(({results})=> setCategory(results))
    }}
     style={{
        borderColor: `${dark ? 'wheat' : 'black'}`,
        color: `${dark ? 'wheat' : 'black'}`
    }}>{title}</button> 
    );
}

export default SlideBtn;