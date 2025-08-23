"use client"

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
    email: z.string().email("Invalid email address").nonempty("Email is required"),
})

function Page() {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log("Reset email sent to:", values.email);
        form.reset()
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full max-sm:max-w-[266px] mx-auto">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-sm'>Email Address</FormLabel>
                            <FormControl>
                                <Input className='p-4' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type='submit' className='w-full py-4 px-6 font-semibold'>
                    Recover password
                </Button>
            </form>
        </Form>
    )
}

export default Page