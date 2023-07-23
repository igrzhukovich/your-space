import UserCard from "@/components/UserCard";
import { prisma } from "@/lib/prisma";

export default async function UsersPage() {
    const users = await prisma.user.findMany();

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
