'use client'

import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";

const StrategiesSection = () => {
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
        gsap.from(".card", {
          scrollTrigger: { trigger: ".card", start: "bottom bottom" },
          opacity: 0,
          scale: .2,
          duration: 1,
          stagger: 0.5,
          delay: 1
        });
      },
      { scope: container }
    );
  return (
    <section ref={container} className="mt-40 lg:mt-20">
      <h2 id="h1">Strategies for Saving with NeutronX</h2>
      <p id="descr">
        When you stake TRX, you unlock Energy which serves as payment for
        transaction fees within the TRON ecosystem, such as transferring USDT or
        utilizing smart contracts. We possess ample reserves of Energy and
        extend the opportunity for you to acquire it, which proves more
        advantageous compared to paying fees with TRX.
      </p>
      <div className="grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-8 mt-10">
        <div className="card h-[256px] sm:h-[180px] w-full strategies-gradient rounded-[18px] flex flex-col justify-between px-5 pt-[30px]">
          <p>Energy quantity</p>
          <h2 className="roboto font-semibold text-purple">134 546 765</h2>
        </div>
        <div className="card h-[256px] sm:h-[180px] w-full strategies-gradient rounded-[18px] flex flex-col justify-between px-5 pt-[30px]">
          <p>Energy that has been transferred in total </p>
          <h2 className="roboto font-semibold text-purple">13 657 768 321</h2>
        </div>
        <div className="card h-[256px] sm:h-[180px] w-full strategies-gradient rounded-[18px] flex flex-col justify-between px-5 pt-[30px] lg:col-span-2 sm:col-span-1">
          <p>Our clients save</p>
          <h2 className="roboto font-semibold text-purple">$ 543 890</h2>
        </div>
      </div>
    </section>
  );
};

export default StrategiesSection;
