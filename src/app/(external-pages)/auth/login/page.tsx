import { AppleLogo, Email, GoogleLogo, MicrosoftLogo } from '@/components/icons';
import LoginForm from '@/forms/login-form'
import Link from 'next/link'
import React from 'react'

export const SignUpOptions = [
    {
        name: "Google",
        Icon: <GoogleLogo />,
    },
    {
        name: "Apple",
        Icon: <AppleLogo />,
    },
    {
        name: "Microsoft",
        Icon: <MicrosoftLogo />,
    },
    {
        name: "Email",
        Icon: <Email className="text-black text-2xl" />,
    },
];

function LoginPage() {
    return (
        <div>
            <div
                key="signup-options"
                className="w-full flex flex-col items-center gap-4 pt-10">
                {SignUpOptions.map(({ name, Icon }, index) => (
                    <Link
                        href={"/auth/register/email"}
                        className="border border-neutral-200 cursor-pointer py-4 px-10 rounded-lg flex items-center gap-10 w-full bg-white hover:shadow-md transition-shadow duration-300"
                        key={index}
                    >
                        {Icon}
                        <p className="font-medium text-base">
                            Continue with {name}
                        </p>
                    </Link>
                ))}
            </div>
            <div className='py-4 relative'>
                <p className='absolute left-1/2 -translate-x-1/2 bg-white'>OR</p>
                <hr className='text-neutral-100' />
            </div>
            <div>
                <LoginForm />
            </div>
            <p className="text-center text-sm text-gray-500 mt-4 pt-`10">
                Need a TeQ account? <Link href="/auth/register" className="text-primary underline">Sign up</Link>
            </p>
        </div>
    )
}

export default LoginPage