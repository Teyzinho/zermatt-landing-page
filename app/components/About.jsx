"use client";

import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";

const About = () => {

  return (
    <section className="container_padding container_margin_top flex flex-col sm:flex-row ">
      <div className="bg-primary color white py-16 px-16 sm:px-20 flex flex-col text-white gap-5 w-full flex-1">
        <motion.h2 
          initial={{ opacity: 0, x:-20 }} 
          whileInView={{ opacity: 1, x:0 }}
        >
          Sobre
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x:-20 }} 
          transition={{delay: 0.2}}
          whileInView={{ opacity: 1, x:0}} 
          className="lg:text-2xl font-light"
        >
          Zermatt, onde o encanto alpino ganha vida. Aninhada sob o olhar atento
          do Matterhorn, nossa cidade é um convite para explorar paisagens de
          tirar o fôlego e mergulhar na rica cultura alpina. Trilhas
          deslumbrantes, aventuras emocionantes e momentos genuínos esperam por
          você.
        </motion.p>
      </div>

      <div className="w-full h-72 sm:h-auto sm:flex-1 relative">
        <Image
          src="/images/aboutImg.png"
          fill
          alt="AboutImg"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default About;
