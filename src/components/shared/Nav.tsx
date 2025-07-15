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
import { navLinks } from "@/constants";

function Header() {
    const pathname = usePathname();
    const dispatch = useDispatch();
    const showNav = useSelector((state: RootState) => state.navigation.showNav);
    return (
        <header className="sticky top-0 z-50  md:mb-7">
            <div className="w-[88.89%] max-w-7xl flex items-center mt-5 bg- backdrop-blur-sm shadow-lg justify-between mx-auto p-6 rounded-md">
                <Link href="/">
                    <Logo color="blue" className="w-[86px] h-8" />
                </Link>
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-4 justify-center">
                        {navLinks.map((navItem, index) => {
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
                        href="/register"
                        className={`bg-[#0047AB]/55 text-[#0047AB] px-4 py-2 rounded-md ${
                            pathname === "/register"
                                ? " font-bold"
                                : " text-[#0047AB] font-medium"
                        }
                        `}
                    >
                        Get Started
                    </Link>
                </div>
                <div className="md:hidden" onClick={() => dispatch(openNav())}>
                    <AiOutlineMenu
                        size={20}
                        className="cursor-pointer transition-transform ease-in-out duration-300 hover:scale-110"
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
                                        onClick={() => dispatch(closeNav())}
                                    >
                                        {navItem.name}
                                    </Link>
                                );
                            })}
                              <Link
                        href="/register"
                        className={`bg-[#0047AB]/55 text-white w-fit px-4 py-2 rounded-md ${
                            pathname === "/register"
                                ? " font-bold"
                                : " text-[#0047AB] font-medium"
                        }
                        `}
                    >
                        Get Started
                    </Link>
                        </ul>
                    </div>
                </div>
            </AnimatePresence>
        </header>
    );
}

export default Header;
