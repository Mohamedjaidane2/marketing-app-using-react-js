import React from "react";
import contruit from "../../asstes/img/construit.svg";
import ct1 from "../../asstes/img/ct1.svg";
import ct2 from "../../asstes/img/ct2.svg";
import ct3 from "../../asstes/img/ct3.svg";

function Construit() {
  return (
    <section className="px-[20%] py-[100px]">
      <div className="grid lg:grid-cols-2 lg:gap-8">
        <div>
          <img className="h-auto w-[500px]" src={contruit} alt="construit" />
        </div>
        <div>
          <h1 className="text-5xl leading-[62px]">Construit pour et par les créatifs</h1>
          <p className="py-[30px] leading-8 text-xl" >
            Paragraphe. Vous pouvez le modifier et ajouter votre propre texte.
            Double-cliquez ici ou cliquez sur « Modifier le texte » pour ajouter
            votre contenu et personnaliser la police. C'est l'espace idéal pour
            raconter une histoire et vous présenter à vos visiteurs.
          </p>
          <div className="grid grid-cols-3 gap-7 py-[30px]">
            <div className="flex space-x-4">
              <img className="w-[40px]" src={ct1} alt="ct" />
              <p>Kit d'outils complet</p>
            </div>
            <div className="flex space-x-4">
              <img className="w-[40px]" src={ct2} alt="ct" />
              <p>Partage de fichiers intégré</p>
            </div>
            <div className="flex space-x-4">
              <img className="w-[40px]" src={ct3} alt="ct" />
              <p>Liberté totale de conception</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Construit;
