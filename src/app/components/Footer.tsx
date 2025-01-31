import React from "react";
import Logo from "./Logo";
import Link from "next/link";

// const icons = [
//     {
//         // Icon: ,
//         link: "",
//     },
// ];

const links = [
    {
        title: "Services",
        subLinks: [
            {
                linkName: "For Instructors",
                link: "",
            },
            {
                linkName: "For Learners",
                link: "",
            },
        ],
    },
    {
        title: "Media",
        subLinks: [
            {
                linkName: "Blogs",
                link: "",
            },
            {
                linkName: "Resources",
                link: "",
            },
        ],
    },
    {
        title: "Legal",
        subLinks: [
            {
                linkName: "Privacy Policy",
                link: "",
            },
            {
                linkName: "Terms and Conditions",
                link: "",
            },
        ],
    },
];

function Footer() {
    return (
        <footer className="bg-[#000E22] text-white text-sm lg:text-base">
            <div className="w-[90%] mx-auto flex flex-col xl:flex-row gap-10 lg:pl-20 lg:pr-[52px] pt-20 pb-6">
                <div className="flex flex-col gap-3">
                    <Logo color="white" />
                    <p className="w-[323px] text-[#98A2B3]">
                        Join us on this journey as we help you refine your
                        english knowledge
                    </p>
                </div>
                <div className="flex-1">
                    <div className="flex flex-col justify-between h-full gap-10 divide-y divide-white/20 ">
                        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">
                            <div className="grid sm:grid-cols-3 gap-[29.34px] sm:gap-[49.34px]">
                                {links.map((link, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-col gap-5 sm:gap-10"
                                        >
                                            <p className="font-semibold text-lg lg:text-xl">
                                                {link.title}
                                            </p>
                                            <ul className="flex flex-col gap-5 sm:gap-10 text-[#98A2B3]">
                                                {link.subLinks.map(
                                                    (subLink, linkIndex) => {
                                                        return (
                                                            <Link
                                                                href={
                                                                    subLink.link
                                                                }
                                                                key={linkIndex}
                                                            >
                                                                {
                                                                    subLink.linkName
                                                                }
                                                            </Link>
                                                        );
                                                    }
                                                )}
                                            </ul>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="flex flex-col gap-5">
                                <p className="text-xl font-semibold">
                                    Reach us
                                </p>
                                <div>
                                    <p className="text-[#98A2B3]">
                                        2972 Westheimer Rd. Santa Ana, Illinois
                                        85486{" "}
                                    </p>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-0 justify-between pt-[22px] text-[#D0D5DD]">
                            <p className="">
                                Copyright 2025 TheenglishCliniq.io. All Rights
                                Reserved
                            </p>
                            <div className="flex gap-4">
                                <p>Terms & Conditions</p>
                                <p>Privacy Policy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
