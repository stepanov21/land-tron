'use client'

import React, { useRef } from "react";
import { Video } from "../Video";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { tl } from "./HeroSection";

const IntegrationSection = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.from("#h1", {
        scrollTrigger: { trigger: "#h1", start: "bottom bottom" },
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.5,
      });
      gsap.from("#descr", {
        scrollTrigger: { trigger: "#descr", start: "bottom bottom" },
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.5,
        delay: 0.5
      });
      gsap.from("#video", {
        scrollTrigger: { trigger: "#video", start: "bottom bottom" },
        opacity: 0,
        scale: .2,
        duration: 1,
        stagger: 0.5,
        delay: 1.5
      });
    },
    { scope: container }
  );
  return (
    <section ref={container} className="grid grid-cols-2 lg:grid-cols-1 items-center mt-36 lg:mt-48">
      <div>
        <h2 id="h1">Seamless Integration </h2>
        <p id='descr'>
          Simply provide your wallet details, and the system will automatically
          compute the necessary transaction count for your business needs!
        </p>
      </div>
      <div id='video'>
        <Video className="dark:hidden" src="net-video" />
        <Video className="hidden dark:block" src="net-video-white" />
      </div>
    </section>
  );
};

export default IntegrationSection;
