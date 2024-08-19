import { Button } from "@/components/Button";
import Form from "@/components/Form";
import FutureCard from "@/components/FutureCard";
import Orbit from "@/components/Orbit";
import { QandA } from "@/components/QandA";
import { Video } from "@/components/Video";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto max-w-[1200px]">
      <section className="grid grid-cols-2 items-center lg:grid-cols-1">
        <div className="max-w-[582px] lg:order-2">
          <h1 className="mb-5">
            An easy method for purchasing energy on the Tron network{" "}
          </h1>
          <p className="text-xl">
            Save 50% on transaction fees! Maximize your savings. <br /> Benefit
            from reduced costs with every transaction
          </p>
          <Button className="mt-10">Registration </Button>
        </div>
        <Video className="dark:hidden" src="hero-video" />
        <Video className="hidden dark:block" src="hero-video-white" />
      </section>
      <section className="mt-14">
        <h2>Key Features </h2>
        <p>
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
      <section className="mt-40 lg:mt-20">
        <h2>What amount can you conserve with NeutronX</h2>
        <p>
          Please provide either the wallet address or the average daily
          transaction count for your wallet
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-8 mt-10">
          <div className="w-full card-gradient rounded-[18px] border border-[#B585FC] dark:bg-none dark:bg-[#F1F1F1] dark:border-black">
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
          <div className="w-full card-gradient rounded-[18px] dark:bg-none dark:bg-[#F1F1F1]">
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
      <section className="mt-40 lg:mt-20">
        <div>
          <h2>Main Benefits</h2>
          <p>
            With a smooth and hassle-free process for acquiring energy, we allow
            users to easily and quickly obtain the energy they need without any
            complications
          </p>
        </div>
        <div className="px-32  sm:hidden">
          <div className="border-b border-dashed dark:border-black flex justify-between max-w-[800px] mx-auto w-full mt-40 lg:mt-40">
            <div className="flex items-center justify-center text-black font-semibold roboto relative translate-y-[50%]">
              <span className="relative z-100 size-6 bg-accent rounded-full flex items-center justify-center dark:text-white">
                1
              </span>
              <div className="absolute h-[50px] border border-purple rounded-[18px] w-[240px] text-white flex items-center justify-center font-medium bg-[#221D2F] -top-[100px]">
                Sign up
              </div>
              <div className="absolute w-[1px] bg-gray-400 h-20 bottom-0 -z-10"></div>
            </div>
            <div className="flex items-center justify-center text-black font-semibold roboto relative translate-y-[50%]">
              <span className="relative z-100 size-6 bg-accent rounded-full flex items-center justify-center dark:text-white">
                2
              </span>
              <div className="absolute h-[50px] border border-purple rounded-[18px] w-[240px] text-white flex items-center justify-center font-medium bg-[#221D2F] top-[100px]">
                Enter your wallet
              </div>
              <div className="absolute w-[1px] bg-gray-400 h-20 top-6 -z-10"></div>
            </div>
            <div className="flex items-center justify-center text-black font-semibold roboto relative translate-y-[50%]">
              <span className="relative z-100 size-6 bg-accent rounded-full flex items-center justify-center dark:text-white">
                3
              </span>
              <div className="absolute h-[50px] border border-purple rounded-[18px] w-[240px] text-white flex items-center justify-center font-medium bg-[#221D2F] -top-[100px]">
                Pay the bill
              </div>
              <div className="absolute w-[1px] bg-gray-400 h-20 bottom-0 -z-10"></div>
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
      <section className="grid grid-cols-2 lg:grid-cols-1 items-center mt-32 lg:mt-48">
        <div>
          <h2>Seamless Integration </h2>
          <p>
            Simply provide your wallet details, and the system will
            automatically compute the necessary transaction count for your
            business needs!
          </p>
        </div>
        <div className="">
          <Video className="dark:hidden" src="net-video" />
          <Video className="hidden dark:block" src="net-video-white" />
        </div>
      </section>
      <section className="mt-40 lg:mt-20">
        <h2>Strategies for Saving with NeutronX</h2>
        <p>
          When you stake TRX, you unlock Energy which serves as payment for
          transaction fees within the TRON ecosystem, such as transferring USDT
          or utilizing smart contracts. We possess ample reserves of Energy and
          extend the opportunity for you to acquire it, which proves more
          advantageous compared to paying fees with TRX.
        </p>
        <div className="grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-8 mt-10">
          <div className="h-[256px] sm:h-[180px] w-full strategies-gradient rounded-[18px] flex flex-col justify-between px-5 pt-[30px]">
            <p>Energy quantity</p>
            <h2 className="roboto font-semibold text-purple">134 546 765</h2>
          </div>
          <div className="h-[256px] sm:h-[180px] w-full strategies-gradient rounded-[18px] flex flex-col justify-between px-5 pt-[30px]">
            <p>Energy that has been transferred in total </p>
            <h2 className="roboto font-semibold text-purple">13 657 768 321</h2>
          </div>
          <div className="h-[256px] sm:h-[180px] w-full strategies-gradient rounded-[18px] flex flex-col justify-between px-5 pt-[30px] lg:col-span-2 sm:col-span-1">
            <p>Our clients save</p>
            <h2 className="roboto font-semibold text-purple">$ 543 890</h2>
          </div>
        </div>
      </section>
      <section className="mt-40 lg:mt-20">
        <h2>Digital Currency Merchant</h2>
        <p>
          We offer our clients the services of a cryptocurrency merchant from
          the company chanter.energy
        </p>
        <Orbit />
      </section>
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
