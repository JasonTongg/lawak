import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { fetchDexscreener, fetchDextools, fetchUniswap } from "../store/data";

export default function Default({ children }) {
  const dispatch = useDispatch();
  const {
    twitter,
    telegram,
    address,
    dexscreenerUrl,
    uniswapUrl,
    dextoolsUrl,
  } = useSelector((state) => state.data);
  dispatch(fetchDexscreener(address));
  dispatch(fetchDextools(address));
  dispatch(fetchUniswap(address));

  const [isMounted, setIsMounted] = useState(false);

  const additionalProps = {
    address,
    twitter,
    telegram,
    dextoolsUrl,
    uniswapUrl,
    dexscreenerUrl,
  };

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="flex flex-col items-center justify-between gap-6 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen overflow-x-hidden relative">
      <Navbar {...additionalProps} />
      {children}
      <Footer />
    </main>
  );
}
