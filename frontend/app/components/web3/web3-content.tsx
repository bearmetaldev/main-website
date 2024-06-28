import React from "react";
import Image from "next/image";

export default function Web3Content() {
  return (
    <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between w-full">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 relative">
        <Image
          src="/web3-illustration.png"
          width={514}
          height={387}
          alt="web3-illustration"
          className="max-w-full h-auto object-contain"
        />
      </div>
      <div className="lg:w-1/2 lg:pl-8">
        <h1 className="mb-3 leading-tight text-center lg:text-left drop-shadow-xl">
          Web3
        </h1>
        <p className="my-6 max-w-xl text-center lg:text-left text-base leading-snug lg:text-lg lg:leading-relaxed drop-shadow-xl">
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
