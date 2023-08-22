"use client";

import Image from "next/image";
import { useState } from "react";

const InfoCard = ({ info }) => {
  const content = { __html: info.content };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* DeskTok */}
      <div className="hidden lg:inline-flex w-full h-[450px] px-6 2xl:px-16 py-5 bg-zinc-100 shadow flex-col justify-start items-start gap-[22px] ">
        <Image
          src={info.image}
          width={75}
          height={75}
          alt="contact"
          className="mx-auto"
        />

        <h4 className="text-black text-2xl font-medium">{info.title}</h4>

        <div dangerouslySetInnerHTML={content} className="info_content" />
      </div>

      {/* Mobile */}
      <div className="flex flex-col lg:hidden px-3 py-2 bg-zinc-100 shadow mb-0.5">
        <div
          onClick={() => setIsOpen(isOpen ? false : true)}
          className="flex items-center cursor-pointer h-20 justify-between w-full"
        >
          <div className="flex gap-2 ">
            <Image
              src={info.image}
              width={35}
              height={35}
              alt="contact"
              className="mx-auto"
            />
            <h4 className="text-black text-xl font-medium">{info.title}</h4>
          </div>

          <button
            type="button"
            className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all`}
          >
            <Image
              src="/arrow-down.svg"
              width={15}
              height={15}
              alt="arrow down"
            />
          </button>
        </div>

        <div
          dangerouslySetInnerHTML={content}
          className={`transition-all overflow-hidden  flex flex-col gap-2 ${
            isOpen ? "max-h-[500px]" : "max-h-0"
          } `} 
        />

      </div>
    </>
  );
};

export default InfoCard;
