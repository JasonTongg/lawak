import React, { useEffect } from "react";
import About from "@/components/About";
import HowToBuy from "@/components/HowToBuy";
import Tokenomics from "@/components/Tokenomics";
import Hero from "@/components/Hero";
import { useSelector } from "react-redux";
import { fetchDexscreener, fetchDextools, fetchUniswap } from "@/store/data";
import Store from "@/store/store";

export default function index(props) {
  useEffect(() => {
    document.addEventListener("contextmenu", (event) => event.preventDefault());
    const handleKeyDown = (event) => {
      if (
        (event.ctrlKey &&
          event.shiftKey &&
          (event.key === "I" || event.key === "J")) ||
        event.key === "F12"
      ) {
        event.preventDefault();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", (event) =>
        event.preventDefault()
      );
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  console.log(props);
  return (
    <div className="w-full">
      <Hero {...props} />
      <About {...props} />
      <HowToBuy {...props} />
      <Tokenomics {...props} />
    </div>
  );
}

export async function getServerSideProps() {
  const state = Store.getState();
  const { twitter, telegram, address } = state.data;

  await Store.dispatch(fetchDexscreener(address));
  await Store.dispatch(fetchDextools(address));
  await Store.dispatch(fetchUniswap(address));

  const dextoolsUrl = state.data.dextoolsUrl;
  const uniswapUrl = state.data.uniswapUrl;
  const dexscreenerUrl = state.data.dexscreenerUrl;

  const additionalProps = {
    address,
    twitter,
    telegram,
    dextoolsUrl,
    uniswapUrl,
    dexscreenerUrl,
  };

  return {
    props: {
      message: "Welcome to the SSR website!",
      ...additionalProps,
    },
  };
}
