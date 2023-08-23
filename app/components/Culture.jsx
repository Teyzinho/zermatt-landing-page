"use client";

import Image from "next/image";

import { motion } from "framer-motion";

const Culture = () => {
  return (
    <section id="culture" className="container_padding mt-40">
      <div className="relative ">
        <div className="relative w-full h-96 sm:w-[625px] sm:h-[500px] 2xl:w-[833px] 2xl:h-[607px]">
          <Image
            src="/images/cultureImg.png"
            className="object-cover "
            fill
            alt="Culture Img"
          />
        </div>

        <div className=" w-full sm:w-6/12 h-fit right-0 top-[48px] sm:absolute bg-stone-900 flex-col justify-center items-center gap-[22px] inline-flex">
          <div className="flex-col justify-center gap-[22px] flex text-white py-16 px-16">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              Cultura
            </motion.h2>
            <motion.p
              className=" xl:text-2xl font-light"
              initial={{ opacity: 0, x: -20 }}
              transition={{ delay: 0.2 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              A cultura de Zermatt é uma fusão fascinante de tradições alpinas e
              uma mentalidade moderna, enraizada nas belezas naturais que cercam
              a cidade.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
