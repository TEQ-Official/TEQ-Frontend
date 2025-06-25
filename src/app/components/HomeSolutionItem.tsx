import React from "react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

export default function HomeSolutionItem({
  title,
  description,
  image,
  bgColor,
  icon,
  iconColor,
  iconbgColor,
}: {
  title: string;
  description: string;
  image: string;
  bgColor: string;
  icon: React.ReactNode;
  iconColor: string;
  iconbgColor: string;
}) {
  return (
    <AnimatedSection>
      <div
        className="flex flex-col md:flex-row items-stretch overflow-hidden rounded-2xl h-auto md:h-[400px]"
      >
        <div
          className={`w-full md:w-1/2 p-6 md:pl-16 md: pr-10 md:pr-40 flex flex-col justify-center ${bgColor}`}
        >
          <div className={`md:hidden ${iconbgColor} w-20 h-20 flex items-center justify-center rounded-full mb-8`}>
            <span className={`text-4xl  ${iconColor}`}>{icon}</span>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl leading-relaxed font-semibold text-gray-900">
            {title}
          </h3>
          <p className="mt-2 text-xl text-gray-700">
            {description}
          </p>
        </div>
        <div className="w-full md:w-1/2 h-full md:h-auto relative hidden md:block">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-r-2xl md:rounded-none"
          />
        </div>
      </div>
    </AnimatedSection>
  );
};

