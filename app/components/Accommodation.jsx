"use client";

import HotelCard from "./HotelCard";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

import { hotels } from "../constants";
import Image from "next/image";
import { useRef } from "react";

const Accommodation = () => {
  const swiperRef = useRef();

  return (
    <section className="container_padding container_margin_top relative">
      <div className="flex justify-between">
        <h2>Hospedagem</h2>

        <div className=" hidden gap-3 sm:flex">
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
      </div>

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
            slidesPerView: 3,
            spaceBetween: 8,
          },
          1281: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="mt-9 w-full relative"
      >
        {/* Content */}
        {hotels.map((hotel) => (
          <SwiperSlide key={hotel.name}>
            <HotelCard hotel={hotel} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Accommodation;
