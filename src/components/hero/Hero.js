import React from "react";
import hero from "../../asstes/img/hero.svg";
import security from "../../asstes/img/security.svg";
import flexibility from "../../asstes/img/flexibility.svg";
import collaboration from "../../asstes/img/colaboration.svg";
import "../../index.css";

function Hero() {
  return (
    <>
      <section className="md:pt-[90px] pt-20 w-full picture">
        <div className="lg:grid flex-col lg:grid-cols-2 mg:px-[60px] lg:px-[17%] lg:gap-2 py-[30px] bg-zinc-100">
          <div className="lg:hidden grid justify-center">
            <img className=" mt-8 h-[400px]" src={hero} alt="hero" />
          </div>
          <div className="lg:pt-[80px]">
            <div className=" px-4 md:py-[40px]">
              <h1 className="lg:text-[50px] text-center text-[40px] font-normal lg:text-left">
                Communiquer. Collaborer. Créer.{" "}
              </h1>
              <span className="lg:text-[50px] text-[40px] lg:text-left font-normal">
                {" "}
              </span>
              <p className="lg:text-xl lg:text-left text-center py-5">
                Campy fournit un moyen efficace et puissant de gérer vos projets
              </p>
              <button className="lg:my-4 bg-black lg:h-12 lg:w-28 border-black border-2 text-center text-white hidden lg:block">
                Commencer
              </button>
            </div>
            <div className="lg:flex lg:px-5  justify-items-center">
              
              <div className="flex space-x-3 pt-5 justify-center ">
                <img
                  src={flexibility}
                  className="h-[30px] w-auto"
                  alt="flexibilité"
                />
                <span>Flexibilité et évolutivité</span>
              </div>
              <div className="flex space-x-3 pt-5 justify-center ">
                <img
                  src={collaboration}
                  className="h-[30px] w-auto"
                  alt="collaboration"
                />
                <span>Meilleure collaboration</span>
              </div>
              <div className="flex space-x-3 pt-5 justify-center ">
                <img
                  src={security}
                  className="h-[30px] w-auto"
                  alt="collaboration"
                />
                <span>Sécurité , Maintenance</span>
              </div>
            </div>
            <div className=" mx-3 py-11 ">
              <button className="lg:hidden rounded-lg my-4 w-full bg-black h-12  border-black border-2 text-center text-white ">
                Commencer
              </button>
            </div>
          </div>
          <div className="hidden lg:flex">
            <img className="h-[600px]" src={hero} alt="hero" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
