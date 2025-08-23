'use client'

import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { Check, ChevronDown } from "lucide-react"
import { COUNTRIES_DATA } from "@/utils"
import { ICountry } from "@/types"
import Image from "next/image"

interface CountrySelectProps {
    setUserCountry: (country: ICountry) => void;
    userCountry: ICountry | undefined;
}

export default function CountrySelect({ setUserCountry, userCountry }: CountrySelectProps) {
    const [open, setOpen] = useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between p-4 hover:shadow-md hover:bg-white transition-shadow duration-300"
                >
                    {userCountry?.name !== undefined ? <span className="flex items-center gap-2">
                        <Image
                            src={userCountry.flagUrl}
                            alt={userCountry.name}
                            width={20}
                            height={15}
                            className="h-4 w-6 rounded-sm"
                        />
                        {userCountry?.name}
                    </span> : <span>Select your Country</span>}
                    <ChevronDown className="ml-2 shrink-0 text-neutral-500" size={20} />
                </Button>
            </PopoverTrigger>

            <PopoverContent className="w-full p-0">
                <Command className="w-full">
                    <CommandInput placeholder="Search country..." className="h-9" />
                    <CommandList>
                        {COUNTRIES_DATA.map((country) => (
                            <CommandItem
                                key={country.code}
                                value={country.name}
                                onSelect={() => {
                                    setUserCountry(country)
                                    setOpen(false)
                                }}
                                className="flex items-center gap-2"
                            >
                                <Image
                                    src={country.flagUrl}
                                    alt={country.name}
                                    width={20}
                                    height={15}
                                    className="h-4 w-6 rounded-sm"
                                />
                                <span className="flex-1">{country.name}</span>
                                {userCountry?.code === country.code && (
                                    <Check className="h-4 w-4 text-green-500" />
                                )}
                            </CommandItem>
                        ))}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
