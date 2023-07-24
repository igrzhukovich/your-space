import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email!;
    const data = await req.json();
    const user = await prisma.user.update({
        where: { email },
        data,
    });

    return NextResponse.json(user);
}
