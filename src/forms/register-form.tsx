'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Eye, EyeOff } from 'lucide-react'
import { registrationFormSchema } from '@/schemas'
import { Email2, KeyIcon } from '@/components/icons'
import { useRouter } from '@bprogress/next'

type FormValues = z.infer<typeof registrationFormSchema>

export default function RegistrationForm() {
    const [showPassword, setShowPassword] = useState(false)
    const router = useRouter()

    const form = useForm<FormValues>({
        resolver: zodResolver(registrationFormSchema),
        defaultValues: {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
        },
    })

    const onSubmit = (data: FormValues) => {
        console.log('Form data:', data)
        form.reset()
        // Send to API...
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5 max-w-md mx-auto"
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-xs sm:text-sm text-grey-900'>Email Address <span className="text-red-500 text-sm">*</span></FormLabel>
                            <FormControl>
                                <div className="relative p-2 lg:p-4 border border-input rounded-lg flex items-center gap-2">
                                    <Email2 className="text-grey-500 text-lg" />
                                    <Input
                                        placeholder="Enter your email address"
                                        className="border-0 p-0 shadow-none focus-visible:ring-0 placeholder:text-sm"
                                        {...field}
                                    />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                
                <div className="flex items-center gap-4">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-xs sm:text-sm text-grey-900'>First Name <span className="text-red-500 text-sm">*</span></FormLabel>
                                <FormControl>
                                    <Input className="p-2 lg:p-4 " {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-xs sm:text-sm text-grey-900'>Last Name <span className="text-red-500 text-sm">*</span></FormLabel>
                                <FormControl>
                                    <Input className='p-2 lg:p-4' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-xs sm:text-sm text-grey-900'>Create Password <span className="text-red-500 text-sm">*</span></FormLabel>
                            <FormControl>
                                <div className="relative p-2 lg:p-4 border border-input rounded-lg flex items-center gap-2">
                                    <KeyIcon/>
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Enter your password"
                                        className="border-0 shadow-none p-0 focus-visible:ring-0 placeholder:text-xs"
                                        {...field}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="text-muted-foreground hover:scale-110 transition-all duration-300 ease-in-out"
                                        tabIndex={-1}
                                    >
                                        {showPassword ? (
                                            <Eye className="w-4 h-4" />
                                        ) : (
                                            <EyeOff className="w-4 h-4" />
                                        )}
                                    </button>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <p className="text-xs md:text-sm text-grey-500 font-inter">
                    Passwords should be at least 8 characters long and should contain a mixture
                    of letters, numbers, and other characters.
                </p>
                
                <div className="flex gap-4">
                    <Button onClick={() => router.push("/auth/register")} variant="outline" type="button" className="text-base w-full max-w-[131px] flex-1 border-primary text-primary">
                        Back
                    </Button>
                    <Button type="submit" className="text-base w-full max-w-[293px]">
                        Sign Up
                    </Button>
                </div>
            </form>
        </Form>
    )
}
