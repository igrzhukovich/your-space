import UserCard from "@/components/UserCard";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function UsersPage() {
    const session = await getServerSession(authOptions);
    const users = await prisma.user.findMany({
        where: {
            NOT: {
                email: session?.user?.email,
            },
        },
    });

    return (
        <div>
            <h2>Users</h2>
            <div>
                {users.map((user) => (
                    <UserCard key={user.id} {...user} />
                ))}
            </div>
        </div>
    );
}
