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
        <p className="my-6 max-w-xl text-center lg:text-left leading-snug lg:leading-relaxed drop-shadow-xl">
          From smart contract development to full-stack dApp creation, we cover
          every aspect of your Web3 project. We specialize in building robust
          infrastructure for blockchain networks, including custom node
          implementations and consensus mechanisms. Whether you're launching a
          new token, creating a decentralized finance (DeFi) platform, or
          exploring novel blockchain use cases, our experience and technical
          prowess will guide your project to success. Let's shape the
          decentralized future together.
        </p>
      </div>
    </div>
  );
}
