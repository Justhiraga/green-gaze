import { ArrowRight } from "lucide-react";

export default function Button({ text }) {
  return (
    <button
      className="flex items-center gap-2  rounded-xl border border-bordercolor bg-background px-4 py-4 font-[Inter] text-white cursor-pointer hover:bg-primary hover:text-black hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
            shadow-primary"
    >
      <p>{text}</p>
      <ArrowRight size={16} />
    </button>
  );
}
