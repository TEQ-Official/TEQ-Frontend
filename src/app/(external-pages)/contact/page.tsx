import React from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ContactForm from "@/forms/ContactForm";
import PageDoodles from "@/components/shared/PageDoodles";

function ContactPage() {
    return (
        <section className="relative py-10 sm:py-20">
            <AnimatedSection>
                <div className="w-[90%] max-w-[611px] mx-auto">
                    <div className="flex flex-col items-center gap-4 mb-10">
                        <h1 className="text-[#101928] text-5xl font-semibold">
                            Get in touch
                        </h1>
                        <p className="text-[#667185] text-lg leading-[26px]">
                            We are always available to respond to your messages
                        </p>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </AnimatedSection>
            <PageDoodles
                doodles={[
                    {
                        src: "/left-screen-doodle.svg",
                        containerClass: "w-[20%] h-full",
                        position:
                            "top-0 left-0 opacity-70 lg:opacity-100 w-[20%]",
                    },
                    {
                        src: "/right-screen-doodle.svg",
                        containerClass: "w-[20%] right-0 h-full",
                        position:
                            "bottom-0 right-0 h-[50%] opacity-70 lg:opacity-100 h-fit w-[30%] md:w-[23%]",
                    },
                    {
                        src: "/middle-highlight.svg",
                        containerClass: "w-full h-full",
                        position:
                            "top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2",
                    },
                ]}
            />
        </section>
    );
}

export default ContactPage;
