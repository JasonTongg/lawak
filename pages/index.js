import React from "react";
import About from "@/components/About";
import HowToBuy from "@/components/HowToBuy";
import Tokenomics from "@/components/Tokenomics";
import Hero from "@/components/Hero";

export default function index(props) {
  return (
    <div className="w-full">
      <Hero />
      <About {...props} />
      <HowToBuy />
      <Tokenomics />
    </div>
  );
}
