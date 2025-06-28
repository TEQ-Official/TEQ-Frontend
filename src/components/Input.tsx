import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

function Input({
    label,
    value,
    labelClass,
    inputClass,
    htmlFor,
    isTextArea,
    row,
}: {
    label: string;
    value: string;
    labelClass: string;
    inputClass?: string;
    htmlFor: string;
    isTextArea?: boolean;
    row?: number;
}) {
    const {
        register,
        formState: { errors },
    } = useForm();
    return (
        <div className="flex flex-col gap-2 ">
            <label htmlFor={htmlFor} className={labelClass}>
                {label}
            </label>
            {!isTextArea ? (
                <input
                    type="text"
                    id={htmlFor}
                    aria-invalid={errors[value] ? "true" : "false"}
                    {...register(value, {
                        required: {
                            value: true,
                            message: `${label} is required.`,
                        },
                    })}
                    className={`rounded-xl p-4 border border-[#EAE5E5FC] ${inputClass}`}
                />
            ) : (
                <textarea
                    id={htmlFor}
                    rows={row}
                    aria-invalid={errors[value] ? "true" : "false"} 
                    {...register(value, {
                        required: "This field cannot be blank",
                    })}
                    className={`rounded-xl p-4 border border-[#EAE5E5FC] r ${inputClass}`}
                ></textarea>
            )}
            {errors[value] && typeof errors[value].message === "string" && (
                <InputError message={errors[value].message} />
            )}
        </div>
    );
}

function InputError({ message }: { message: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="text-red-500 font-semibold text-sm"
        >
            <span>{message}</span>
        </motion.div>
    );
}

export default Input;
