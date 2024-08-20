"use client";

import React, { useRef } from "react";
import FutureCard from "../FutureCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { tl } from "./HeroSection";

gsap.registerPlugin(ScrollTrigger);

const FutureSection = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      tl.from("#h1", { opacity: 0, y: 30 });
      tl.from("#descr", { opacity: 0, y: 30 });
      gsap.from(".card", {
        scrollTrigger: { trigger: ".card", start: "bottom bottom" },
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.5,
      });
    },
    { scope: container }
  );
  return (
    <section ref={container} className="mt-14">
      <h2 id="h1">Key Features </h2>
      <p id="descr">
        We offer numerous advantages, ensuring efficient, secure, and
        cost-effective energy transactions tailored to meet diverse needs
      </p>
      <div className="grid grid-cols-3 mt-10 gap-[30px] lg:grid-cols-1 ">
        <FutureCard
          imageSrc="shield"
          text="We prioritize user privacy with stringent measures to safeguard
          sensitive information. We don't require KYC to verify the identity
          of our clients or document submissions for registration. Simply
          sign up using just your email address"
          title="Privacy features"
        />
        <FutureCard
          imageSrc="money"
          text="Allowing users to choose plans that best fit their individual
          needs and budgets. This adaptable approach ensures that everyone
          can find a suitable option, whether they have high or low energy
          requirements"
          title="Flexible pricing policy "
        />
        <FutureCard
          imageSrc="clock"
          text="We ensure rapid transaction times, allowing users to complete
          their energy purchases quickly and efficiently. With minimal
          delays, you can enjoy seamless and prompt access to the energy you
          need"
          title="Fast transaction time"
        />
      </div>
    </section>
  );
};

export default FutureSection;
