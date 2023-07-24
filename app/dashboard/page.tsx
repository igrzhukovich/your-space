import UserCard from "@/components/UserCard";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import ProfileForm from "./ProfileForm";

export default async function Dashboard() {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("/api/auth/signin");
    }

    console.log({
        session,
    });

    const email = session.user?.email!;
    const user = await prisma.user.findUniqueOrThrow({ where: { email } });

    return <ProfileForm user={user} />;
}
