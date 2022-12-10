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
                        <h1 className='footer_logo'>FILM<span>PRO</span></h1>
                        <p>thanks for visiting</p>
                    </div>
                    <div className='footer_gen'>
                        <div className='footer_item'>
                            <li className='footer_title'>MAIN</li>
                            <li><a href="https://www.themoviedb.org/about" target='_blank'>ABOUT US</a> </li>
                            <li><a href="https://www.themoviedb.org/about/staying-in-touch" target='_blank'>CONTACT US</a></li>
                            <li><a href="https://www.themoviedb.org/talk" target='_blank'>FORUMS</a></li>
                            <li><a href="https://www.themoviedb.org/documentation/api" target='_blank'>API</a></li>
                        </div>
                        <div  className='footer_item'>
                            <li className='footer_title'>JOIN US</li>
                            <li><a href="https://www.themoviedb.org/bible" target='_blank'>WRITE TO JOIN</a></li>
                            <li><a href="https://www.themoviedb.org/movie/new" target='_blank'>ADD NEW FILM</a></li>
                            <li><a href="https://www.themoviedb.org/tv/new" target='_blank'>ADD NEW SERIES</a></li>
                        </div>
                        <div  className='footer_item'>
                            <li className='footer_title'>COMMUNITY</li>
                            <li><a href="https://www.themoviedb.org/documentation/community/guidelines" target='_blank'>MANAGEMENT</a></li>
                            <li><a href="https://www.themoviedb.org/discuss" target='_blank'>DISCUSSION</a></li>
                            <li><a href="https://www.themoviedb.org/leaderboard" target='_blank'>LEADER BOARD</a></li>
                            <li><a href="https://twitter.com/themoviedb" target='_blank'>TWITTER</a></li>
                        </div>
                        <div  className='footer_item'>
                            <li className='footer_title'>ABOUT LAW</li>
                            <li><a href="https://www.themoviedb.org/terms-of-use" target='_blank'>TERMS OF USE</a></li>
                            <li><a href="https://www.themoviedb.org/documentation/api/terms-of-use" target='_blank'>API TERMS OF USE</a></li>
                            <li><a href="https://www.themoviedb.org/privacy-policy" target='_blank'>PRIVACY POLICY</a></li>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
     );
}

export default Footer;