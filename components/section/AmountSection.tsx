'use client'
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AmountSection = () => {
  const container = useRef(null);
  useGSAP(
    () => {
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
    <section ref={container} className="mt-40 lg:mt-20">
      <h2>What amount can you conserve with NeutronX</h2>
      <p>
        Please provide either the wallet address or the average daily
        transaction count for your wallet
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-1 gap-8 mt-10">
        <div className="card w-full card-gradient rounded-[18px] border border-[#B585FC] dark:bg-none dark:bg-[#F1F1F1] dark:border-black">
          <div className="px-[40px] pt-10 pb-16">
            <div className="border-b border-[#B585FC] dark:border-black pb-3 text-xl font-semibold">
              Enter your wallet address
            </div>
            <div className="text-[18px] mt-10 mb-[30px]">
              What you pay for 0 transactions
            </div>
            <div className="flex justify-between items-center mb-5">
              <span>Without NeutronX</span>—
            </div>
            <div className="flex justify-between items-center mb-[60px]">
              <span>With NeutronX</span>—
            </div>
          </div>
          <div className="px-[40px] py-[30px] border-t border-t-[#7F808D]">
            Economy
          </div>
        </div>
        <div className="card w-full card-gradient rounded-[18px] dark:bg-none dark:bg-[#F1F1F1]">
          <div className="px-[40px] pt-10 pb-16">
            <div className="border-b border-[#7F808D] pb-3 text-xl font-semibold text-[#7F808D]">
              Enter number of transactions
            </div>
            <div className="text-[18px] mt-10 mb-[30px]">
              What you pay for 0 transactions
            </div>
            <div className="flex justify-between items-center mb-5">
              <span>Without NeutronX</span>—
            </div>
            <div className="flex justify-between items-center mb-[60px]">
              <span>With NeutronX</span>—
            </div>
          </div>
          <div className="px-[40px] py-[30px] border-t border-t-[#7F808D]">
            Economy
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmountSection;
