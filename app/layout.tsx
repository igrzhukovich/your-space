import "@picocss/pico";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavMenu from "./NavMenu";
import AuthProvider from "./AuthProvider";
import Providers from "./redux/provider";
import { CounterProvider } from "@/components/CounterReact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Providers>
            <CounterProvider>
                <AuthProvider>
                    <html lang="en">
                        <body className={`${inter.className} container`}>
                            <NavMenu />
                            {children}
                        </body>
                    </html>
                </AuthProvider>
            </CounterProvider>
        </Providers>
    );
}
