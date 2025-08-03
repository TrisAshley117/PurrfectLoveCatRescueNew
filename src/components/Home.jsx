import {React, useState, useEffect, useRef} from 'react';
import '../styles/Home.css'

import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'

import img1 from '../assets/DevTest/Sample1.png'
import img2 from '../assets/DevTest/Sample2.png'
import img3 from '../assets/DevTest/Sample3.png'
import img4 from '../assets/DevTest/Sample4.png'

const images = [img1, img2, img3, img4]

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [zoomed, setZoomed] = useState(false)
    const intervalRef = useRef(null);

    const startAutoPlay = () => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex+1) % images.length);
        }, 8000)
    }

    const resetAutoPlay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        startAutoPlay();
    }

    useEffect(() => {
        startAutoPlay()
        return () => clearInterval(intervalRef.current);
    }, []);

    const ToNextImage = () => {
        let i = currentIndex;
        i === images.length-1 ? setCurrentIndex(0) : setCurrentIndex(i + 1);
        resetAutoPlay();
    }

    const ToPrevImage = () => {
        let i = currentIndex;
        i === 0 ? setCurrentIndex(images.length-1) : setCurrentIndex(i - 1);
        resetAutoPlay();
    }

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
                        <div className="PhotoWrapper">
                            <button className="PhotoButton Left" onClick={ToPrevImage} ><FaArrowLeft className="ButtonArrow"/></button>
                            <img src={images[currentIndex]} className="PhotoGalleryImage"/>
                            <button className="PhotoButton Right" onClick={ToNextImage}><FaArrowRight className="ButtonArrow"/></button>
                        </div>
                    </div>
                    <div className='RealityCheckContainer'>
                        <div className="RealityCheck">
                            Reality Check Placeholder
                        </div>
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