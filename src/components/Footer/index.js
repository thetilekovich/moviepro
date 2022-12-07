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
                        <p>thank for visit</p>
                    </div>
                    <div className='footer_gen'>
                        <div className='footer_item'>
                            <li className='footer_title'>MAIN</li>
                            <li>ABOUT US</li>
                            <li>CONTACT US</li>
                            <li>FORUMS</li>
                            <li>API</li>
                        </div>
                        <div  className='footer_item'>
                            <li className='footer_title'>JOIN US</li>
                            <li>WRITE TO JOIN</li>
                            <li>ADD NEW FILM</li>
                            <li>ADD NEW SERIES</li>
                        </div>
                        <div  className='footer_item'>
                            <li className='footer_title'>COMMUNITY</li>
                            <li>MANAGEMENT</li>
                            <li>DISCUSSION</li>
                            <li>HALL OF FAME</li>
                            <li>TWITTER</li>
                        </div>
                        <div  className='footer_item'>
                            <li className='footer_title'>ABOUT LAW</li>
                            <li>TERMS OF USE</li>
                            <li>API TERMS OF USE</li>
                            <li>PRIVACY POLICY</li>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
     );
}

export default Footer;