import React from "react";
import Image from "next/image";
import AnimatedSection from "../shared/AnimatedSection";
import { cn } from "@/lib/utils";

export default function HomeSolutionItem({
  title,
  description,
  image,
  bgColor,
}: {
  title: string;
  description: string;
  image: string;
  bgColor: string;
}) {
  return (
    <AnimatedSection>
      <div
        className="flex flex-col-reverse md:flex-row items-stretch overflow-hidden rounded-2xl h-auto"
      >
        <div
          className={cn("w-full md:w-1/2 px-6 lg:pl-16 lg:pr-24 py-10 md:py-0 flex flex-col justify-center", bgColor)}
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl leading-relaxed font-semibold text-gray-900">
            {title}
          </h3>
          <p className="mt-5 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
            {description}
          </p>
        </div>
        <div className="w-full md:w-1/2 h-full md:h-auto">
          <Image
            src={image}
            alt={title}
            width={1000}
            height={1000}
            objectFit="cover"
            className="rounded-t-2xl md:rounded-none"
          />
        </div>
      </div>
    </AnimatedSection>
  );
};

