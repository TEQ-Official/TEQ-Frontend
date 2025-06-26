"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function PageDoodles({
    doodles,
}: {
    doodles: { src: string; position: string, containerClass?: string }[];
}) {
    return (
        <motion.div
            initial={{ opacity: 0.1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 -z-50 pointer-events-none"
        >
            {doodles?.map((doodle, index) => (
                <div key={index} className={`absolute ${doodle.containerClass || ''}`}>
                    <Image
                        key={index}
                        src={doodle.src}
                        alt=""
                        loading="lazy"
                        fill
                        className={`absolute ${doodle.position}`}
                    />
                </div>
            ))}
        </motion.div>
    );
}

export default PageDoodles;