import React from "react";
import InfoCard from "./InfoCard";

const Contact = () => {
  return (
    <section className="container_padding container_margin_top relative">
      <h2>Informações e Contato</h2>

      <div className="flex gap-5">
        <InfoCard/>
      </div>
    </section>
  );
};

export default Contact;
