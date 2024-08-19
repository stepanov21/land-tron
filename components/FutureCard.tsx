"use client";
import { useTheme } from "@/zustand/store";
import Image from "next/image";
import React from "react";

const FutureCard = ({
  title,
  text,
  imageSrc,
}: {
  title: string;
  text: string;
  imageSrc: string;
}) => {
  const dark = useTheme((state) => state.dark);

  return (
    <div className="px-6 py-8 h-[480px] lg:h-auto card-gradient rounded-[18px] card-shadow dark:bg-none dark:bg-transparent">
      <div className="h-[111px] sm:h-[70px] flex items-center mb-[30px]">
        <Image
          className="sm:scale-75"
          src={`/${imageSrc}${dark ? "-white" : ""}.png`}
          width={104}
          height={111}
          alt="shield image"
        />
      </div>
      <h3>{title}</h3>
      <div>{text}</div>
    </div>
  );
};

export default FutureCard;
