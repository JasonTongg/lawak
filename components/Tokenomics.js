import React from "react";
import { motion } from "framer-motion";

export default function Tokenomics() {
  return (
    <motion.div
      initial={{ transform: "translateX(-100px)", opacity: 0 }}
      whileInView={{ transform: "translateX(0px)", opacity: 1 }}
      exit={{ transform: "translateX(-100px)", opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen text-6xl flex items-center justify-center"
    >
      Tokenomics
    </motion.div>
  );
}
