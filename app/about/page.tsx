import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function AboutPage() {
    return (
        <div>
            <h2>About</h2>
            <h3>Text about this page</h3>
        </div>
    );
}