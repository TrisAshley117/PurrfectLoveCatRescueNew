import {React, useState} from 'react'
import '../styles/Header.css'
import Navigation from '../components/Navigation.jsx'
import logo from '../assets/Logo.jpg'

const Header = ({NavigateCommand}) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const NavigatePage = (NewPageKey) => {
        setMenuOpen(false);
        NavigateCommand(NewPageKey);
    }

    return (
        <div className='HeaderContainer'>
            <div className="LogoNameContainer">
                <img src={logo} alt='Purrfect Love Cat Rescue logo' className='Logo' />
                <b><span className="SiteName">Purrfect Love Cat Rescue</span></b>
            </div>

            <button className="HamburgerButton" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>

            <div className={`NavigationContainer ${menuOpen ? 'open' : ''}`}>
                <div className='Navigatable' onClick={() => NavigatePage("Home")}>
                    <b>Home</b>
                </div>                           
                <div className='Navigatable'>
                    <b>About</b>
                </div>
              <div className='Navigatable' onClick={() => NavigatePage("Donate")}>
                    <b>Donate</b>
                </div>
            </div>
        </div>
    )
}

export default Header;