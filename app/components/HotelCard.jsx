import Image from "next/image";

const HotelCard = ({hotel}) => {

    const star = Math.round(hotel.stars) ;
    const stars = [];
    
    for (let index = 0; index < star; index++) {
      stars.push(
        <Image
          src="/star.svg"
          alt="star"
          width={15}
          height={15}
          key={`start ${index}`}
        />
      );
    }

  return (
    <div className="w-full cursor-pointer group ">
      {/* Imagem */}
      <div className="relative w-full h-32 sm:h-44 lg:h-52 2xl:h-72 overflow-hidden">
        <Image src={hotel.image} fill alt="img" className="object-cover group-hover:scale-[1.01] transition-all"/>
      </div>

      {/* Informações */}
      <div className="flex flex-col gap-1 mt-2">

        {/* Local hotel */}
        <p className="text-sm sm:text-base font-normal">{hotel.local}</p>

        {/* Nome e estrelas */}
        <div className="flex gap-2 flex-wrap">
          <h3 className="text-xl sm:text-2xl font-semibold">{hotel.name}</h3>
          <span className="gap-1 inline-flex">{stars}</span>
        </div>

        {/* Classificação */}
        <div className="flex gap-1 items-center">
          <span className="w-6 h-6 bg-secondary border border-black justify-center items-center flex text-xs font-semibold">
            {hotel.stars}
          </span>
          <span className="text-xs font-medium">Exelente ({hotel.numAva})</span>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
