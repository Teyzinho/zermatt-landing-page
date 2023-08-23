"use client";

import Image from "next/image";

const Footer = () => {
  const handleItemClick = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="container_margin_top bg-primary text-white w-full">
      <div className="h-60 flex flex-col items-center justify-center gap-4">
        <p className="text-2xl sm:text-3xl font-bold mt-12">Redes Sociais</p>
        <span className="flex gap-3">
          <Image
            src="/sociais/twitter.svg"
            width={45}
            height={45}
            alt="twitter"
          />
          <Image
            src="/sociais/instagram.svg"
            width={45}
            height={45}
            alt="instagram"
          />
          <Image
            src="/sociais/linkedin.svg"
            width={45}
            height={45}
            alt="linkedIn"
          />
        </span>
      </div>

      <div className="border-t-2 border-white h-16 flex justify-center items-center">
        <div className="gap-x-6 gap-y-2 flex sm:text-lg justify-center items-center flex-wrap">
          <button onClick={() => handleItemClick("about")}>Sobre</button>
          <button onClick={() => handleItemClick("tour")}>Tour</button>
          <button onClick={() => handleItemClick("ativity")}>Atividades</button>
          <button onClick={() => handleItemClick("accommodation")}>
            Hospedagem
          </button>
          <button onClick={() => handleItemClick("contact")}>Contato</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
