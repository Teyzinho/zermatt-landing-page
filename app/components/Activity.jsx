"use client";
import { motion, AnimatePresence } from "framer-motion";

import { wrap } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const ativitys = [
  {
    title: "Esqui e Snowboard",
    desc: "Com as montanhas cobertas de neve durante boa parte do ano, Zermatt é um paraíso para esquiadores e snowboarders. As pistas variadas e desafiadoras oferecem diversão para todos os níveis de habilidade.",
    image: "/images/esqui.png",
  },
  {
    title: "Trilhas de Montanha",
    desc: "Explore a beleza alpina através de trilhas bem marcadas. Desde caminhadas tranquilas até trilhas mais desafiadoras, as vistas panorâmicas e a natureza exuberante estão ao alcance de todos.",
    image: "/images/trilhas.webp",
  },
  {
    title: "Passeios de Bicicleta:",
    desc: "Tanto para ciclistas experientes quanto para iniciantes, as trilhas para bicicletas oferecem uma maneira emocionante de explorar as paisagens alpinas.",
    image: "/images/bicicleta.jpg",
  },
];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Activity = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, ativitys.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <h2 className="container_margin_top container_padding">
        Atividades e Aventuras
      </h2>
      <section id="ativity" className="w-full h-[550px] xl:h-[800px] relative overflow-hidden mt-12">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            src={ativitys[imageIndex].image}
            className="object-cover absolute w-full h-full brightness-95"
            alt="SliderImg"
          />
        </AnimatePresence>

        <div className="absolute w-fit max-w-3xl h-fit flex flex-col gap-3 justify-center px-4 lg:px-16 py-7 bg-black/30 sm:bg-primary z-10 text-white bottom-0 sm:bottom-4 lg:bottom-11 sm:left-1/2 sm:-translate-x-1/2">
          <h3 className="text-2xl sm:text-4xl font-semibold">
            {ativitys[imageIndex].title}
          </h3>

          <p className=" text-sm sm:text-base font-medium">{ativitys[imageIndex].desc}</p>
        </div>

        {/* Left and right buttons */}
        <button
          type="button"
          className="absolute z-10 top-1/2  p-3 border border-primary rounded-full bg-white right-3 sm:right-16 lg:right-36 xl:right-52 2xl:right-64"
          onClick={() => paginate(1)}
        >
          <Image
            src="/right-arrow.svg"
            width={15}
            height={15}
            alt="leftArrow"
          />
        </button>
        <button
          type="button"
          className="absolute z-10 top-1/2 left-3 sm:left-16 lg:left-36 xl:left-52 2xl:left-64 p-3 border border-primary rounded-full bg-white"
          onClick={() => paginate(-1)}
        >
          <Image
            src="/left-arrow.svg"
            width={15}
            height={15}
            alt="rightArrow"
          />
        </button>
      </section>
    </>
  );
};

export default Activity;
