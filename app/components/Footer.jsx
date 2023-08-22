import Image from "next/image";

const Footer = () => {
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
        <div className="gap-6 flex sm:text-lg justify-center items-center flex-wrap">
          <span>Sobre</span>
          <span>Tour</span>
          <span>Hospedagem</span>
          <span>Contato</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
