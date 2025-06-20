import Image from "next/image";
import React from "react";

// components/FeatureCard.jsx
export default function HomeFeatureCard({
    icon,
    title,
    description,
    bgColor,
    ringphoto,
    textColor = "white"
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    bgColor: string;
    ringphoto: string;
    textColor?: string;
}) {
    return (
        <div
            className={`relative rounded-3xl p-10 text-left text-${textColor} ${bgColor} shadow-lg flex flex-col justify-between h-[400px]`}
        >
            <Image src={ringphoto} width={1000} height={1000} alt={title} className="absolute w-auto h-[300px] top-0 right-0" />
            <div className="bg-white bg-opacity-40 w-20 h-20 flex items-center justify-center rounded-full">
                <span className="text-4xl">{icon}</span>
            </div>
            <div>
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="leading-relaxed pt-5">{description}</p>
            </div>
        </div>
    );
}
