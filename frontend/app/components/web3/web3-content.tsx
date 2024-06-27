import React from "react";
import Image from "next/image";

export default function Web3Content() {
  return (
    <div className="relative z-20 flex flex-col md:flex-row items-center justify-between w-full">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <Image
          src="/web3-illustration.png"
          width={514}
          height={387}
          alt="web3-illustration"
          className="max-w-full h-auto"
        />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h1 className="mb-3 leading-tight text-center">Web3</h1>
        <p className="my-6 max-w-xl text-center text-base leading-snug md:text-lg md:leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Blandit ultrices lacus turpis
          rhoncus. Neque lectus at vitae feugiat eget eu cursus venenatis.
          Vestibulum rhoncus sed consectetur mollis et. Adipiscing porta
          sagittis ultrices faucibus. Massa sociis enim eget erat massa purus
          nisi diam facilisis. Lectus adipiscing at semper etiam et dictum ut.
          In consequat imperdiet proin amet ut at. Non tortor elementum purus a
          tortor tellus eget. Suspendisse diam mauris sed amet eu faucibus
          tincidunt. Diam sit suspendisse aliquet nunc.
        </p>
      </div>
    </div>
  );
}
