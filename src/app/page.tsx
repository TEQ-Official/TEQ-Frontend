"use client"

import { FaRegHandshake } from "react-icons/fa";
import HeroSection from "./components/HeroSection";
import HomeFeatureCard from "./components/HomeFeatureCard";
import { BsBook, BsBuildingFillUp } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import HomeSolutionItem from "./components/HomeSolutionItem";
import { useState } from "react";
import HomeAccordionItem from "./components/HomeAccordionItem";
import AnimatedSection from "./components/AnimatedSection";
import Image from "next/image";
import SmallTestimonyCard from "./components/SmallTestimonyCard";
import { RiSpeakFill } from "react-icons/ri";
import { FaPeopleRoof } from "react-icons/fa6";

export default function Home() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const cards = [
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
            bgColor: "bg-gradient-to-br from-[#1B6C2D] to-[#2FB56B] mt-16",
            ringphoto: '/ringphotogreen.png',
        },
        {
            title: "Professional growth",
            description:
                "Advance your career, expand your professional network, and achieve your goals with fluent English.",
            icon: <HiOutlineUserGroup />,
            iconbgColor: "",
            bgColor: "bg-gradient-to-br from-[#803519] to-[#DA6336] mt-32",
            ringphoto: '/ringphotored.png',
        },
    ];
    const solutions = [
        {
            title: "Exam Preparation",
            description:
                "Resources and courses for international exams like IELTS, TOEFL, SAT, GRE, and GMAT.",
            image: "/SolutionImage1.png",
            bgColor: "bg-[#FFF9F1]",
            icon: <RiSpeakFill />,
            iconbgColor: "bg-[#FFE9CC]",
            iconColor: "text-[#DA9829]",
        },
        {
            title: "Personalised Tutoring",
            description:
                "Proficient tutors for one-on-one classes, providing tailored guidance and support.",
            image: "/SolutionImage3.png",
            bgColor: "bg-[#F1FFF7]",
            icon: <FaPeopleRoof />,
            iconbgColor: "bg-[#D2FFE5]",
            iconColor: "text-[#13A04E]",
        },
        {
            title: "Career Transformation",
            description:
                "Course modules to help you transform your language knowledge into high paying career skills.",
            image: "/SolutionImage2.png",
            bgColor: "bg-[#FFF1FB]",
            icon: <BsBuildingFillUp />,
            iconbgColor: "bg-[#FFCDF1]",
            iconColor: "text-[#910068]",
        },
    ];
    const items = [
        {
            title: "Career Guidance",
            content:
                "Unlock your potential with personalized career advice. Whether you're exploring new opportunities or aiming for your next big move.",
        },
        {
            title: "Scholarship & Aid",
            content:
                "Get support navigating funding opportunities and application processes for local and international scholarships.",
        },
        {
            title: "Postgraduate support",
            content:
                "Guidance to help you succeed in graduate school applications, scholarships, research programs, and beyond.",
        },
        {
            title: "Pre-Departure Guidance for Study Abroad",
            content:
                "Receive expert advice on visa applications, documentation, and cultural preparedness before your journey.",
        },
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <main>
            <HeroSection />
            <AnimatedSection>
                <section className="hidden lg:block py-20 md:px-20 w-[90%] max-w-[1232px] mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                        Master English for Every <br className="hidden sm:block" /> Aspect of Your Life
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 mt-4 max-w-2xl mx-auto">
                        Whether you&#8216;re advancing your career, growing personally, or excelling in business, our tailored courses help you achieve fluency with confidence.
                    </p>
                    <div className="mt-6">
                        <button className="bg-[#0047AB] text-white px-6 py-3 rounded-md font-medium transition-transform duration-300 hover:scale-110">
                            Join our waitlist
                        </button>
                    </div>
                    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {cards.map((card, index) => (
                            <HomeFeatureCard key={index} {...card} />
                        ))}
                    </div>
                </section></AnimatedSection>
            <section className="bg-[#0047AB] md:bg-white">
                <div className="py-20 md:px-20 w-[90%] max-w-[1232px] mx-auto">
                    <AnimatedSection>
                        <div className="hidden md:block text-center mb-12">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                                Our Comprehensive <br className="hidden sm:block" />
                                English Learning Solutions
                            </h2>
                            <p className="mt-4 text-sm md:text-base text-gray-600 max-w-xl mx-auto">
                                Join thousands of learners worldwide and experience a proven approach to mastering English.
                            </p>
                        </div>
                        <div className="md:hidden text-white text-center space-y-8 pb-20">
                            <h1 className="text-3xl font-bold">Learn English for Business Purposes, Personal Development, and Professional Growth</h1>
                            <p className="text-lg">Catering to all level and categories of English learners.</p>
                            <button className="bg-white text-[#1D2739] text-xl font-semibold py-3 px-10 rounded-xl">Join our waitlist</button>
                        </div>
                        <div className="md:hidden py-20 space-y-5 text-center">
                            <p className="bg-white text-[#0047AB] p-2 inline-flex items-center gap-2 text-xs sm:text-base rounded-full">Guaranteed to make <span><Image src="/ielts.png" alt="ielts" width={100} height={100} /></span> be a walk in the park</p>
                            <h1 className="text-3xl text-white font-medium">English Learning for <br /> Everyone</h1>
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
                <section className="pt-24 py-64 md:px-20 w-[90%] max-w-[1232px] mx-auto">
                    <div className="flex flex-col md:flex-row md:items-start gap-8">
                        <div className="md:w-1/3 lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900">
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
                        <div className="w-full sm:w-2/3 space-y-3 px-5 py-10">
                            <h1 className="text-white text-4x md:text-5xl lg:text-6xl font-semibold">Ready to be <br /> lingually free?</h1>
                            <p className="text-white pb-5 text-lg">Join thousand of learners and become an engligh guru</p>
                            <button className="text-[#0047AB] bg-white py-3 px-8 rounded-xl text-lg">Join our waitlist</button>
                        </div>
                        <div className="w-full sm:w-1/3 relative">
                            <Image src='/image.png' alt='image' width={1000} height={1000} objectFit="cover" className="" />
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
