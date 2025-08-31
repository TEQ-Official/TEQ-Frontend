import Image from "next/image";
import React from "react";

export default function HomeFeatureCard({
    icon,
    title,
    description,
    bgColor,
    ringphoto,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    bgColor: string;
    ringphoto: string;
}) {
    return (
        <div
            className={`relative rounded-3xl p-10 text-left text-white ${bgColor} shadow-lg flex flex-col justify-between h-[400px]`}
        >
            <Image src={ringphoto} width={1000} height={1000} alt={title} className="absolute w-auto h-[300px] top-0 right-0" />
            <div className="bg-white bg-opacity-40 w-20 h-20 flex items-center justify-center rounded-full">
                <span className="text-4xl">{icon}</span>
            </div>
            <div>
                <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
                <p className="leading-relaxed text-sm sm:text-base pt-5">{description}</p>
            </div>
        </div>
    );
}
