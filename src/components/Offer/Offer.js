import React from "react";
import offer1 from "../../asstes/img/offer1.webp";
import offer2 from "../../asstes/img/offer2.webp";
import offer3 from "../../asstes/img/offer3.webp";
import offer4 from "../../asstes/img/offer4.webp";
import "../../index.css";

function Offer() {
  return (
    <section className="py-[60px] px-[17%]">
      <div className="py-16   ">
        <p className="lg:text-5xl text-3xl lg:text-left text-center font-normal">Notre offre</p>
        <p className="lg:text-lg text-left   py-6 lg:mr-[50%]">
          Paragraphe. Vous pouvez le modifier et ajouter votre texte.
          Double-cliquez ici ou cliquez sur « Modifier le texte » pour ajouter
          votre contenu et personnaliser la police.
        </p>
      </div>
      <div className="lg:grid items-start place-items-center lg:grid-cols-4 lg:gap-5 grid grid-rows- ">
        <div className="pic lg:pb-0 pb-7">
          <img src={offer1} className="border-[3px] rounded-xl border-black lg:h-[350px] w-auto " alt='offer' />
          <p className="text-xl font-semibold my-6 text-center ">Flux de travail efficaces</p>
          <p className="lg:text-center text-left  ">
            Paragraphe. Cliquez ici pour le modifier et ajouter votre propre
            texte. C'est l'espace idéal pour raconter une histoire et vous
            présenter à vos visiteurs.
          </p>
        </div>
        <div className="pic lg:pb-0 pb-7  " >
          <img src={offer2} className="border-[3px] rounded-xl border-black lg:h-[350px] w-auto " alt='offer' />
          <p className="text-xl font-semibold my-6 text-center ">Solution intégrale</p>
          <p className="lg:text-center text-left ">
            Paragraphe. Cliquez ici pour le modifier et ajouter votre propre
            texte. C'est l'espace idéal pour raconter une histoire et vous
            présenter à vos visiteurs.
          </p>
        </div>
        <div className="pic lg:pb-0 pb-7   ">
          <img src={offer3} className="border-[3px] rounded-xl border-black lg:h-[350px] w-auto " alt='offer' />
          <p className="text-xl font-semibold my-6 text-center ">Support client complet</p>
          <p className="lg:text-center text-left ">
            Paragraphe. Cliquez ici pour le modifier et ajouter votre propre
            texte. C'est l'espace idéal pour raconter une histoire et vous
            présenter à vos visiteurs.
          </p>
        </div>
        <div className="pic lg:pb-0 pb-7   ">
          <img src={offer4} className="border-[3px] rounded-xl border-black lg:h-[350px] w-auto " alt='offer' />
          <p className="text-xl font-semibold my-6 text-center ">Outils intelligents </p>
          <p className="lg:text-center text-left ">
            Paragraphe. Cliquez ici pour le modifier et ajouter votre propre
            texte. C'est l'espace idéal pour raconter une histoire et vous
            présenter à vos visiteurs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Offer;
