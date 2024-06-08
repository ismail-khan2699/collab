import Image from "next/image";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Component from "./Components/component";
import Section from "./Components/Section";
import Newsection from "./Components/Newsection";
export default function Home() {
  return (
    <>
      
      <Navbar />
      <HeroSection />
      <Component />
      <Section />

<Newsection/>

    </>
  );
}
