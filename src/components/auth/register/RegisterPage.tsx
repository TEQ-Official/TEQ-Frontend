"use client";
import Link from "next/link";
import React, { useState } from "react";
import CountrySelect from "@/components/shared/country-select";
import { AppleLogo, Email, GoogleLogo, MicrosoftLogo } from "@/components/icons";
import { IAuthMode, ICountry } from "@/types";
import { Button } from "@/components/ui/button";
import { users } from "@/utils";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { setAuthMode } from "@/lib/features/auth-mode-slice";

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

const RegisterPage = () => {
  const dispatch = useDispatch()
  const mode = useSelector((state: RootState) => state.authMode.mode)
  const [userCountry, setUserCountry] = useState<ICountry>();

  const toggleMode = (mode: IAuthMode) => {
    dispatch(setAuthMode(mode))
  }

  return (
    <div className="space-y-10">
      <div className="flex items-center w-full max-w-[380px] mx-auto mt-4">
        {users && users.map((user) => {
          return (
            <Button
              key={user}
              variant="outline"
              className={cn("w-full py-3", {
                "bg-primary text-white border-primary rounded-none": mode === user,
                "bg-white text-neutral-800 border-primary-50 rounded-none": mode !== user,
                "rounded-s-lg": user === "Learner",
                "rounded-e-lg": user === "Tutor"

              })}
              onClick={() => toggleMode(user as IAuthMode)}
            >
              {user}s
            </Button>
          )
        })}
      </div>

      <div className="flex flex-col items-center w-full mt-2 gap-4">
        <div className="space-y-2 w-full">
          <p className="text-sm text-grey-500 font-inter">Where are you learning from?</p>
          <CountrySelect userCountry={userCountry} setUserCountry={setUserCountry} />
        </div>
        <AnimatePresence>
          {userCountry && <motion.div
            key="signup-options"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }} className="w-full flex flex-col items-center gap-4">
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
          </motion.div>}
        </AnimatePresence>
      </div>

      <p className="text-center text-sm text-gray-500 mt-4">
        Already have an account? <Link href="/auth/login" className="text-primary underline">Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
