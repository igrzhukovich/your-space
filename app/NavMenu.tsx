import AuthCheck from "@/components/AuthCheck";
import { SignInButton, SignOutButton } from "@/components/buttons";
import Link from "next/link";

export default function NavMenu() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/about"}>About</Link>
                </li>
                <li>
                    <Link href={"/blog"}>Blog</Link>
                </li>
                <li>
                    <Link href={"/users"}>Users</Link>
                </li>
                <li>
                    <SignInButton />
                </li>
                <AuthCheck>
                    <li>
                        <SignOutButton />
                    </li>
                </AuthCheck>
            </ul>
        </nav>
    );
}
