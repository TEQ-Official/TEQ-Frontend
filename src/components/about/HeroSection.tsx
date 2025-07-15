import Image from "next/image";
import React from "react";
import { heroSectionValues } from "@/content/about";

function HeroSection() {
  return (
    <>
    <p className="text-indigo-700 text-center font-semibold text-[10px] !m-0 !p-0 leading-[48px]">
        About Us
      </p>
      <h1 className="text-[#101928] text-center font-semibold text-[40px] !m-0 !p-0  leading-[48px]">
        About TEQ
      </h1>
      <p className="text-[#667185] text-center md:text-lg leading-6 md:leading-[26px] mt-4 mb-10">
            Learn more about the company and the team behind it.
          </p>
          <div className="relative aspect-[16/9] mx-auto lg:max-w-[1000px] overflow-hidden">
            <Image
              src={"/male-female-students.png"}
              alt="Male and Female students"
              fill
              sizes="100vw"
              priority
              className="object-cover object-center rounded-3xl"
            />
          </div>
      
    </>
  );
}

export default HeroSection;
