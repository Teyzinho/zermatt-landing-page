"use client";

import Image from "next/image";
import { motion, AnimatePresence, delay } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  const [scrollingUp, setScrollingUp] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrollingUp(currentScrollPos < prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

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

  const handleItemClick = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    })

    isOpen && setisOpen(false)
  }

  return (
    <>
      <motion.nav 
        initial={{ y: 0 }}
        animate={{ y: scrollingUp ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`container_padding top-0 left-0 flex items-center justify-between text-white fixed w-full z-10 pt-2 transition-all ${prevScrollPos > 500 ? 'bg-primary' : 'bg-none'}`}
      >
        <div className="flex items-center ">
          <Image src="/mountain.png" width={50} height={50} alt="logo" />

          <span className="flex font-medium text-3xl">
            <p>ZERMA</p>
            <p className="text-secondary">TT</p>
          </span>
        </div>

        {/* Desktop Info */}
        <div className="gap-6 hidden sm:flex text-lg">
          <button onClick={() => handleItemClick('about')}>Sobre</button>
          <button onClick={() => handleItemClick('tour')}>Tour</button>
          <button onClick={() => handleItemClick('ativity')}>Atividades</button>
          <button onClick={() => handleItemClick('accommodation')}>Hospedagem</button>
          <button onClick={() => handleItemClick('contact')}>Contato</button>
        </div>

        {/* Mobile info */}
        <div className="flex sm:hidden">
          <button type="button" onClick={() => setisOpen(true)}>
            <Image src="/list.svg" width={35} height={35} alt="list" />
          </button>
        </div>
      </motion.nav>

      {/* Animação hamburger menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.button
            variants={variants}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100vw", opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit="close"
            className="h-full w-full bg-primary fixed right-0 text-white flex flex-col items-center justify-center gap-6 text-2xl pb-10 font-medium z-50"
          >
            <button
              className="absolute right-6 top-6 border border-white w-8 h-8 rounded-full "
              onClick={() => setisOpen(false)}
            >
              X
            </button>

            <motion.button
            onClick={() => handleItemClick('about')}
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
            </motion.button>

            <motion.button
            onClick={() => handleItemClick('tour')}
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
            </motion.button>

            <motion.button
            onClick={() => handleItemClick('accommodation')}
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
            </motion.button>

            <motion.button
            onClick={() => handleItemClick('contact')}
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
            </motion.button>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
