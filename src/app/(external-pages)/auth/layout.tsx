"use client"

import AnimatedSection from '@/components/shared/AnimatedSection'
import { RootState } from '@/lib/store'
import { cn } from '@/lib/utils'
import { authPagesDetails } from '@/utils'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'

function AuthLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const mode = useSelector((state: RootState) => state.authMode.mode)

    const currentPageDetails = authPagesDetails[pathname as keyof typeof authPagesDetails]

    const description =
        typeof currentPageDetails.description === "string"
            ? currentPageDetails.description
            : currentPageDetails.description[mode];

    return (
        <AnimatedSection className={cn("bg-auth-page-bg bg-cover bg-no-repeat bg-center ", {
            "md:min-h-screen space-y-4 max-sm:px-11 max-sm:py-[50px] max-md:py-[100px] flex flex-col justify-center": pathname === "/auth/reset-password"
        })}>
            <div className={cn("py-[50px] lg:py-20 max-w-[440px] w-full mx-auto px-[30px]", {
                "space-y-10" : pathname !== "/auth/register"
            })}>
                <div className="space-y-6 w-full">
                    <div className="rounded-full size-[60px] lg:size-[100px] bg-[#F0F2F5] mx-auto flex items-center justify-center">
                        <div className="shadow-md rounded-full border border-[#D9D9D9] shadow-black/5 bg-white size-10 lg:size-16 mx-auto flex items-center justify-center">
                            <currentPageDetails.Icon className="text-primary text-xl lg:text-2xl" />
                        </div>
                    </div>
                    <div className="space-y-2 text-center">
                        <h1 className="text-2xl lg:text-[32px] text-neutral-900 font-semibold">{currentPageDetails.title}</h1>
                        <p className="max-md:text-sm text-grey-500 font-medium">
                            {description}
                        </p>
                    </div>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </AnimatedSection>
    )
}

export default AuthLayout