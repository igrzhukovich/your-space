import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions);
    const { targetUserId } = await req.json();

    const currentUserId = await prisma.user
        .findFirst({ where: { email: session?.user?.email! } })
        .then((user) => user?.id!);

    const record = await prisma.follows.create({
        data: {
            followerId: currentUserId,
            followingId: targetUserId,
        },
    });

    return NextResponse.json(record);
}

export async function DELETE(req: NextRequest) {
    const session = await getServerSession(authOptions);
    const targetUserId = req.nextUrl.searchParams.get("targetUserId");

    const currentUserId = await prisma.user
        .findFirst({ where: { email: session?.user?.email! } })
        .then((user) => user?.id!);

    const record = await prisma.follows.delete({
        where: {
            followerId_followingId: {
                followerId: currentUserId,
                followingId: targetUserId!,
            },
        },
    });

    return NextResponse.json(record);
}
