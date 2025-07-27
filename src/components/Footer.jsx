import React from 'react';
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className='FooterContainer'>
            <div className='LegalInfo'>
                Purrfect Love Cat Rescue is a nonprofit 501 (c) (3) charity.
                <br />
                Purrfect Love Cat Rescue © Copyright. All Rights Reserved  | <u><a href='https://google.com'>Privacy Policy</a></u>
            </div>
            <button className='DonateNowButton'>
                Donate Now
            </button>
        </div>
    )
}

export default Footer;