import React, {useEffect} from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    animate,
} from "framer-motion";
import ContactButton from "./contact-button";
import StarryBackground from "./starry-background";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function EngineeringContent() {
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

    return (
        <motion.section
            style={{
                backgroundImage,
            }}
            className="relative grid h-full place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
        >
            <div className="relative z-10 flex flex-col items-center">
                <h1 className="mb-3 leading-tight text-center"> Engineering</h1>
                <p className="my-6 max-w-xl text-center text-lg leading-snug lg:leading-relaxed font">
                    Beyond Web3, our engineering skills extend to a wide array of complex systems and applications. We
                    bring extensive experience in Real-Time Operating Systems (RTOS), crafting solutions where timing
                    and reliability are critical. Our expertise in high-performance C++ has been instrumental in
                    developing cutting-edge computer vision systems. We&apos;ve tackled projects ranging from embedded
                    systems in IoT devices to large-scale distributed systems handling massive data loads.
                    Our team is adept at optimizing algorithms, implementing parallel processing techniques,
                    and designing fault-tolerant architectures.
                    Whether you&apos;re working on autonomous vehicles, industrial automation, or any system requiring
                    precise control and high performance, we have the expertise to deliver outstanding results.
                    Together, let&apos;s bring your most ambitious engineering challenges to reality.
                </p>
                <ContactButton color={color}/>
            </div>
            <StarryBackground/>
        </motion.section>
    );
}
