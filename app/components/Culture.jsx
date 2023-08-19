import Image from "next/image";

const Culture = () => {
  return (
    <section className="container_padding container_margin_top">
      <div className="relative">
        <div className="relative w-[833px] h-[607]">
          <Image
            src="/images/cultureImg.png"
            className="object-cover "
            width={833}
            height={607}
            alt="Culture Img"
          />
        </div>

        <div className="w-[695px] h-[323px] right-0 top-[48px] absolute bg-stone-900 flex-col justify-center items-center gap-[22px] inline-flex">
          <div className="flex-col justify-center  gap-[22px] flex text-white py-16 px-16">
            <h2>Cultura</h2>
            <p className="lg:text-2xl font-light">
              A cultura de Zermatt é uma fusão fascinante de tradições alpinas e
              uma mentalidade moderna, enraizada nas belezas naturais que cercam
              a cidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
