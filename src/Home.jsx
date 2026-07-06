import Banner from "./molecules/Banner.jsx";
import Hero from "./organismes/Hero.jsx";

export default function Home() {
  return (
    <div className="w-full h-screen bg-background p-10">
      <Banner />
      <Hero />
    </div>
  );
}
