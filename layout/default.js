import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Default({ children }) {
  return (
    <main className="flex flex-col items-center justify-between gap-6 w-full min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
