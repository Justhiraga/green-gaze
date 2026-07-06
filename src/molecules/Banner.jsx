import { ScanEye } from "lucide-react";
import { NavLink } from "react-router";
import Button from "../atoms/Button";

export default function Banner() {
  return (
    <header className="flex items-center mb-30">
      <ScanEye size={52} className="text-primary" />
      <h1 className="ml-4 text-3xl font-bold font-[Inter] text-white">
        Green Gaze
      </h1>

      <ul className="ml-auto flex gap-8 font-[Inter] text-gray ">
        <li className="cursor-pointer hover:underline">Produit</li>
        <li className="cursor-pointer hover:underline">Fonctionnalités</li>
        <li className="cursor-pointer hover:underline">Méthodologie</li>
        <li className="cursor-pointer hover:underline">Intégrations</li>
        <li className="cursor-pointer hover:underline">Ressources</li>
        <li className="cursor-pointer hover:underline">Tarifs</li>
      </ul>

      <div className="ml-8 flex items-center bg-fadegreen rounded-lg p-3">
        <NavLink to="/login" className="ml-2 font-[Inter] text-gray">
          Se connecter
        </NavLink>
        <Button text="Demander une démo" />
      </div>
    </header>
  );
}
