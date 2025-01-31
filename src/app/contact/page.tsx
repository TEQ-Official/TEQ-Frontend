import React from "react";
import ContactForm from "./ContactForm";
import leftDoodle from "../../../public/left-screen-doodle.svg";
import rightDoodle from "../../../public/right-screen-doodle.svg";
import Image from "next/image";
import PageDoodles from "../components/PageDoodles";
import topHighlight from "../../../public/top-highlight.svg";
import leftHighlight from "../../../public/left-highlight.svg";
import middleHighlight from "../../../public/middle-highlight.svg";

function ContactPage() {
    return (
        <section className="relative py-10 sm:py-20">
            <div className="w-[90%] max-w-[611px] mx-auto">
                <div className="flex flex-col items-center gap-4 mb-10">
                    <h1 className="text-[#101928] text-5xl font-semibold">
                        Get in touch
                    </h1>
                    <p className="text-[#667185] text-lg leading-[26px]">
                        We're always available to respond to your messages
                    </p>
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>
            <PageDoodles
                doodles={[
                    {
                        src: leftDoodle,
                        position: "top-0 left-0 w-[20%] opacity-70 md:opacity-100 lg:w-auto",
                    },
                    {
                        src: rightDoodle,
                        position:
                            "bottom-0 right-0 w-[30%] opacity-70 md:opacity-100 lg:w-auto",
                    },
                    {
                        src: middleHighlight,
                        position:
                            "top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 ",
                    },
                ]}
            />
        </section>
    );
}

export default ContactPage;
