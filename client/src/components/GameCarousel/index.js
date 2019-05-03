import React from 'react';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full'
import "./style.css";



class GameCarousel extends React.Component {
  render() {
    const params = {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      loop: true, 
  }

    return(
      <div className="jumbotron">
        <h1 className="text-center">FeaturedGames</h1>
            <Swiper {...params}>
                <div className="swiper-slide">Slide 1</div>
                <div className="swiper-slide">Slide 2</div>
                <div className="swiper-slide">Slide 3</div>
                <div className="swiper-slide">Slide 4</div>
            </Swiper>
      </div>
    )
  }
  
}

export default GameCarousel