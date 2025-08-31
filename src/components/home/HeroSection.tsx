import Image from "next/image";
import { BsStarFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import AnimatedSection from "../shared/AnimatedSection";

export default function HeroSection() {
    return (
        <div className="w-full max-w-[1232px] md:px-20 mx-auto text-center py-32 relative">
            <AnimatedSection className="w-[90%] mx-auto">
                <div className="inline-flex items-center gap-2 bg-[#f6f6ff] text-blue-700 px-4 py-1 rounded-full text-sm mb-4 shadow-sm mx-auto w-max">
                    <span className="flex">
                        <Image width={1000} height={1000} alt="small icon" src='/nancy.png' className="w-5 h-5 rounded-full" />
                        <Image width={1000} height={1000} alt="small icon" src='/abidal.png' className="w-5 h-5 rounded-full -ms-2" />
                        <Image width={1000} height={1000} alt="small icon" src='/nancy.png' className="w-5 h-5 rounded-full -ms-2" />
                    </span>
                    <span className="font-medium">Join Other Learners</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
                    One Platform for all <br />
                    <span className="bg-gradient-to-r from-[#F59E0B] via-[#D946EF] to-[#3B82F6] bg-clip-text text-transparent">
                        Your
                    </span>
                    <span> English </span>
                    <span className="bg-gradient-to-r from-[#3B82F6] via-[#D946EF] to-[#F59E0B] bg-clip-text text-transparent">
                        Needs
                    </span>
                </h1>
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
                <div className="mt-16 relative">
                    <Image
                        width={1000} height={1000}
                        src="/map_image-removebg.png"
                        alt="World Map"
                        className="w-full h-auto"
                    />

                    <div className="absolute text-left text-sm left-[10%] top-[20%] w-[150px] sm:w-[250px] lg:w-[350px] bg-white rounded-2xl shadow-lg">
                        <div className="relative flex flex-col sm:flex-row items-center">
                            <Image width={1000} height={1000} src="/nancy.png" alt="Nancy" className="w-full sm:w-28 lg:w-40 h-28 lg:h-40 rounded-2xl object-cover" />
                            <div className="p-2 lg:p-5 flex justify-between flex-col gap-3 lg:gap-7">
                                <p className="text-gray-700 text-xs lg:text-sm">
                                    The English clinic truly serves to cure your spoken and written English
                                </p>
                                <span>
                                    <p className="font-semibold text-xs lg:text-sm text-gray-500">Nancy Icoma</p>
                                    <span className="flex items-center gap-2 text-sm">5 <BsStarFill className="text-[#0047AB] size-3" /> </span>
                                </span>
                            </div>
                            <div className="absolute left-[90%] top-[60%] sm:top-full sm:left-[70%] translate-x-[50%] flex sm:block">
                                <div className="w-0 h-0 border-y-8 sm:border-y-0 border-y-transparent border-l-[12px] border-l-white sm:border-x-8 sm:border-x-transparent sm:border-t-[12px] sm:border-t-white mx-auto"></div>
                                <div className="text-[#0047AB] text-xl text-center"><FaLocationDot /></div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute text-left text-sm right-0 bottom-[30%] w-[250px] lg:w-[350px] bg-white rounded-2xl shadow-lg hidden sm:flex items-start">
                        <div className="relative flex items-center">
                            <div className="p-2 lg:p-5 flex justify-between flex-col gap-3 lg:gap-7">
                                <p className="text-gray-700 text-xs lg:text-sm">
                                    The English clinic truly serves to cure your spoken and written English
                                </p>
                                <span>
                                    <p className="font-semibold text-xs lg:text-sm text-gray-500">Abdul Zdonne</p>
                                    <span className="flex items-center gap-2 text-sm"><span>5</span> <BsStarFill className="text-[#0047AB] size-3" /> </span>
                                </span>
                            </div>
                            <Image width={1000} height={1000} src="/abidal.png" alt="Abdul" className="w-28 lg:w-40 h-28 lg:h-40 rounded-2xl object-cover" />
                            <div className="absolute top-full left-[30%] translate-x-[50%]">
                                <div className="w-0 h-0 border-x-8 border-x-transparent border-t-[12px] border-t-white mx-auto"></div>
                                <div className="text-[#0047AB] text-xl text-center"><FaLocationDot /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
}
