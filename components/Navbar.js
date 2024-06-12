import Link from "next/link";
import React from "react";
import Logo from "../public/assets/Logo.webp";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="grid grid-cols-3 w-full p-4 items-center justify-between justify-items-center content-center gap-4">
      <Image src={Logo} className="w-[65px]" />
      <div className="flex items-center justify-center gap-5">
        <Link href="#about">About</Link>
        <Link href="#contact">Contact Us</Link>
      </div>
      <button className="text-primary py-2 px-4 border-2 border-primary rounded-[20px] font-bold">
        Login
      </button>
    </nav>
  );
}
