import React from "react";
import hero from "../../asstes/img/hero.svg";
import security from "../../asstes/img/security.svg";
import flexibility from "../../asstes/img/flexibility.svg";
import collaboration from "../../asstes/img/colaboration.svg";
import '../../index.css';

function Hero() {
  return (
    <>
      <section className="pt-[90px] w-full picture">
        <div className="grid grid-cols-2 md:px-[150px] gap-2 py-[30px] bg-zinc-100">
          <div className="pt-[80px]">
            <div className="py-[40px]">
              <h1 className="text-[50px] font-normal">Communiquer. </h1>
              <span className="text-[50px] font-normal"> Collaborer. Créer.</span>
              <p className="text-xl  py-5">
                Campy fournit un moyen efficace et puissant de gérer vos projets
              </p>
              <button className=" my-4 bg-black h-12 w-28 border-black border-2 text-center text-white">
                Commencer
              </button>
            </div>
            <div className="flex space-x-8 py-8">
              <div className="flex space-x-2">
                <img src={security}  alt="securite"/>
                <span>Rapidité et sécurité</span>
              </div>
              <div className="flex space-x-2">
                <img src={flexibility} alt="flexibilité"/>
                <span>Flexibilité et évolutivité</span>
              </div>
              <div className="flex space-x-2">
                <img src={collaboration} alt="collaboration" />
                <span>Meilleure collaboration</span>
              </div>
            </div>
          </div>
          <div>
            <img className="h-[600px]" src={hero} alt="hero" />
          </div>
          
        </div>
        
      </section>
    </>
  );
}

export default Hero;
