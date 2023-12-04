import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube,Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import '../css/swiper-custom-styles.css';
const slideImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

export default () => {
  return (
    <Swiper
      effect={'cube'}
      grabCursor={true}
      className="mySwiper"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube,Keyboard]}
      spaceBetween={50}
      slidesPerView={1} // 한 번에 한 개의 슬라이드만 표시
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500 }} 
      loop={true} // 슬라이드 끝에 도달하면 다시 처음으로 시작
    >
      <SwiperSlide>
        <div style={{ width: '100%', height: '100%' }}>
          <img
            src={process.env.PUBLIC_URL + '/imgs/main_img_2.png'}
            alt='Slide 1'
            style={slideImageStyle}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ width: '100%', height: '100%' }}>
          <img
            src={process.env.PUBLIC_URL + '/imgs/main_img_1.png'}
            alt='Slide 2'
            style={slideImageStyle}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ width: '100%', height: '100%' }}>
          <img
            src={process.env.PUBLIC_URL + '/imgs/tmp1.png'}
            alt='Slide 3'
            style={slideImageStyle}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ width: '100%', height: '100%' }}>
          <img
            src={process.env.PUBLIC_URL + '/imgs/main_img_2.png'}
            alt='Slide 4'
            style={slideImageStyle}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
