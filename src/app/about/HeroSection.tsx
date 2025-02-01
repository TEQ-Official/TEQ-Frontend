import Image from "next/image";
import React from "react";
import MaleFemaleStudents from "../../../public/male-female-students.png";
import { heroSectionValues } from "@/content/about";

function HeroSection() {
    return (
        <div className="w-[90%] max-w-[1228px] flex flex-col lg:flex-row gap-12 xl:gap-[118px] mx-auto">
            <div className="lg:max-w-[507px] mx-auto">
                <h1 className="text-[#101928] font-medium text-[40px] leading-[48px]">
                    About Us
                </h1>
                <p className="text-[#667185] text-base md:text-lg leading-6 md:leading-[26px] mt-4 mb-10">
                    We use a diagnostic approach to identify English language
                    challenges, providing learners and professionals with
                    personalized solutions. Through practical frameworks and
                    tailored resources, we help users transform their English
                    proficiency into English-centered career skills.
                </p>
                <Image
                    src={MaleFemaleStudents}
                    alt="Male and Female students"
                    objectFit="cover"
               />
            </div>
            <div className="flex flex-col gap-8">
                <h3 className="font-semibold text-[32px] leading-10">We,</h3>
                <div className="flex flex-col gap-10">
                    {heroSectionValues.map((value, index)=> {
                        return (
                            <div key={index} className="flex flex-col gap-4">
                                <h4 className="font-medium text-2xl md:text-[28px] leading-9 tracking-[-0.56px] text-[#101928]">{value.point}</h4>
                                <p className="text-[#667185] text-base md:text-lg leading-[26px]">{value.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
