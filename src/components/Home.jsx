import React from 'react';
import '../styles/Home.css'

const Home = () => {
    return (
        <div className='PageContainer'>
            <div className="TagLine">
                <b>Dedicated to the Rescue and Rehabilitation of Abandoned Cats and Kittens</b>
            </div>
            <div className='MissionStatementContainer'>
                <div className='MissionStatement'>
                    At Purrfect Love Cat Rescue, our mission is to end the suffering and overpopulation of feral, abandoned, and abused cats through rescue and rehabilitation and through a Trap-Neuter-Return program with superior colony care, community education, and responsible adoption.
                </div>
            </div>
            <div className="BodyContainer">
                <div className="MainContent">
                    <div className="PhotoGalleryContainer">
                        Photo Gallery Placeholder
                    </div>
                    <div className="RealityCheck">
                        Reality Check Placeholder
                    </div>
                </div>
                <div className="EventsContainer">
                    Events Placeholder
                </div>
            </div>
        </div>
    )
}

export default Home;