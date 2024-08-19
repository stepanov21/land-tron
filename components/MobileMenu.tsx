"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./Button";
import { LayoutGrid, MoonStar, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/zustand/store";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function MobileMenu() {
  const changeTheme = useTheme((state) => state.changeTheme);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-white p-0 size-[55px] hidden lg:flex lg:max-w-[55px]">
          <LayoutGrid size={24} className="text-[#2D264B]" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-[#252032] dark:bg-white" side={"left"}>
        <SheetHeader>
          <SheetTitle>
            <div>
              <Image
                className="lg:size-[50px] dark:hidden"
                src={"./Neutronx.svg"}
                width={67}
                height={67}
                alt="logo"
              />
              <Image
                className="lg:size-[50px] hidden dark:block"
                src={"./Neutronx-white.svg"}
                width={67}
                height={67}
                alt="logo"
              />
            </div>
            <nav className="flex flex-col gap-10 mt-10 text-white dark:text-black">
              <Link className="text-lg" href={"#"}>
                Calculator
              </Link>
              <Link className="text-lg" href={"#"}>
                Benefits
              </Link>
              <Link className="text-lg" href={"#"}>
                Strategies for saving{" "}
              </Link>
              <Link className="text-lg" href={"#"}>
                FAQ
              </Link>
              <Link className="text-lg" href={"#"}>
                API
              </Link>
            </nav>
          </SheetTitle>
        </SheetHeader>
        <SheetFooter className="mt-auto">
          <div className="absolute bottom-6 gap-6">
            <Button
              className="px-0 size-[50px] bg-white dark:border dark:border-black dark:bg-[#F1F1F1] dark:text-black sm:w-[50px]"
              onClick={changeTheme}
            >
              <Sun className={"dark:hidden"} size={20} />
              <MoonStar className={"hidden dark:block"} size={20} />
            </Button>
          </div>
          <Select>
              <SelectTrigger className="w-[95px] px-6 dark:bg-[#F1F1F1] dark:border-[#d0d0d0] absolute bottom-6 left-4">
                <SelectValue placeholder="EN" />
              </SelectTrigger>
              <SelectContent className="dark:bg-[#F1F1F1] dark:text-black dark:border-[#d0d0d0]">
                <SelectGroup>
                  <SelectItem value="apple">EN</SelectItem>
                  <SelectItem value="banana">RU</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
