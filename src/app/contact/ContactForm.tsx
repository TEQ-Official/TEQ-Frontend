"use client";

import { FieldValues, useForm } from "react-hook-form";
import Button from "../components/Button";
import Input from "../components/Input";

function ContactForm() {
    const {
        handleSubmit,
    } = useForm();

    const onSubmit = (data: FieldValues) => {
        console.log(data);
    };

    return (
        <form
            className="flex flex-col gap-10"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="p-6 border border-[#EAE5E5FC] rounded-xl flex flex-col gap-[27px]">
                <Input
                    label="Name"
                    value="name"
                    labelClass="text-sm leading-[19.1px]"
                    htmlFor="name"
                />
                <Input
                    label="Email Address"
                    value="emailAddress"
                    labelClass="text-sm leading-[19.1px]"
                    htmlFor="email-address"
                />
                <Input
                    label="Message"
                    value="message"
                    labelClass="text-sm leading-[19.1px]"
                    htmlFor="message"
                    isTextArea={true}
                    row={5}
                />
            </div>
            <Button className="px-6 py-5 bg-[#0047AB] text-white">
                Send Message
            </Button>
        </form>
    );
}

export default ContactForm;
