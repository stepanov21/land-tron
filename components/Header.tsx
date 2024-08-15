import Image from "next/image";
import React from "react";
import { Button } from "./Button";
import { LogOut, UserPlus } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between container mx-auto max-w-[1200px] mt-11">
      <div>
        <Image className="size-[50px]" src={"./Neutronx.svg"} width={67} height={67} alt="logo" />
      </div>
      <nav className="flex gap-10 lg:hidden">
        <a href="">Calculator </a>
        <a href="">Benefits </a>
        <a href="">Strategies for saving </a>
        <a href="">FAQ </a>
        <a href="">API</a>
      </nav>
      <div className="flex bg-[#252032] rounded-full h-[60px] p-1.5">
        <Button className="bg-white px-5 text-sm"><UserPlus className="mr-2"/>Sign Up</Button>
        <Button className="bg-transparent text-white px-5 text-sm"><LogOut className="mr-2"/>Sign In</Button>
      </div>
    </header>
  );
};

export default Header;
