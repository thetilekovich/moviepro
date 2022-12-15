import React, { useState } from 'react';
import './header.css'
import { NavLink, Link} from 'react-router-dom';



function    Header(props) {
    const {dark, setDark, search, setSearch, burger, setBurger} = props
    return ( 
        <header id='header' >
            <div className='container'>
                <div className='header'>
                    <div className='header_left'>
                        <Link className='logo_link' to='/moviepro'>
                            <h1 className='header_logo' style={{color: `${dark ? 'white' : 'white'}`}}>MOVIE<span>PRO</span></h1>
                        </Link>
                        <nav className='header_menu' >
                            <NavLink  className='menu_item' to='/moviepro'> Home </NavLink>    
                            <NavLink className='menu_item' to='/pop'> Popular </NavLink>
                            <NavLink  className='menu_item'  to='/soon'> Upcoming </NavLink>
                            <NavLink className='menu_item'  to='/best'> Best Forever </NavLink>
                        </nav>
                    </div>


{/* =======================================================SEARCH===================================================== */}

                    


{/* =======================================================BURGER MENU===================================================== */}


                    <div className='header_burger_menu' >
                        <div className='menu_burger' onClick={() => {
                            setBurger(!burger)
                        }}>
                            <div className={burger ? 'burger_first' : ''} ></div>
                            <div className={burger ? 'burger_middle' : ''}></div>
                            <div className={burger ? 'burger_last' : ''}></div>
                        </div>
                        <nav className='burger_item' style={{
                            transform:  `${burger ? 'scale(1)' : 'scale(0)'}`,
                            transformOrigin: `top right`
                        }}>
                            <NavLink  className='b_menu_item' to='/moviepro'> Home </NavLink>
                            <NavLink className='b_menu_item' to='/pop'> Popular </NavLink>
                            <NavLink  className='b_menu_item'  to='/soon'> Upcoming </NavLink>
                            <NavLink className=' b_menu_item'  to='/best'> Best forever </NavLink>
                        </nav>
                    </div>

{/* =======================================================SET BG===================================================== */}

                    <button onClick={() => setDark(!dark)} className='set-bg' style={{
                            background: `${dark ? 'wheat' : 'black'}`,
                            justifyContent: `${dark ? 'flex-end' : 'flex-start'}`,
                            border: `${dark ? '2px solid #272727' : '2px solid wheat'}`
                        }}> 
                            <div style={{background: `${dark ? 'black' : 'wheat'}`}}></div>
                    </button>
                </div>
            </div>
        </header>
     );
}

export default Header;