import React from "react";
import Image from "next/image";
import Logo from "../public/assets/Logo.webp";

export default function Navbar() {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 w-full p-4">
      <Image src={Logo} alt="Logo" className="w-[100px]" />
      <p>&copy; Next Starter Template {new Date().getFullYear()}</p>
    </footer>
  );
}
