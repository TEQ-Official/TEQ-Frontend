import Header from "@/components/shared/Nav";
import Footer from "@/components/shared/Footer";


export default function ExternalPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
