"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

function NavigationHeader() {
    const pathname = usePathname();
    return (
        <header className="py-6">
            <div className="w-[88.89%] max-w-7xl flex items-center justify-between mx-auto">
                <Link href="/">
                    <Logo color="blue" className="w-[86px] h-8" />
                </Link>
                <nav className="hidden lg:block">
                    <ul className="flex items-center gap-4 justify-center">
                        <Link
                            href="/about"
                            className={pathname === "/about" ? "font-bold" : ""}
                        >
                            About
                        </Link>
                        <Link
                            href="/servicepage"
                            className={
                                pathname === "/servicepage" ? "font-bold" : ""
                            }
                        >
                            Services
                        </Link>
                        <Link
                            href="/support"
                            className={
                                pathname === "/support" ? "font-bold" : ""
                            }
                        >
                            Support
                        </Link>
                    </ul>
                </nav>
                <div className="hidden lg:block">
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
                
            </div>
        </header>
    );
}

export default NavigationHeader;
