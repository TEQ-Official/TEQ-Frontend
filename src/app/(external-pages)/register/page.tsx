

import { Metadata } from "next";
import AnimatedSection from "@/components/shared/AnimatedSection";
import RegisterPage from "@/components/register/RegisterPage";

export const metadata: Metadata = {
    title: "Register",

    description: "Join us and start your journey to success",
};

export default function Register() {
    return <AnimatedSection>
        <RegisterPage />
    </AnimatedSection>;
}