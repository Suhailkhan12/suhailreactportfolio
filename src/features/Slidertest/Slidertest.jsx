import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

import { Autoplay } from "swiper/modules";

import "./Slidertest.scss";
import sliderDatas from "../../../Sliderdata";

function Slidertest() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        speed={5000}
        autoplay={{
          delay: 400,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        loop
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        freeMode={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {sliderDatas.map((teacher) => (
          <SwiperSlide>
            <div className="testimonial">
              <div className="testimonial__front">
                <div className="testimonial__front--imagecontainer">
                  <img
                    src={teacher.facultyimagelink}
                    alt=""
                    className="testimonial__front--image"
                  />
                </div>
                <div className="testimonial__front--content">
                  <div className="testimonial__front--one">
                    <h3 className="heading-3">{teacher.facultyname}</h3>
                    <p className="paragraph">{teacher.facultyposition}</p>
                  </div>
                  <div className="testimonial__front--two">
                    {teacher.facultyeducation.map((item) => (
                      <span>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="testimonial__back">
                <div className="testimonial__back--content">
                  <h3 className="heading-3">{teacher.facultyname}</h3>
                  <p className="paragraph">{teacher.facultydesc}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slidertest;
