import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationHeader from "./components/Nav";
import Footer from "./components/Footer";
import topHighlight from "../../public/top-highlight.svg";
import PageDoodles from "./components/PageDoodles";
import { ReduxProvider } from "@/lib/provider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "TheEnglish-Cliniq",
    description: "One Platform for all your English Needs.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
            >
                <ReduxProvider>
                    <NavigationHeader />
                    {children}
                    <Footer />
                    <PageDoodles
                        doodles={[
                            {
                                src: topHighlight,
                                position:
                                    "absolute top-0 left-1/2 -translate-x-1/2",
                            },
                        ]}
                    />
                </ReduxProvider>
            </body>
        </html>
    );
}
