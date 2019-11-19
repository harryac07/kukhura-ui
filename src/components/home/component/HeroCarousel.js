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
        backgroundImage: 'url("https://dummyimage.com/1200x500/cccccc/000.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        minHeight: '500px'
      }}
    >
      {/* <Slider {...settings}>
        <div>
          <img src="https://dummyimage.com/1200x400/eeeeee/fff.jpg" />
        </div>
        <div>
          <img src="https://dummyimage.com/1200x400/eeeeee/fff.jpg" />
        </div>
        <div>
          <img src="https://dummyimage.com/1200x400/eeeeee/fff.jpg" />
        </div>
      </Slider> */}
    </div>
  )
}
export default HeroCarousel