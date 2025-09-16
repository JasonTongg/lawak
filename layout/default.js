import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function Default({ children }) {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="flex flex-col items-center justify-between w-full min-h-screen overflow-x-hidden relative">
      <Navbar />
      {children}
    </main>
  );
}
