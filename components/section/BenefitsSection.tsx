"use client";
import React, { useRef } from "react";
import { Video } from "../Video";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const BenefitsSection = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.from(".ball1 ", {
        scrollTrigger: { trigger: ".ball", start: "bottom bottom" },
        opacity: 0,
        width: 0,
        duration: 1,
      });
      gsap.from(".ball ", {
        scrollTrigger: { trigger: ".ball", start: "bottom bottom" },
        opacity: 0,
        scale: 0.5,
        duration: 1,
        stagger: 0.8,
        delay: 0.8,
      });
      gsap.from(".item", {
        scrollTrigger: { trigger: ".ball", start: "bottom bottom" },
        opacity: 0,
        scale: 0.5,
        duration: 1,
        stagger: 0.5,
        delay: 1
      });
    },
    { scope: container }
  );
  return (
    <>
      <section ref={container} className="mt-40 lg:mt-20">
        <div>
          <h2>Main Benefits</h2>
          <p>
            With a smooth and hassle-free process for acquiring energy, we allow
            users to easily and quickly obtain the energy they need without any
            complications
          </p>
        </div>
        <div className="px-32  sm:hidden">
          <div className="ball1 border-b border-dashed dark:border-black flex justify-between max-w-[800px] mx-auto w-full mt-40 lg:mt-40">
            <div className="flex items-center justify-center text-black font-semibold roboto relative translate-y-[50%]">
              <span className="ball relative z-100 size-6 bg-accent rounded-full flex items-center justify-center dark:text-white">
                1
              </span>
              <div className="item absolute h-[50px] border border-purple rounded-[18px] w-[240px] text-white flex items-center justify-center font-medium bg-[#221D2F] -top-[100px]">
                Sign up
              </div>
              <div className="item absolute w-[1px] bg-gray-400 h-20 bottom-0 -z-10"></div>
            </div>
            <div className="flex items-center justify-center text-black font-semibold roboto relative translate-y-[50%]">
              <span className=" ball relative z-100 size-6 bg-accent rounded-full flex items-center justify-center dark:text-white">
                2
              </span>
              <div className="item absolute h-[50px] border border-purple rounded-[18px] w-[240px] text-white flex items-center justify-center font-medium bg-[#221D2F] top-[100px]">
                Enter your wallet
              </div>
              <div className="item absolute w-[1px] bg-gray-400 h-20 top-6 -z-10"></div>
            </div>
            <div className="flex items-center justify-center text-black font-semibold roboto relative translate-y-[50%]">
              <span className="ball relative z-100 size-6 bg-accent rounded-full flex items-center justify-center dark:text-white">
                3
              </span>
              <div className="item absolute h-[50px] border border-purple rounded-[18px] w-[240px] text-white flex items-center justify-center font-medium bg-[#221D2F] -top-[100px]">
                Pay the bill
              </div>
              <div className="item absolute w-[1px] bg-gray-400 h-20 bottom-0 -z-10"></div>
            </div>
          </div>
        </div>
        <div className="mt-20 space-y-20 hidden sm:block relative">
          <div className="absolute border-l border-dashed top-6 left-3 h-[260px] dark:border-black"></div>
          <div className="flex text-black items-center">
            <span className="relative z-100 size-6 bg-accent rounded-full  flex items-center justify-center dark:text-white shrink-0 roboto font-semibold">
              1
            </span>
            <div className="w-[150px] bg-gray-400 h-[1px] top-6 -z-10"></div>
            <div className="h-[50px] border border-purple rounded-[18px] w-[240px] text-white flex items-center justify-center font-medium bg-[#221D2F] -top-[100px] shrink-0">
              Sign up
            </div>
          </div>
          <div className="flex text-black items-center">
            <span className="relative z-100 size-6 bg-accent rounded-full  flex items-center justify-center dark:text-white shrink-0 roboto font-semibold">
              2
            </span>
            <div className="w-[150px] bg-gray-400 h-[1px] top-6 -z-10"></div>
            <div className="h-[50px] border border-purple rounded-[18px] w-[240px] text-white flex items-center justify-center font-medium bg-[#221D2F] -top-[100px] shrink-0">
              Enter your wallet
            </div>
          </div>
          <div className="flex text-black items-center">
            <span className="relative z-100 size-6 bg-accent rounded-full  flex items-center justify-center dark:text-white shrink-0 roboto font-semibold">
              3
            </span>
            <div className="w-[150px] bg-gray-400 h-[1px] top-6 -z-10"></div>
            <div className="h-[50px] border border-purple rounded-[18px] w-[240px] text-white flex items-center justify-center font-medium bg-[#221D2F] -top-[100px] shrink-0">
              Pay the bill
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BenefitsSection;
