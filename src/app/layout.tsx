import "./globals.css";
import { Poppins } from "next/font/google"
import { Providers } from "@/providers";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${poppins.variable} antialiased relative`}
            >
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
