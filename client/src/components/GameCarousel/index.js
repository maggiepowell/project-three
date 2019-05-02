import React from 'react';
import Swiper from 'react-id-swiper';

const GameCarousal = () => {
  const params = {
    effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: '.swiper-pagination'
      }
  }
 
  return(
    <div>
        <div className="swiper-container">
            <Swiper {...params}>
                <span><img src="https://via.placeholder.com/150/000000/FFFFFFC/O https://placeholder.com/" alt="placeholder"/></span>
                <span><img src="https://via.placeholder.com/150/000000/FFFFFFC/O https://placeholder.com/" alt="placeholder"/></span>
                <span><img src="https://via.placeholder.com/150/000000/FFFFFFC/O https://placeholder.com/" alt="placeholder"/></span>
                <span><img src="https://via.placeholder.com/150/000000/FFFFFFC/O https://placeholder.com/" alt="placeholder"/></span>
                <span><img src="https://via.placeholder.com/150/000000/FFFFFFC/O https://placeholder.com/" alt="placeholder"/></span>
            </Swiper>
        </div>
    </div>
  )
}
 
export default GameCarousal;