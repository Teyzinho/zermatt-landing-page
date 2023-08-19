"use client";

import Image from "next/image";
import { motion, AnimatePresence, delay } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  const variants = {
    close: {
      opacity: 0,
      width: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 1.2,
      },
    },
    initial: {
      y: 80,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  console.log(isOpen);

  return (
    <>
      <nav className="container_padding flex items-center justify-between bg-primary/10 fixed w-full">
        <div className="flex items-center ">
          <Image src="/montain.svg" width={50} height={50} alt="logo" />

          <span className="flex font-medium text-3xl">
            <p>ZERMA</p>
            <p className="text-secondary">TT</p>
          </span>
        </div>

        {/* Desktop Info */}
        <div className="gap-6 hidden sm:flex">
          <span>Sobre</span>
          <span>Tour</span>
          <span>Hospedagem</span>
          <span>Contato</span>
        </div>

        {/* Mobile info */}
        <div className="flex sm:hidden">
          <button type="button" onClick={() => setisOpen(true)}>
            <Image src="/list.svg" width={35} height={35} alt="list" />
          </button>
        </div>
      </nav>

      {/* Animação hamburger menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={variants}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100vw", opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit="close"
            className="h-full w-full bg-primary absolute right-0 text-white flex flex-col items-center justify-center gap-6 text-2xl pb-10 font-medium"
          >
            <button
              className="absolute right-6 top-6 border border-white w-8 h-8 rounded-full "
              onClick={() => setisOpen(false)}
            >
              X
            </button>

            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 1,
                },
              }}
            >
              Sobre
            </motion.div>

            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.8,
                },
              }}
            >
              Tour
            </motion.div>

            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.6 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.6,
                },
              }}
            >
              Hospedagem
            </motion.div>

            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.8 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.4,
                },
              }}
            >
              Contato
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;