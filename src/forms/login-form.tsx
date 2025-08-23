"use client"

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { loginFormSchema } from '@/schemas'
import { useRouter } from '@bprogress/next'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type FormValues = z.infer<typeof loginFormSchema>

function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)
    const router = useRouter()

    const form = useForm<FormValues>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmit = (data: FormValues) => {
        console.log('Form data:', data)
        form.reset()
        router.push('/auh/login')
        // Send to API...
    }

    const { isDirty } = form.formState

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
                                <Input className="p-2 lg:p-4 " {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className='space-y-2'>
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-xs sm:text-sm text-grey-900'>Password <span className="text-red-500 text-sm">*</span></FormLabel>
                                <FormControl>
                                    <div className="relative p-2 lg:p-4 border border-input rounded-lg flex items-center gap-2">
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
                    <Link href="/auth/reset-password" className='test-[#002C77] font-medium text-sm text-right'>Forgot password?</Link>
                </div>

                <Button type="submit" className="text-base w-full" disabled={!isDirty}>
                    Sign Up
                </Button>
            </form>
        </Form>
    )
}

export default LoginForm