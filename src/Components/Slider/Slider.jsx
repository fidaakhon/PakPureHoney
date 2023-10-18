import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Img1 from '../Images/img1.jpg';
import Img2 from '../Images/img2.jpg';
import Img3 from '../Images/img3.jpg';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="Slider">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className='slider_items'>
                    <img className="d-block sliderImg" src={Img1} alt="First slide" />
                    <Carousel.Caption>
                        <h3 className='h3'>PakPureHoney</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='slider_items'>
                    <img className="d-block sliderImg" src={Img2} alt="First slide" />
                    <Carousel.Caption>
                        <h3>PakPureHoney</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='slider_items'>
                    <img className="d-block sliderImg" src={Img3} alt="First slide" />
                    <Carousel.Caption>
                        <h3>PakPureHoney</h3>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
}

export default ControlledCarousel;