"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

interface Props {
    targetUserId: string;
    isFollowing: boolean;
}

export default function FollowClient({ targetUserId, isFollowing }: Props) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [isFetching, setFetching] = useState(false);
    const isMutating = isPending || isFetching;

    const follow = async () => {
        setFetching(true);

        await fetch("/api/follow", {
            method: "POST",
            body: JSON.stringify({
                targetUserId,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        setFetching(false);
        startTransition(() => {
            router.refresh();
        });
    };
    const unfollow = async () => {
        setFetching(true);

        await fetch(`/api/follow?targetUserId=${targetUserId}`, {
            method: "DELETE",
        });

        setFetching(false);
        startTransition(() => {
            router.refresh();
        });
    };

    if (isFollowing) {
        return (
            <button onClick={unfollow} aria-busy={isMutating && "true"}>
                Unfollow
            </button>
        );
    } else {
        return (
            <button onClick={follow} aria-busy={isMutating && "true"}>
                Follow
            </button>
        );
    }
}
