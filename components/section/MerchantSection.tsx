'use client'
import React, { useRef } from "react";
import Orbit from "../Orbit";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MerchantSection = () => {
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
        delay: 0.5,
      });
      gsap.from(".orbit", {
        scrollTrigger: { trigger: ".orbit", start: "bottom bottom" },
        opacity: 0,
        scale: 0.2,
        duration: 2,
        stagger: 0.5,
      });
    },
    { scope: container }
  );
  return (
    <section ref={container} className="mt-40 lg:mt-20">
      <h2 id="h1">Digital Currency Merchant</h2>
      <p id="descr">
        We offer our clients the services of a cryptocurrency merchant from the
        company chanter.energy
      </p>
      <Orbit />
    </section>
  );
};

export default MerchantSection;
