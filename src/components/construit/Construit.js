import React from "react";
import contruit from "../../asstes/img/construit.svg";
import ct1 from "../../asstes/img/ct1.svg";
import ct2 from "../../asstes/img/ct2.svg";
import ct3 from "../../asstes/img/ct3.svg";

function Construit() {
  return (
    <section className="px-[15%] py-3 lg:py-[100px]">
      <div className="grid lg:grid-cols-2 lg:gap-[6.5rem]">
        <div className="place-content-center">
          <img className="h-auto lg:w-[500px] w-full pb-6 " src={contruit} alt="construit" />
        </div>
        <div>
          <h1 className="lg:text-3xl text-2xl text-left leading-[30px]">Construit pour et par les créatifs</h1>
          <p className="py-[30px] leading-8 text-left text-sm" >
            Paragraphe. Vous pouvez le modifier et ajouter votre propre texte.
            Double-cliquez ici ou cliquez sur « Modifier le texte » pour ajouter
            votre contenu et personnaliser la police. C'est l'espace idéal pour
            raconter une histoire et vous présenter à vos visiteurs.
          </p>
          <div className="grid text-left font-light text-[10px] md:text-[10px]  md:grid-cols-3 md:gap-20 gap-6 lg:py-[30px]">
            <div className="flex space-x-4">
              <img className="w-[30px]" src={ct1} alt="ct" />
              <p >Kit d'outils complet</p>
            </div>
            <div className="flex space-x-4 ">
              <img className="w-[30px]" src={ct2} alt="ct" />
              <p>Partage de fichiers intégré</p>
            </div>
            <div className="flex space-x-4">
              <img className="w-[30px]" src={ct3} alt="ct" />
              <p>Liberté totale de conception</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Construit;
