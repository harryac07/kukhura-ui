import React from 'react'
import Slider from "react-slick";
// Import css files for react click carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HeroCarousel = (props) => {
    const settings = {
        centerMode: true,
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
        <div
            style={{
                backgroundImage: 'url("https://hips.hearstapps.com/countryliving.cdnds.net/16/25/4000x2000/landscape-1466594288-hen-chicken.jpg?resize=1200:650")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                // backgroundPosition: 'center',
                minHeight: '500px',
                maxHeight: '650px'
            }}
        >
            <div
                style={{
                    backgroundColor: 'green',
                    minHeight: '500px',
                    maxHeight: '650px',
                    opacity: 0.2
                }}
            />
        </div>
    )
}
export default HeroCarousel