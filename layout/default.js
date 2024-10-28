import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSelector } from "react-redux";
import { getDextools, getUniswap, getDexscreener } from "../store/data";

export default function Default({ children }) {
  const { twitter, telegram, address } = useSelector((state) => state.data);
  const dextoolsUrl = useSelector(getDextools);
  const uniswapUrl = useSelector(getUniswap);
  const dexscreenerUrl = useSelector(getDexscreener);
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
  }, []);

  const childWithProps = React.isValidElement(children)
    ? React.cloneElement(children, additionalProps)
    : React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, additionalProps)
          : child
      );

  if (!isMounted) return null;

  return (
    <main className="flex flex-col items-center justify-between gap-6 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen overflow-x-hidden relative">
      <Navbar {...additionalProps} />
      {childWithProps}
      <Footer />
    </main>
  );
}
