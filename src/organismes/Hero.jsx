import Dashboard from "../assets/img/dashboard.png";
import Button from "../atoms/Button";
import ButtonArrow from "../atoms/ButtonArrow";
import Arguments from "../molecules/Arguments";
import { CalendarClock, Radical, Puzzle } from "lucide-react";

export default function Hero() {
  return (
    <div className="bg-background">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-primary font-[Inter] text-[13px] flex">
            PLATEFORME DE PILOTAGE CARBONE IT
          </p>
          <h1 className="text-white font-[Inter] text-[40px] font-bold">
            Pilotez l'empreinte carbone <br /> de votre parc informatique <br />{" "}
            en temps réel.
          </h1>
          <p className="text-gray font-[Inter] text-[14px]">
            Ingestion automatisée des inventaires, <br /> calculs fiables et
            interface modulable <br /> pour transformer vos données IT en <br />
            décisions environnementales exploitables !
          </p>

          <div className="flex gap-4 mt-4">
            <ButtonArrow text="Demander une démo" />
            <Button text="Voir la platforme" />
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col  mt-10 ">
              <CalendarClock size={52} color="#7dff73" className="mb-2" />
              <p className=" text-white font-[Inter] text-[16px]">
                Données en temps réel
              </p>
              <p className=" text-gray font-[Inter] text-[14px]">
                Suivi continu de votre parc
              </p>
            </div>
            <div className="flex flex-col  mt-10 ">
              <Radical size={52} color="#7dff73" className="mb-2" />
              <p className=" text-white font-[Inter] text-[16px]">
                Calculs fiables
              </p>
              <p className=" text-gray font-[Inter] text-[14px]">
                Méthodologie transparente
              </p>
            </div>
            <div className="flex flex-col  mt-10 ">
              <Puzzle size={52} color="#7dff73" className="mb-2" />
              <p className=" text-white font-[Inter] text-[16px]">
                Interface modulable
              </p>
              <p className=" text-gray font-[Inter] text-[14px]">
                Adaptée à chaque métier
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <img
            src={Dashboard}
            alt="placeholder"
            width={700}
            height={570}
            className="object-cover
              rounded-2xl
              shadow-2xl
              shadow-primary
              "
          ></img>
        </div>
      </div>
      <Arguments />
    </div>
  );
}
