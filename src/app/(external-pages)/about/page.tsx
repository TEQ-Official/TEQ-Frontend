"use client";

import React from "react";
import {ArrowRightCircle,MoveUpRight} from "lucide-react"
import Image from "next/image";
import { aceEnglishGoals, focusData } from "@/content/about";
import AnimatedSection from "@/components/shared/AnimatedSection";
import PageDoodles from "@/components/shared/PageDoodles";
import HeroSection from "@/components/about/HeroSection";
import Button from "@/components/Button";

const colors = [
    "#d6fff6",
    "#fcffd9",
    "#f9ddf6"
]

function AboutPage() {
  return (
    <div className="relative">
      <section className="relative pb-10">
        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>
        <PageDoodles
          doodles={[
            {
              src: "/right-screen-doodle.svg",
              containerClass: "hidden md:block w-[20%] right-0 h-full",
              position:
                "bottom-0 right-0 w-[30%] md:w-[23%] opacity-70 lg:opacity-100 lg:w-auto",
            },
          ]}
        />
      </section>

      {/* ---Help you Ace your English Goals---  */}
      <section className="py-20 ">
        <h1 className="text-[#000] font-medium text-5xl mb-12 md:mb-[15px] text-center">
          We help you ace your your English Goals
        </h1>
        <p className="text- text-center font-semibold text-[18px] opacity-60 !m-0 !p-0 ">
          We've helped student's like you, join us today!!
        </p>
        <div>
          <div className="mt-8 flex flex-col md:flex-row  gap-4 items-center justify-center gap-y-8 md:gap-y-6 w-[90%] max-w-[1228px] mx-auto">
            {aceEnglishGoals.map((item, index) => {
              return (
                <div
                  key={index}
                  className="gap-2 md:gap-4 mb-8 p-4 rounded-lg"
                  style={{ backgroundColor: item.colorCode }}
                >
                  <h4 className="text-[#101928] min-w-[80%] text-left font-semibold text-lg lg:text-[20px] leading-9">
                    {item.heading}
                  </h4>
                  <p className="text-[#667185] text-base lg:text-lg leading-[26px]  my-6">
                    {item.text}
                  </p>
                  <a href={item.link}  className="mt-8 hover:underline font-semibold flex items-center gap-2">
                    Learn More
                    <MoveUpRight className="text-indigo-700 text-lg"/>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section
        className="py-20 bg-[#0047AB]"
        style={{
          backgroundImage: "url('/grid.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <AnimatedSection>
          <div className="w-[90%] max-w-[1232px] mx-auto flex flex-col items-center justify-center gap-10">
            <h3 className="text-3xl md:text-5xl text-center font-medium text-white">
              We connect language learning to tangible career outcomes, helping
              users succeed in their chosen fields.
            </h3>
            <Button className="bg-white py-4 px-10 font-semibold text-[#1D2739]">
              Join the waitlist
            </Button>
          </div>
        </AnimatedSection>
      </section>

      <section className="py-20">
        <AnimatedSection>
          <div className="w-[90%] max-w-[1228px] mx-auto">
            <h2 className="text-[#101928] font-medium text-5xl mb-12 md:mb-[58px] text-center">
              Our Focus
            </h2>
            <div className=" flex flex-col items-center md:flex-row gap-y-8 md:gap-y-6">
              <div className="w-[80%]">
                {focusData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col gap-2 md:gap-4 mb-8"
                    >
                      <h4 className="text-[#101928] font-medium text-2xl lg:text-[28px] leading-9">
                        {item.focus}
                      </h4>
                      <p className="text-[#667185] text-base lg:text-lg leading-[26px] md:w-[85%] lg:w-[75%]">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div>
                <div className="h-[400px] rounded-3xl w-[400px] bg-gray-400"></div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="bg-[#EAFFEA] py-20">
        <AnimatedSection>
          <div className="w-[90%] max-w-[1204px] flex flex-col justify-center mx-auto gap-14">
            <div className="flex flex-col gap-4 items-center">
              <h1 className="text-[#101928] font-medium text-5xl">
                Our Approach?
              </h1>
              <p className="max-w-[575px] text-center text-[#667185] text-base md:text-lg leading-[26px]">
                We provide training that focuses on developing skills directly
                applicable to users&apos; careers and professional lives.
              </p>
            </div>
            <div className="flex flex-col items-center gap-10">
              <div className="relative aspect-[16/9] h-full w-[80%] mx-auto overflow-hidden">
                <Image
                  src={"/student-teacher.png"}
                  alt="student-teacher"
                  fill
                  sizes="100vw"
                  className="object-cover object-center rounded-3xl"
                />
              </div>
              <p className="max-w-[1055px] text-center text-base md:text-lg text-[#667185] leading-[26px]">
                We offer interactive lessons, customized learning plans, and
                flexible options like self-paced courses and live sessions to
                suit individual needs. With regular assessments, feedback, and
                progress tracking, users stay engaged and improve their English
                skills effectively.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="pt-20 pb-40 bg-[#CCDAEE33]">
        <AnimatedSection>
          <div className="w-[90%] flex flex-col items-center max-w-[1220px] mx-auto text-center">
            <h2 className="text-[#1D2739] text-3xl md:text-5xl font-medium">
              Ready to be lingually free
            </h2>
            <p className="mt-4 mb-10 text-[#667185] text-lg leading-[26px]">
              Join thousands of learners and become an english guru
            </p>
            <Button className="bg-[#0047AB] text-white py-4 px-10 font-semibold">
              Join our waitlist
            </Button>
          </div>
        </AnimatedSection>
      </section>

      <PageDoodles
        doodles={[
          {
            src: "/left-screen-doodle.svg",
            containerClass: "hidden md:block w-[20%] h-full",
            position:
              "top-0 left-0 w-[20%] opacity-70 lg:opacity-100 lg:w-auto",
          },
        ]}
      />
    </div>
  );
}

export default AboutPage;
