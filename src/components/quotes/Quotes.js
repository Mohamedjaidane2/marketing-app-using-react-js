import React from "react";

function Quotes() {
  return (
    <section className="bg-amber-400">
      <div className=" items-center md:py-32 py-12 px-[10%] md:grid md:grid-cols-2 grid-flow-col md:gap-5">
        <div className="font-normal md:text-[40px] text-[24px] ">
          <p className="">Avec le bon logiciel, de grandes choses peuvent se produire</p>
        </div>
        <div className="text-l pt-9 md:pt-0">
          <p>
            Paragraphe. Vous pouvez le modifier et ajouter votre texte.
            Double-cliquez ici ou cliquez sur « Modifier le texte » pour ajouter
            votre contenu et personnaliser la police. Utilisez cet espace pour
            raconter une histoire et vous présenter à vos visiteurs. Vous pouvez
            le faire glisser-déposer où vous le souhaitez sur la page.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Quotes;
