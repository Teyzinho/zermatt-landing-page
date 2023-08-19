"use client";

import { tour } from "../constants/index";
import TourCard from "./TourCard";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useCallback, useRef } from "react";

const Tour = () => {
  const swiperRef = useRef();

  return (
    <section className="container_padding container_margin_top">
      <h2>Tour</h2>

      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={20}
        slidesPerView={4}
        className="container_margin_top w-full relative"
      >
        {tour.map((item, index) =>
          index % 2 === 0 ? (
            <SwiperSlide key={item.title}>
              <TourCard item={item}/>
            </SwiperSlide>
          ) : (
            <SwiperSlide key={item.title} className="mt-24">
              <TourCard item={item}/>
            </SwiperSlide>
          )
        )}
      </Swiper>

      <button onClick={() => swiperRef.current?.slidePrev()}>Prev</button>
      <button onClick={() => swiperRef.current?.slideNext()}>Next</button>
    </section>
  );
};

export default Tour;
