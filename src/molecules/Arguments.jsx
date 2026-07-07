import { Hourglass, DatabasePlus, TrendingUp, AlarmClock } from "lucide-react";

export default function Arguments() {
  return (
    <div className=" mt-15 flex items-center justify-center bg-fadegreen2 rounded-2xl p-6 border border-bordercolor">
      <div className="flex gap-10">
        <div className="flex items-center justify-center gap-5">
          <Hourglass size={52} color="#7dff73" />
          <div className="flex flex-col">
            <p className=" text-white font-[Inter] text-[30px] font-semibold">
              &lt; 30 min
            </p>
            <p className=" text-gray font-[Inter] text-[13px]">
              Temps moyen d'intégration
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center  gap-5">
          <DatabasePlus size={52} color="#7dff73" />
          <div className="flex flex-col">
            <p className=" text-white font-[Inter] text-[30px] font-semibold">
              20+
            </p>
            <p className=" text-gray font-[Inter] text-[13px]">
              Sources de données connectables
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center  gap-5">
          <TrendingUp size={52} color="#7dff73" />
          <div className="flex flex-col">
            <p className=" text-white font-[Inter] text-[30px] font-semibold">
              Illimité
            </p>
            <p className=" text-gray font-[Inter] text-[13px]">
              Équipements analysés
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <AlarmClock size={52} color="#7dff73" />
          <div className="flex flex-col">
            <p className=" text-white font-[Inter] text-[30px] font-semibold">
              Toutes les 24h
            </p>
            <p className=" text-gray font-[Inter] text-[13px]">
              Mise à jour des indicateurs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
