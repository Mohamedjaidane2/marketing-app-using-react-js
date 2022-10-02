import React from "react";

function Quotes() {
  return (
    <section className="bg-amber-400">
      <div className=" items-center py-32 px-9 md:grid md:grid-cols-2 grid-flow-col md:gap-5">
        <div className="text text-4xl  ">
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
