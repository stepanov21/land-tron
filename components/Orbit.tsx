import Image from "next/image";
import React from "react";

const Orbit = () => {
  return (
    <>
      <Image
        className="mt-20 mx-auto dark:hidden"
        src={`/orbit.svg`}
        width={670}
        height={670}
        alt="hero image"
      />
      <Image
        className="mt-20 mx-auto hidden dark:block"
        src={`/orbit-white.svg`}
        width={670}
        height={670}
        alt="hero image"
      />
    </>
  );
};

export default Orbit;
