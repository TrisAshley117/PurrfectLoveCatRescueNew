
import '../styles/ZoomedImage.css'

const ZoomedImage = ({IsVisible, imgSrc, zoomOutCommand}) => {
    if (!IsVisible) return null;

    return (
        <div className='ImageOverlay'>
            <div className="ImageContainer">
                <img src={imgSrc} alt='hi' className="ZoomedImage" />
                <div className="CloseButton" onClick={zoomOutCommand}>
                    <div>✕</div>
                </div>
            </div>
            <button className="MobileCloseButton" onClick={zoomOutCommand}>Close</button>
        </div>
    )
}

export default ZoomedImage;