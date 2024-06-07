import Image from "next/image";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Component from "./Components/component";

export default function Home() {
  return (
    <>

      <Navbar />
      <HeroSection />
      <Component />

    </>
  );
}
