"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavigationHeader() {
    const pathname = usePathname();
    return (
        <div>
            <nav>
                <ul className="flex items-center gap-4 justify-center">
                    <Link
                        href="/"
                        className={
                            pathname === "/" ? "font-bold" : "text-blue-600"
                        }
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className={
                            pathname === "/about"
                                ? "font-bold"
                                : "text-blue-600"
                        }
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className={
                            pathname === "/contact"
                                ? "font-bold"
                                : "text-blue-600"
                        }
                    >
                        Contact
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default NavigationHeader;
