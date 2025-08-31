"use client"

import { useState } from "react";
import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import HomeFeatureCard from "@/components/home/HomeFeatureCard";
import HomeSolutionItem from "@/components/home/HomeSolutionItem";
import HomeAccordionItem from "@/components/home/HomeAccordionItem";
import SmallTestimonyCard from "@/components/home/SmallTestimonyCard";
import { items } from "@/content/home";
import { FaRegHandshake } from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsBook } from "react-icons/bs";

export const cards = [
        {
            title: "Business purposes",
            description:
                "Enhance your professional communication skills, negotiate confidently, and excel in global business environments.",
            icon: <FaRegHandshake />,
            iconbgColor: "",
            bgColor: "bg-gradient-to-br from-[#16336F] to-[#4A76D2]",
            ringphoto: '/ringphotoblue.png',
        },
        {
            title: "Personal development",
            description:
                "Build confidence, connect with people worldwide, and unlock new opportunities for personal growth.",
            icon: <BsBook />,
            iconbgColor: "",
            bgColor: "bg-gradient-to-br from-[#1B6C2D] to-[#2FB56B] lg:mt-16",
            ringphoto: '/ringphotogreen.png',
        },
        {
            title: "Professional growth",
            description:
                "Advance your career, expand your professional network, and achieve your goals with fluent English.",
            icon: <HiOutlineUserGroup />,
            iconbgColor: "",
            bgColor: "bg-gradient-to-br from-[#803519] to-[#DA6336] lg:mt-32",
            ringphoto: '/ringphotored.png',
        },
    ];
export const solutions = [
        {
            title: "Exam Preparation",
            description:
                "Resources and courses for international exams like IELTS, TOEFL, SAT, GRE, and GMAT.",
            image: "/SolutionImage1.png",
            bgColor: "bg-[#FFF9F1]",
        },
        {
            title: "Personalised Tutoring",
            description:
                "Proficient tutors for one-on-one classes, providing tailored guidance and support.",
            image: "/SolutionImage3.png",
            bgColor: "bg-[#F1FFF7]",
        },
        {
            title: "Career Transformation",
            description:
                "Course modules to help you transform your language knowledge into high paying career skills.",
            image: "/SolutionImage2.png",
            bgColor: "bg-[#FFF1FB]",
        },
    ];

export default function Home() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <main>
            <section className="bg-gradient-to-b from-[#F2EEFF] via-[#FFF4F4] to-[#FFFFFF] sm:mx-4 rounded-3xl -mt-16">
                <HeroSection />
            </section>
            <AnimatedSection>
                <section className="py-16 md:p-20 w-[90%] max-w-[1232px] mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900">
                        Master English for Every <br className="hidden sm:block" /> Aspect of Your Life
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-2xl mx-auto">
                        Whether you&#8216;re advancing your career, growing personally, or excelling in business, our tailored courses help you achieve fluency with confidence.
                    </p>
                    <div className="mt-6">
                        <button className="bg-[#0047AB] text-white px-8 py-3 rounded-xl font-medium text-sm sm:text-base transition-transform duration-300 hover:scale-110">
                            Join our waitlist
                        </button>
                    </div>
                    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {cards.map((card, index) => (
                            <HomeFeatureCard key={index} {...card} />
                        ))}
                    </div>
                </section>
            </AnimatedSection>
            <section className="bg-white">
                <div className="py-16 md:p-20 w-[90%] max-w-[1232px] mx-auto">
                    <AnimatedSection>
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900">
                                Our Comprehensive <br className="hidden sm:block" />
                                English Learning Solutions
                            </h2>
                            <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
                                Join thousands of learners worldwide and experience a proven approach to mastering English.
                            </p>
                        </div>
                    </AnimatedSection>
                    <div className="space-y-10">
                        {solutions.map((solution, index) => (
                            <HomeSolutionItem key={index} {...solution} />
                        ))}
                    </div>
                </div>
            </section>
            <AnimatedSection>
                <section className="pt-16 pb-64 md:px-20 w-[90%] max-w-[1232px] mx-auto">
                    <div className="flex flex-col md:flex-row md:items-start gap-8">
                        <div className="md:w-1/3 lg:w-1/2">
                            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900">
                                Built to help <br className="hidden md:block" /> you with:
                            </h2>
                        </div>
                        <div className="md:w-2/3 lg:w-1/2 space-y-4">
                            {items.map((item, index) => (
                                <HomeAccordionItem
                                    key={index}
                                    title={item.title}
                                    content={item.content}
                                    isOpen={openIndex === index}
                                    onClick={() => handleToggle(index)}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </AnimatedSection>
            <AnimatedSection>
                <section className="bg-[#000E22] pt-1">
                    <div className="md:ps-16 -mt-40 w-[90%] max-w-[1232px] mx-auto bg-[#0047AB] rounded-2xl flex flex-col sm:flex-row items-center overflow-hidden">
                        <div className="w-full sm:w-2/3 space-y-3 px-5 py-10 sm:py-20">
                            <h1 className="text-white text-2xl sm:text-3xl lg:text-5xl font-semibold">Ready to be <br /> lingually free?</h1>
                            <p className="text-white pb-5 text-sm sm:text-base">Join thousand of learners and become an engligh guru</p>
                            <button className="text-[#0047AB] bg-white px-8 py-3 rounded-md font-medium text-sm sm:text-base transition-transform duration-300 hover:scale-110">Join our waitlist</button>
                        </div>
                        <div className="w-full sm:w-1/3 relative">
                            <Image src='/image.png' alt='image' width={1000} height={1000} objectFit="cover" className="max-w-[300px] flex justify-end ml-auto mr-0" />
                            <SmallTestimonyCard rotate={"-rotate-3"} />
                            <SmallTestimonyCard rotate={"-rotate-6 mt-3"} />
                            <SmallTestimonyCard rotate={"-rotate-12 mt-6"} />
                        </div>
                    </div>
                </section>
            </AnimatedSection>
        </main>
    );
}
