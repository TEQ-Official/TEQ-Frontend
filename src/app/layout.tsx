import "./globals.css";
import { Poppins, Inter } from "next/font/google"
import { Providers } from "@/providers";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
})

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-inter"
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${poppins.variable} ${inter.variable} antialiased relative`}
            >
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
