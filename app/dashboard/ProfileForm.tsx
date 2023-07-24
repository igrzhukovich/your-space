"use client";

async function UpdateUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log({
        formData,
    });

    const body = {
        name: formData.get("name"),
        email: formData.get("email"),
    };

    await fetch("/api/users", {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export default function ProfileForm({ user }: any) {
    return (
        <form onSubmit={UpdateUser}>
            <label htmlFor="name">
                Full Name
                <input
                    type="text"
                    name="name"
                    placeholder="First name"
                    defaultValue={user?.name}
                    required
                />
            </label>

            <label htmlFor="email">Email address</label>
            <input
                type="email"
                name="email"
                placeholder="Email address"
                defaultValue={user?.email}
                required
            />
            <small>We'll never share your email with anyone else.</small>

            <button type="submit">Submit</button>
        </form>
    );
}
