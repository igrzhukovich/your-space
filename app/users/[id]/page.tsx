import FollowButton from "@/components/FollowButton/FollowButton";
import UserCard from "@/components/UserCard";
import { prisma } from "@/lib/prisma";

interface Props {
    params: {
        id: string;
    };
}

export default async function UserPage({ params }: Props) {
    const user = await prisma.user.findUniqueOrThrow({
        where: { id: params.id },
    });

    return (
        <div>
            <UserCard {...user} />
            <FollowButton targetUserId={params.id} />
        </div>
    );
}
