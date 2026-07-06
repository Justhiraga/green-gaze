import { ArrowRight } from "lucide-react";

export default function Button({ text }) {
  return (
    <button className="flex items-center gap-2  rounded-xl border border-bordercolor bg-background px-4 py-4 font-[Inter] text-white cursor-pointer hover:bg-primary hover:text-black">
      <p>{text}</p>
      <ArrowRight size={16} />
    </button>
  );
}
