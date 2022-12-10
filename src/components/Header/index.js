import React, { useState } from 'react';
import './header.css'
import { NavLink, Link } from 'react-router-dom';

function Header(props) {
    const {dark, setDark, search, setSearch, burger, setBurger, setOpen, open} = props
    return ( 
        <header id='header' >
            <div className='container'>
                <div className='header'>
                    <div className='header_left'>
                        <h1 className='header_logo' style={{color: `${dark ? 'white' : 'white'}`}}>FILM<span>PRO</span></h1>
                        <nav className='header_menu' >
                            <NavLink  className='menu_item' to='/'> Home </NavLink>    
                            <NavLink className='menu_item' to='/pop'> Popular </NavLink>
                            <NavLink  className='menu_item'  to='/soon'> Upcoming </NavLink>
                            <NavLink className='menu_item'  to='/best'> Best Forever </NavLink>
                        </nav>
                    </div>


{/* =======================================================SEARCH===================================================== */}


                    <div className='header_search'>
                            <input onChange={(e) => setSearch(e.target.value)} placeholder='Search' className='search_input' type="search" style={{
                                border: `${dark ? '1px solid wheat' : '1px solid wheat'}`,
                                color: `${dark ? 'wheat' : 'wheat'}`,
                                borderRight : 'none'
                            }} />
                            <button onClick={() => console.log(search)} className='search_btn'style={{
                                color: `${dark ? 'wheat' : 'wheat'}`,
                                border: `${dark ? '1px solid wheat' : '1px solid wheat'}`,
                            }}
                            >Search</button>
                    </div>


{/* =======================================================BURGER MENU===================================================== */}


                    <div className='header_burger_menu' >
                        <div className={`${burger ? 'not menu_burger' : 'menu_burger' }`} onClick={() => {
                            setBurger(!burger)
                        }}>
                            <div className={burger ? 'burger_first' : ''} ></div>
                            <div className={burger ? 'burger_middle' : ''}></div>
                            <div className={burger ? 'burger_last' : ''}></div>
                        </div>
                        <nav className='burger_item' style={{
                            background: `${dark ? 'rgb(2, 65, 2)' : 'rgb(2, 65, 2)'}`,
                            transform:  `${burger ? 'scale(1)' : 'scale(0)'}`,
                            transformOrigin: `top right`
                        }}>
                            <NavLink  className='b_menu_item' to='/'> Home </NavLink>
                            <NavLink className='b_menu_item' to='/pop'> Popular </NavLink>
                            <NavLink  className='b_menu_item'  to='/soon'> Upcoming </NavLink>
                            <NavLink className=' b_menu_item'  to='/best'> Best films </NavLink>
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