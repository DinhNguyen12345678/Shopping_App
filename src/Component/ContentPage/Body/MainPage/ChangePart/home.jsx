import React from 'react';
import Slider from 'react-slick';
import advertiser_1 from '../../../../../assets/images/advertise_1.jpeg';
import advertiser_2 from '../../../../../assets/images/advertise_2.jpeg';
import advertiser_3 from '../../../../../assets/images/advertise_3.jpeg';

function HomePart() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <Slider {...settings} className="home__slider">
            <div className="home__slider-item">
                <img src={advertiser_1} alt="" />
            </div>
            <div className="home__slider-item">
                <img src={advertiser_2} alt="" />
            </div>
            <div className="home__slider-item">
                <img src={advertiser_3} alt="" />
            </div>
        </Slider>
    )
}

export default HomePart;