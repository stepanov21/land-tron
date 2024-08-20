"use client";

import React, { useRef } from "react";
import { Button } from "../Button";
import { Video } from "../Video";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export var tl = gsap.timeline({});

const HeroSection = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      tl.from("#h1", { opacity: 0, y: 30 });
      tl.from("#descr", { opacity: 0, y: 30 });
      tl.from("#button", { opacity: 0, y: 30 });
      tl.from("#video", { opacity: 0, scale: 0.2, duration: 2 });
    },
    { scope: container }
  );
  return (
    <section
      ref={container}
      className="grid grid-cols-2 items-center lg:grid-cols-1"
    >
      <div className="max-w-[582px] lg:order-2">
        <h1 id="h1" className="mb-5">
          An easy method for purchasing energy on the Tron network{" "}
        </h1>
        <p id="descr" className="text-xl">
          Save 50% on transaction fees! Maximize your savings. <br /> Benefit
          from reduced costs with every transaction
        </p>
        <Button id="button" className="mt-10">
          Registration{" "}
        </Button>
      </div>
      <div id="video">
        <Video className="dark:hidden" src="hero-video" />
        <Video className="hidden dark:block" src="hero-video-white" />
      </div>
    </section>
  );
};

export default HeroSection;
