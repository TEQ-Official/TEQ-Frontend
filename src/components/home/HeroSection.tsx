import Image from "next/image";
import { BsStarFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import AnimatedSection from "../shared/AnimatedSection";

export default function HeroSection() {
    return (
        <section className="w-[90%] max-w-[1232px] md:px-20 mx-auto px-4 text-center py-12 md:py-20 relative">
            <AnimatedSection>
                <div className="inline-flex items-center gap-2 bg-[#f6f6ff] text-blue-700 px-4 py-1 rounded-full text-sm mb-4 shadow-sm mx-auto w-max">
                    <span className="flex">
                        <Image width={1000} height={1000} alt="small icon" src='/nancy.png' className="w-5 h-5 rounded-full" />
                        <Image width={1000} height={1000} alt="small icon" src='/abidal.png' className="w-5 h-5 rounded-full -ms-2" />
                        <Image width={1000} height={1000} alt="small icon" src='/nancy.png' className="w-5 h-5 rounded-full -ms-2" />
                    </span>
                    <span className="font-medium">Join Other Learners</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mx-auto">
                    One Platform for all <br />
                    <span className="bg-gradient-to-r from-[#F59E0B] via-[#D946EF] to-[#3B82F6] bg-clip-text text-transparent">
                        Your
                    </span>
                    <span> English </span>
                    <span className="bg-gradient-to-r from-[#3B82F6] via-[#D946EF] to-[#F59E0B] bg-clip-text text-transparent">
                        Needs
                    </span>
                </h1>
                <p className="md:hidden mt-5 text-gray-700">Get personalized learning, expert tutors, comprehensive resources, & career transformative modules.</p>
                <form className="mt-8 flex justify-center items-center max-w-xl mx-auto">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full sm:w-auto flex-1 px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        type="submit"
                        className="bg-[#0047AB] border border-[#0047AB] text-white px-6 py-3 rounded-r-md hover:bg-[#0047AB] font-medium"
                    >
                        Join Waitlist
                    </button>
                </form>
            </AnimatedSection>
            <AnimatedSection>
                <div className="mt-16 relative hidden sm:block">
                    <Image
                        width={1000} height={1000}
                        src="/map image.png"
                        alt="World Map"
                        className="w-full h-auto"
                    />

                    <div className="absolute text-left text-sm left-[10%] top-[20%] w-[210px] lg:w-[350px] bg-white rounded-2xl shadow-lg">
                        <div className="relative flex items-start">
                            <Image width={1000} height={1000} src="/nancy.png" alt="Nancy" className="w-28 lg:w-40 h-28 lg:h-40 rounded object-cover" />
                            <div className="p-2 lg:p-5 flex justify-between flex-col gap-3 lg:gap-7">
                                <p className="text-gray-700 text-xs lg:text-base">
                                    The English clinic truly serves to cure your spoken and written English
                                </p>
                                <span className="text-xs lg:text-base">
                                    <p className="font-semibold text-gray-500">Nancy Icoma</p>
                                    <span className="flex items-center gap-2 text-base">5 <BsStarFill className="text-[#0047AB]" /> </span>
                                </span>
                            </div>
                            <div className="absolute top-full left-[70%] translate-x-[50%]">
                                <div className="w-0 h-0 border-x-8 border-x-transparent border-t-[12px] border-t-white mx-auto"></div>
                                <div className="text-[#0047AB] text-xl text-center"><FaLocationDot /></div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute text-left text-sm right-0 bottom-[30%] w-[210px] lg:w-[350px] bg-white rounded-2xl shadow-lg flex items-start">
                        <div className="relative flex items-start">
                            <div className="p-2 lg:p-5 flex justify-between flex-col gap-3 lg:gap-7">
                                <p className="text-gray-700 text-xs lg:text-base">
                                    The English clinic truly serves to cure your spoken and written English
                                </p>
                                <span className="text-xs lg:text-base">
                                    <p className="font-semibold text-gray-500">Abdul Zdonne</p>
                                    <span className="flex items-center gap-2 text-base">5 <BsStarFill className="text-[#0047AB]" /> </span>
                                </span>
                            </div>
                            <Image width={1000} height={1000} src="/abidal.png" alt="Abdul" className="w-28 lg:w-40 h-28 lg:h-40 rounded object-cover" />
                            <div className="absolute top-full left-[30%] translate-x-[50%]">
                                <div className="w-0 h-0 border-x-8 border-x-transparent border-t-[12px] border-t-white mx-auto"></div>
                                <div className="text-[#0047AB] text-xl text-center"><FaLocationDot /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
            <div className="sm:hidden flex flex-col justify-between gap-10 mt-20 px-5">
                <AnimatedSection><Image width={1000} height={1000} src="/Group 1091.png" alt="heroimage" /></AnimatedSection>
                <AnimatedSection><Image width={1000} height={1000} src="/Group 1093.png" alt="heroimage" className="px-7" /></AnimatedSection>
                <AnimatedSection><Image width={1000} height={1000} src="/Group 1092.png" alt="heroimage" /></AnimatedSection>
            </div>
        </section>
    );
}
