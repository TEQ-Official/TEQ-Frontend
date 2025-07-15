"use client";
// import Button from "../components/Button";
// import Input from "../components/Input";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { contactFormSchema } from "@/schemas";

type ContactFormValues = z.infer<typeof contactFormSchema>

function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      emailAddress: "",
      message: "",
    },
  })

  const onSubmit = (data: ContactFormValues) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-10"
      >
        <div className="p-6 border border-[#EAE5E5FC] rounded-xl flex flex-col gap-[27px]">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm leading-[19.1px]">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm leading-[19.1px]">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm leading-[19.1px]">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea rows={5} placeholder="Your message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="px-6 py-5 bg-[#0047AB] text-white">
          Send Message
        </Button>
      </form>
    </Form>
  )
}

export default ContactForm
