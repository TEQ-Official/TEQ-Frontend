"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaUserPlus,
  FaGoogle,
  FaUser,
  FaApple,
  FaFacebook,
  FaMicrosoft,
} from "react-icons/fa";
import Image from "next/image";
export const SignUpOptions = [
  {
    name: "Google",
    icon: FaGoogle,
    path: "./google.svg",
  },
  {
    name: "Apple",
    icon: FaApple,
    path: null,
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    path: null,
  },
  {
    name: "Microsoft",
    icon: FaMicrosoft,
    path: "/microsoft.svg",
  },
];

const RegisterPage = () => {
  // State for user type
  const [userType, setUserType] = useState<"Student" | "Learner">("Student");
  return (
    <div className="py-20">
      <div className="flex flex-col items-center justify-center py-10">
        <div className="flex flex-col items-center justify-center">
          <div className=" p-4 rounded-full  bg-[#0047AB]/10">
            <div className="shadow-md p-4 rounded-full shadow-[#0047AB] bg-white">
              <FaUser size={20} className="text-[#0047AB] text-[10px] " />
            </div>
          </div>
          <h1 className="text-2xl font-bold">We want to keep you updated</h1>
          <p className="text-sm text-gray-500">
            Ready to Learn? Let's Make it Happen
          </p>
        </div>

        {/* Tab Switch for User Type */}
        <div className="flex items-center gap-4 mt-8 mb-4">
          <button
            className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 border-2 ${
              userType === "Student"
                ? "bg-[#0047AB] text-white border-[#0047AB]"
                : "bg-white text-[#0047AB] border-[#0047AB]"
            }`}
            onClick={() => setUserType("Student")}
          >
            Learner
          </button>
          <button
            className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 border-2 ${
              userType === "Learner"
                ? "bg-[#0047AB] text-white border-[#0047AB]"
                : "bg-white text-[#0047AB] border-[#0047AB]"
            }`}
            onClick={() => setUserType("Learner")}
          >
            Tutor
          </button>
        </div>
        {/* End Tab Switch */}
      </div>
      {/* Sign Up Options  */}
      <div className="flex flex-col items-center w-full mt-2">
        <div className="w-full max-w-sm flex flex-col items-center gap-4">
          {SignUpOptions.map((option, index) => (
            <div
              className="border-2 border-black cursor-pointer p-4 rounded-md flex items-center gap-3 w-full justify-center bg-white hover:shadow-md transition-shadow duration-200"
              key={index}
            >
              {/* Use the Google SVG only for Google, otherwise fallback to icon */}
              {option.path === null ? (
                <option.icon size={24} />
              ) : (
                <Image src={option.path} alt={option.name} width={24} height={24} />
              )}
              <p className="font-medium text-base">
                Continue with {option.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-4">
        Already have an account? <Link href="/login" className="text-[#0047AB] underline">Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
