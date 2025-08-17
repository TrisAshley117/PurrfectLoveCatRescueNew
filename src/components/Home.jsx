import {React, useState, useEffect, useRef} from 'react';
import '../styles/Home.css'

import {FaArrowLeft, FaArrowRight, FaCircle} from 'react-icons/fa'
import ZoomedImage from '../components/ZoomedImage.jsx'

import img1 from '../assets/DevTest/Sample1.png'
import img2 from '../assets/DevTest/Sample2.png'
import img3 from '../assets/DevTest/Sample3.png'
import img4 from '../assets/DevTest/Sample4.png'

const images = [img1, img2, img3, img4]

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    const [imageZoomed, setImageZoomed] = useState(false);
    const zoomImageIn = () =>  { setImageZoomed(true); };
    const zoomImageOut = () => { setImageZoomed(false); };

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
        if (imageZoomed) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            return;
        }

        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 8000);

        return () => clearInterval(intervalRef.current);
    }, [imageZoomed]);

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

    const SetImage = (i) => {
        setCurrentIndex(i)
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
                            <img src={images[currentIndex]} className="PhotoGalleryImage" onClick={zoomImageIn}/>
                            <button className="PhotoButton Right" onClick={ToNextImage}><FaArrowRight className="ButtonArrow"/></button>
                            <div className="PhotoGalleryTracker">
                                {[...Array(images.length)].map((_, i) => {
                                    return (
                                        i === currentIndex ? <FaCircle className="PhotoGalleryTrackerCricle Active" onClick={() => SetImage(i)}/> 
                                        : <FaCircle className="PhotoGalleryTrackerCricle" onClick={() => SetImage(i)}/>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='RealityCheckContainer'>
                        <div className="RealityCheck">
                            <p>Many imagine feral cats living free and healthy in nature—but the truth is far harsher. These cats often scavenge from garbage, shelter in unsafe places, and face constant threats from starvation, disease, predators, and even people. Many are hit by cars, poisoned, or suffer from parasites. Without help, half of all feral kittens die within their first year.</p><br /><p>At Purrfect Love Cat Rescue, we work to rescue, rehabilitate, and rehome these forgotten felines. Explore our site to meet some of our ferals, see our adoptable cats and kittens, and learn how you can help us reduce their suffering and overpopulation.</p>
                        </div>
                    </div>
                </div>
                <div className="EventsContainer">
                    <div className="EventsContent">
                        <div className="EventsHeader">
                                <b>Adoptions</b>
                        </div>
                        <ul className="Events">
                            <li>Weekly adoptions held at Pet Super Market in Vestavia!</li>
                            <ul className="SubEvents">
                                <li><b>Friday:</b> 2:30 PM - 6:00 PM</li>
                                <li><b>Saturday:</b> 1:00 PM - 4:30 PM</li>
                                <li><b>Sunday:</b> 1:00 PM - 4:30 PM</li>
                            </ul>
                        </ul>
                    </div>
                    <div className="EventsContent">
                        <div className="EventsHeader">
                                <b>Events</b>
                        </div>
                        <ul className="Events">
                            <li>No upcoming events</li>
                        </ul>
                    </div>
                </div>
            </div>
            <ZoomedImage IsVisible={imageZoomed} imgSrc={images[currentIndex]} zoomOutCommand={zoomImageOut} />
        </div>
    )
}

export default Home;