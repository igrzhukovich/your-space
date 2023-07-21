import Link from "next/link";

export default function NavMenu() {
    return (
        <div className="container">
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
                </ul>
            </nav>
        </div>
    );
}
