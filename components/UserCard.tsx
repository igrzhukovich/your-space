import Image from "next/image";
import Link from "next/link";

interface Props {
    id: string;
    name: string | null;
    email: string | null;
    image: string | null;
}

export default function UserCard({ id, name, email, image }: Props) {
    return (
        <article>
            <p>
                {image && (
                    <Image
                        src={image}
                        width={32}
                        height={32}
                        alt={`${name}'s profile`}
                    />
                )}
                <Link href={`/users/${id}`}>{name}</Link>
            </p>
            <p>{email}</p>
        </article>
    );
}
