import React from 'react';
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className='FooterContainer'>
            <div className='LegalInfo'>
                Purrfect Love Cat Rescue is a nonprofit 501 (c) (3) charity.
                <br />
                Purrfect Love Cat Rescue © Copyright. All Rights Reserved
            </div>
            {/* <button className='DonateNowButton'>
                Donate Now
            </button> */}
            <div className='Credit'>Website Created By Tristan "Tris" Ashley</div>
        </div>
    )
}

export default Footer;