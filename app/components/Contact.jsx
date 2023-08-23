import InfoCard from "./InfoCard";

import { infos } from "../constants/index"

const Contact = () => {

  return (
    <section id="contact" className="container_padding container_margin_top relative">
      <h2>Informações e Contato</h2>


      {/* <div className="grid grid-cols-4 gap-5 mt-9"> */}
      <div className="lg:grid lg:grid-cols-3 xl:grid-cols-4  gap-3 2xl:gap-5 mt-9">
        {
          infos.map((info) => (
            <InfoCard info={info} key={info.title}/>
          ))
        }

      </div>
    </section>
  );
};

export default Contact;
