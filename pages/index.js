import React, { useEffect } from "react";
import About from "@/components/About";
import Social from "@/components/Social";
import Tokenomics from "@/components/Tokenomics";
import Hero from "@/components/Hero";
import { useSelector } from "react-redux";
import { fetchDexscreener, fetchDextools, fetchUniswap } from "@/store/data";
import Store from "@/store/store";

export default function Index() {
  // Use useSelector to get the relevant state from Redux
  const {
    twitter,
    telegram,
    address,
    dextoolsUrl,
    uniswapUrl,
    dexscreenerUrl,
    pairAddress,
  } = useSelector((state) => state.data);

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

  return (
    <div className="w-full relative">
      <Hero
        address={address}
        twitter={twitter}
        telegram={telegram}
        dextoolsUrl={dextoolsUrl}
        uniswapUrl={uniswapUrl}
        dexscreenerUrl={dexscreenerUrl}
      />
      <About
        address={address}
        twitter={twitter}
        telegram={telegram}
        dextoolsUrl={dextoolsUrl}
        uniswapUrl={uniswapUrl}
        dexscreenerUrl={dexscreenerUrl}
      />
      <Tokenomics
        address={address}
        twitter={twitter}
        telegram={telegram}
        dextoolsUrl={dextoolsUrl}
        uniswapUrl={uniswapUrl}
        dexscreenerUrl={dexscreenerUrl}
      />
      <Social
        address={address}
        twitter={twitter}
        telegram={telegram}
        dextoolsUrl={dextoolsUrl}
        uniswapUrl={uniswapUrl}
        dexscreenerUrl={dexscreenerUrl}
      />
    </div>
  );
}

export async function getServerSideProps() {
  const state = Store.getState();
  const { twitter, telegram, address, pairAddress } = state.data;

  await Store.dispatch(fetchDexscreener(address));
  await Store.dispatch(fetchDextools(pairAddress));
  await Store.dispatch(fetchUniswap(address));

  // After dispatching actions, get the updated state
  const updatedState = Store.getState().data;

  const additionalProps = {
    address,
    twitter,
    telegram,
    dextoolsUrl: updatedState.dextoolsUrl,
    uniswapUrl: updatedState.uniswapUrl,
    dexscreenerUrl: updatedState.dexscreenerUrl,
  };

  return {
    props: {
      message: "Welcome to the SSR website!",
      ...additionalProps,
    },
  };
}
