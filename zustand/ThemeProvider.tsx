"use client";
import { useTheme } from "@/zustand/store";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";

const ThemeProvider = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  const dark = useTheme((state) => state.dark);

  return (
    <body
      className={`${className} ${dark ? "bg-white" : ""}`}
      data-mode={dark ? "dark" : ""}
    >
      {children}
    </body>
  );
};

export default ThemeProvider;