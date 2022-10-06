import { Slide } from 'react-slideshow-image'
import somos1 from '@images/somos1.2.jpg'
import somos2 from '@images/somos2.2.jpg'
import somos3 from '@images/somos3.2.jpg'
import somos4 from '@images/somos4.2.jpg'

import './Carousel.scss'

const images = [somos1, somos2, somos3, somos4,]

const Carousel = () => {
    return (
        <div className="carousel">
            <Slide
                duration={2000}
                arrows={false}
                easing={'ease-out'}
            >
                {images.map((slideImage, index) => (
                    <div
                        key={index}
                        className="carousel-image"
                        style={{ backgroundImage: `url(${slideImage})` }}
                    />
                ))}
            </Slide>
        </div>
    )
}

export default Carousel