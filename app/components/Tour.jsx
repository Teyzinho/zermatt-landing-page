"use client";

import { tour } from "../constants/index";
import TourCard from "./TourCard";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import Image from "next/image";

const Tour = () => {
  const swiperRef = useRef();

  return (
    <section id="tour" className="container_padding container_margin_top relative">
      <h2>Tour</h2>

      {/* Linha */}
      <div className="w-7/12 h-1.5 bg-primary  absolute right-0 top-52" />

      {/* Slide Swiper */}
      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={2}
        spaceBetween={8}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 8,
          },
          1281: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="mt-9 w-full relative"
      >
        {tour.map((item, index) =>
          index % 2 === 0 ? (
            <SwiperSlide key={item.title}>
              <TourCard item={item} />
            </SwiperSlide>
          ) : (
            <SwiperSlide key={item.title} className="mt-24">
              <TourCard item={item} />
            </SwiperSlide>
          )
        )}
      </Swiper>

      {/* Buttons */}
      <div className="absolute right-[25%] mt-5 flex flex-col items-center gap-3">
        <div className="flex gap-3">
          <button
            className="p-3 border border-primary rounded-full"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <Image
              src="/left-arrow.svg"
              width={15}
              height={15}
              alt="leftArrow"
            />
          </button>
          <button
            className="p-3 border border-primary rounded-full"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <Image
              src="/right-arrow.svg"
              width={15}
              height={15}
              alt="rightArrow"
            />
          </button>
        </div>

        <div className="w-36 h-1 bg-primary rounded-sm" />
      </div>
    </section>
  );
};

export default Tour;
