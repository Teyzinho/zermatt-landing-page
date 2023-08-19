import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[530px] sm:h-[580px] xl:h-[700px] 2xl:h-[850px] flex items-center justify-center">
      <Image
        src="/hero.png"
        fill
        alt="heroImg"
        className="object-cover absolute -z-10"
        priority={true}
        quality={100}
      />

      <div className="flex flex-col text-white items-center gap-0">
        <p className={`italic font-semibold sm:text-3xl `}>Deslumbre</p>
        <h1 className=" text-6xl sm:text-9xl font-bold p-0 m-0">
          ZERMA
          <span className="text-secondary">TT</span>
        </h1>
        <p className="italic font-medium sm:text-3xl">
          o encanto alpino espera por você
        </p>
      </div>

      <div className="absolute w-[75px] h-[75px] sm:w-[99px] sm:h-[99px] bottom-[-30px] right-[20%] bg-secondary flex items-center justify-center">
        <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] relative animate-bounce">
          <Image
            src="/arrow-down.svg"
            fill
            alt="arrow down"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
