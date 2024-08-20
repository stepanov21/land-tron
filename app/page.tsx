import { Button } from "@/components/Button";
import Form from "@/components/Form";
import FutureCard from "@/components/FutureCard";
import Orbit from "@/components/Orbit";
import { QandA } from "@/components/QandA";
import AmountSection from "@/components/section/AmountSection";
import BenefitsSection from "@/components/section/BenefitsSection";
import FutureSection from "@/components/section/FutureSection";
import HeroSection from "@/components/section/HeroSection";
import IntegrationSection from "@/components/section/IntegrationSection";
import MerchantSection from "@/components/section/MerchantSection";
import StrategiesSection from "@/components/section/StrategiesSection";
import { Video } from "@/components/Video";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto max-w-[1200px]">
      <HeroSection />
      <FutureSection />
      <AmountSection />
      <BenefitsSection />
      <IntegrationSection/>
      <StrategiesSection/>
      <MerchantSection/>
      <section className="grid grid-cols-2 lg:grid-cols-1 gap-10 items-center mt-40 lg:mt-20">
        <div>
          <h2>Have any questions? We’ve got answers</h2>
          <QandA />
        </div>
        <div>
          <Image
            className="lg:hidden dark:hidden"
            src={"/QandA.png"}
            width={670}
            height={670}
            alt="hero image"
          />
          <Image
            className=" hidden dark:block lg:hidden"
            src={"/QandA-white.png"}
            width={670}
            height={670}
            alt="hero image"
          />
        </div>
      </section>
      <section className="mt-40 lg:mt-20">
        <h2>Register now </h2>
        <p>Learn how to get the lowest commission on the market</p>
        <Form />
      </section>
    </main>
  );
}
