"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { closeNav, openNav } from "@/lib/features/navSlice";

interface INavLinks {
    name: string;
    link: string;
}

const navLinks: INavLinks[] = [
    {
        name: "About",
        link: "/about",
    },
    {
        name: "Services",
        link: "/servicePage",
    },
    {
        name: "Support",
        link: "/support",
    },
    {
        name: "Contact Us",
        link: "/contact",
    },
];

function NavigationHeader() {
    const pathname = usePathname();
    const dispatch = useDispatch();
    const showNav = useSelector((state: RootState) => state.navigation.showNav);
    return (
        <header className="py-6">
            <div className="w-[88.89%] max-w-7xl flex items-center justify-between mx-auto">
                <Link href="/">
                    <Logo color="blue" className="w-[86px] h-8" />
                </Link>
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-4 justify-center">
                        {navLinks.slice(0, 3).map((navItem, index) => {
                            return (
                                <Link
                                    href={navItem.link}
                                    key={index}
                                    className={` ${
                                        pathname === navItem.link
                                            ? "font-bold"
                                            : ""
                                    }`}
                                >
                                    {navItem.name}
                                </Link>
                            );
                        })}
                    </ul>
                </nav>
                <div className="hidden md:block">
                    <Link
                        href="/contact"
                        className={`${
                            pathname === "/contact"
                                ? " font-bold"
                                : " text-[#0047AB] font-medium"
                        }
                        `}
                    >
                        Contact Us
                    </Link>
                </div>
                <div className="md:hidden" onClick={() => dispatch(openNav())}>
                    <AiOutlineMenu
                        size={20}
                        className="transition-transform ease-in-out duration-300 hover:scale-110"
                    />
                </div>
            </div>
            <AnimatePresence>
                <div
                    className={`z-40 text-white lg:hidden overflow-auto p-8 sm:p-10 fixed top-0 w-full h-full bg-[#000E22] transition-all ease-in-out duration-1000 ${
                        showNav ? "left-0" : "left-[-100%]"
                    }`}
                >
                    <div className="flex items-center justify-between">
                        <Link href="/">
                            <Logo color="white" className="w-[86px] h-8" />
                        </Link>
                        <AiOutlineClose
                            size={20}
                            className="transition-transform ease-in-out duration-300 hover:scale-110"
                            onClick={() => dispatch(closeNav())}
                        />
                    </div>
                    <div className="mt-10">
                        <ul className="flex flex-col gap-5 text-lg">
                            {navLinks.map((navItem, index) => {
                                return (
                                    <Link
                                        href={navItem.link}
                                        key={index}
                                        className={`text-white ${
                                            pathname === navItem.link
                                                ? "font-bold"
                                                : ""
                                        }`}
                                    >
                                        {navItem.name}
                                    </Link>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </AnimatePresence>
        </header>
    );
}

export default NavigationHeader;
