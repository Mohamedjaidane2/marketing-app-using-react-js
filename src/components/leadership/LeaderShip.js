import React from "react";
import 'animate.css';
import ScrollEffect from "react-scroll-effects";
import l1 from "../../asstes/img/l1.webp";
import l2 from "../../asstes/img/l2.webp";
import l3 from "../../asstes/img/l3.webp";
import l4 from "../../asstes/img/l4.webp";
import l5 from "../../asstes/img/l5.webp";
import l6 from "../../asstes/img/l6.webp";
import l7 from "../../asstes/img/l7.webp";
import l8 from "../../asstes/img/l8.webp";
function LeaderShip() {
    
  return (
    <section className=" my-4 py-[60px] px-[17%] bg-pink-200">
      <div >
        <ScrollEffect annimate='fadeIn'>
        <h1 className="lg:text-4xl text-2xl font-semibold text-left ">Leadership établi dans l'industrie</h1>
        </ScrollEffect>
        <p className="py-[30px] leading-8 text-left text-sm lg:text-lg">
          Paragraphe. Vous pouvez le modifier et ajouter votre texte.
          Double-cliquez ici ou cliquez sur « Modifier le texte » pour ajouter
          votre contenu et personnaliser la police.
        </p>
      </div>
      <div className="flex justify-center pt-2">
      <div className="grid grid-cols-2 gap-x-[70px] md:gap-x-[150px] md:grid-cols-4 gap-5 justify-center">
        <div><img src={l2} className="w-[110px]"/></div>
        <div><img src={l3} className="w-[110px]"/></div>
        <div><img src={l1} className="w-[110px]"/></div>
        <div><img src={l4} className="w-[110px]"/></div>
        <div><img src={l5} className="w-[110px]"/></div>
        <div><img src={l6} className="w-[110px]"/></div>
        <div><img src={l7} className="w-[110px]"/></div>
        <div><img src={l8} className="w-[110px]"/></div>
      </div>
      </div>
    </section>
  );
}

export default LeaderShip;
