
import '../styles/ZoomedImage.css'

const ZoomedImage = ({IsVisible, imgSrc, zoomOutCommand}) => {
    if (!IsVisible) return null;

    return (
        <div className='ImageOverlay'>
            <div className="ImageContainer">
                <img src={imgSrc} alt='hi' class="ZoomedImage" />
                <div className="CloseButton" onClick={zoomOutCommand}>x</div>
            </div>
        </div>
    )
}

export default ZoomedImage;