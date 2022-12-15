import React from 'react';
import './footer.css'

function Footer(props) {
    const {dark} = props
    return ( 
        <footer id='footer'>
            <div className='container'>
                <div className='footer' style={{
                    color: `${dark ? 'wheat' :'wheat'}`
                }}>
                     <div>
                        <h1 className='footer_logo'>MOVIE<span>PRO</span></h1>
                        <p>thanks for visiting</p>
                    </div>
                    <div className='footer_gen'>
                        <div className='footer_item'>
                            <li className='footer_title'>MAIN</li>
                            <li><a href="https://www.themoviedb.org/about" rel="noreferrer" target='_blank'>ABOUT US</a> </li>
                            <li><a href="https://www.themoviedb.org/about/staying-in-touch" rel="noreferrer" target='_blank'>CONTACT US</a></li>
                            <li><a href="https://www.themoviedb.org/talk" rel="noreferrer" target='_blank'>FORUMS</a></li>
                            <li><a href="https://www.themoviedb.org/documentation/api" rel="noreferrer" target='_blank'>API</a></li>
                        </div>
                        <div  className='footer_item'>
                            <li className='footer_title'>JOIN US</li>
                            <li><a href="https://www.themoviedb.org/bible" rel="noreferrer" target='_blank'>WRITE TO JOIN</a></li>
                            <li><a href="https://www.themoviedb.org/movie/new" rel="noreferrer" target='_blank'>ADD NEW FILM</a></li>
                            <li><a href="https://www.themoviedb.org/tv/new" rel="noreferrer" target='_blank'>ADD NEW SERIES</a></li>
                        </div>
                        <div  className='footer_item'>
                            <li className='footer_title'>COMMUNITY</li>
                            <li><a href="https://www.themoviedb.org/documentation/community/guidelines"rel="noreferrer"  target='_blank'>MANAGEMENT</a></li>
                            <li><a href="https://www.themoviedb.org/discuss" rel="noreferrer" target='_blank'>DISCUSSION</a></li>
                            <li><a href="https://www.themoviedb.org/leaderboard" rel="noreferrer" target='_blank'>LEADER BOARD</a></li>
                            <li><a href="https://twitter.com/themoviedb" rel="noreferrer" target='_blank'>TWITTER</a></li>
                        </div>
                        <div  className='footer_item'>
                            <li className='footer_title'>ABOUT LAW</li>
                            <li><a href="https://www.themoviedb.org/terms-of-use" rel="noreferrer" target='_blank'>TERMS OF USE</a></li>
                            <li><a href="https://www.themoviedb.org/documentation/api/terms-of-use" rel="noreferrer" target='_blank'>API TERMS OF USE</a></li>
                            <li><a href="https://www.themoviedb.org/privacy-policy" rel="noreferrer" target='_blank'>PRIVACY POLICY</a></li>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
     );
}

export default Footer;