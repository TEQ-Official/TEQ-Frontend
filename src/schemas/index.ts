import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  emailAddress: z
    .string()
    .email("Invalid email address")
    .min(1, "Email is required"),
  message: z.string().min(1, "Message is required"),
})

export const registrationFormSchema = z.object({
    email: z.string().email('Enter a valid email address'),
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    password: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Za-z]/, 'Include letters')
        .regex(/[0-9]/, 'Include numbers'),
})

export const loginFormSchema = z.object({
    email: z.string().email('Enter a valid email address'),
    password: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Za-z]/, 'Include letters')
        .regex(/[0-9]/, 'Include numbers'),
})
